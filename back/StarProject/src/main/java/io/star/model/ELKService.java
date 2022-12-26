package io.star.model;

/* 전운량 1 ~ 10
 * 　 맑음(전운량 2.4이하), 구름조금(전운량 2.5∼5.4), 구름많음(5.5∼8.4), 흐림(전운량 8.5이상 )
 * 
 * 	0 : 별 보기 아주 좋은 날이에요
 * 	1 ~ 2 : 별 보기 좋은 날이에요
 * 	3 ~ 5 : 별 보기 힘들어요 
 * 	6 ~ 8 : 별 보기 아주 힘들어요
 * 	9 ~ 10 : 별 볼 수 없어요
 * 
 * 시정 거리  - 몇 km 까지 보이냐는 것.
 * 	20 km 정도는 되어야 선명한 야경 사진을 얻을 수 있음.
 * 	보통 바람이 거세게 불어 미세먼지를 밀어내거나 비가 내린 뒤 시정거리가 좋음
 * 	영하권 기온의 겨울철엔 습도가 나와 시정거리가 25 또는 30 km 가 나오기도 함.
 * 
 * 중하운량 
 * 	실제 날씨에 영향을 주는 중하운량
 * 	총 운량 중 지면과 가까운 구름의 양이 얼마나 되는지 나타낸 것
 * 	
 * 날씨 
 * 	1. 맑음 
 * 	2. 구름많음
 * 	3. 구름조금
 * 	4. 흐림 
 * 	5. 소나기, 약한/보통/강한 비 단속적/연속적, 비 끝 -> 비
 * 	6. 가루눈, 약한 진눈깨비 , 약한/보통/강한 눈 단속적/연속적, 눈 끝 -> 눈
 *	7. 천둥번개, 낙뢰 -> 천둥번개
 *	8. 뇌우
 *	9. 연무
 *	10. 안개
 *	11. 박무
 *	
 * **/

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.http.HttpHost;
import org.elasticsearch.action.get.GetRequest;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.star.model.dto.ObserveStarRegionDTO;

@Service
public class ELKService {
	
	/** 도시 별 별의 관측 정보 api **/
	@Transactional
	public ObserveStarRegionDTO getStarData(String region) throws Exception {
		
		Map<String, Object> elkData = getData(region);
		
		if (elkData == null) {
			return null;
		}
		
		String weatherResult = null;
		String starResult = null;
		
		// 날짜
		Date now = new Date();		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String nowDate = dateFormat.format(now);
				
		// 현재일기 
		String weather = (String) elkData.get("현재일기");
		
		if (weather != null) {
			weatherResult = getWeatherResult(weather);
		}
		
		// 별 관측 결과
		float distance = Float.valueOf((String) elkData.get("시정km"));
		String cloud = (String) elkData.get("운량1/10");
		
		if (cloud != null) {
			starResult = getStarResult(cloud, distance);
		}
		
		System.out.println("결과!!");
		ObserveStarRegionDTO observeResult = new ObserveStarRegionDTO(nowDate, region, starResult, weatherResult);
		
		System.out.println(observeResult);
		
		return observeResult;
		
	}
	
	// 현재날씨 정보
	public String getWeatherResult(String weather) {
		
		System.out.println(weather);
		
		if (weather.contains("눈") || weather.contains("진눈깨비")) {
			
			return "눈";
			
		} else if (weather == "소나기" || weather.contains("비")) {
			
			return "비";
			
		} else if (weather == "천둥번개" || weather == "낙뢰" || weather == "뇌우") {
		
			return "천둥번개";
			
		} else if (weather == "연무" || weather == "안개" || weather == "박무") {
			
			return "안개";
			
		} else {
			
			return weather;
		}
		
	}
	
	// 별 관측 분석
	public String getStarResult(String cloud, float distance) {
		
		String starResult = null;
		
		switch (cloud) {
		case "0":
			
			if (distance < 20) {
				starResult = "별 보기 쉽지 않아요";
			}
			
			starResult = "별이 잘 안 보여요";
			break;
			
		case "1": case "2":
			
			if (distance < 20) {
				starResult = "별이 잘 안 보여요";
			}
			
			starResult = "별 보기 좋은 날이에요";
			break;
			
		case "3": case "4": case "5":
			starResult = "별 보기 힘들어요";
			break;
			
		case "6": case "7": case "8":
			starResult = "별 보기 아주 힘들어요";
			break;

		default:
			starResult = "별 볼 수 없어요";
			break;
		}
		
		return starResult;
	}
	

	/** Elastic Search 에서 도시 별 관측 정보 수집 api **/
	@Transactional
	public Map<String, Object> getData(String region) throws Exception {

		RestHighLevelClient client = new RestHighLevelClient(
				RestClient.builder(new HttpHost("127.0.0.1", 9200, "http")));

		String index = "weather";
		GetRequest request = new GetRequest(index, region);
		
		RequestOptions options = RequestOptions.DEFAULT;
		
		Map<String, Object> sourceAsMap = null;

		// 예외 발생 상황
		// 	- 해당 index 명이 틀린 경우
		// 	- 서버가 꺼져있는 경우
		// 	- 해당 도시 자체가 없을 경우 
		// 	- 해당 도시의 데이터가 없을 경우 
		try {
			
			GetResponse response = client.get(request, options);
			
			if (response.isExists()) {

				sourceAsMap = response.getSourceAsMap();
				
			} else {
				
				System.out.println("결과가 존재하지 않습니다.");
				
			}
		} catch (Exception e) {
			
			// 예외처리 이 두개 해주기 !! ~~
			
			//[output5] ElasticsearchStatusException[Elasticsearch exception [type=index_not_found_exception, reason=no such index [output5]]]
			System.out.println("해당 index 가 존재 하지 않을 때 예외발생 -- ElasticsearchStatusException");
			
			// java.net.ConnectException: Timeout connecting to [/127.0.0.1:9200]
			System.out.println("서버 꺼졌을 때 -- ConnectException ");
			e.printStackTrace();

		} finally {
			client.close();
		}

		return sourceAsMap;
	}

	@Transactional
	public List<Map<String, Object>> getWeatherAllData() throws Exception {

		RestHighLevelClient client = new RestHighLevelClient(
				RestClient.builder(new HttpHost("127.0.0.1", 9200, "http")));

		String index = "output4";

		Map<String, Object> sourceAsMap = null;
		List<Map<String, Object>> sourceList = new ArrayList<Map<String, Object>>();

		try {

			SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

			searchSourceBuilder.query(QueryBuilders.matchAllQuery());
			searchSourceBuilder.from(0);
			searchSourceBuilder.size(110);

			SearchRequest searchRequest = new SearchRequest(index);
			searchRequest.source(searchSourceBuilder);

			SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);
			SearchHits searchHits = searchResponse.getHits();
						
			for (SearchHit hit : searchHits) {
				sourceAsMap = hit.getSourceAsMap();
				sourceList.add(sourceAsMap);
			}
			
			System.out.println(sourceList.size()); // 97개

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			client.close();

		}

		return sourceList;
	}

}
