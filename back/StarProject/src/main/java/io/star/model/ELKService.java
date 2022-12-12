package io.star.model;

import java.util.ArrayList;
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

@Service
public class ELKService {

	// 테스트용 
	@Transactional
	public Map<String, Object> getData(String region) throws Exception {

		RestHighLevelClient client = new RestHighLevelClient(
				RestClient.builder(new HttpHost("127.0.0.1", 9200, "http")));

		String index = "output4";
		GetRequest request = new GetRequest(index, region);
		RequestOptions options = RequestOptions.DEFAULT;
		GetResponse response = client.get(request, options);

		Map<String, Object> sourceAsMap = null;

		// 응답의 결과를 Map 형태로 제공
		try {
			if (response.isExists()) {

				sourceAsMap = response.getSourceAsMap();
				System.out.println(sourceAsMap);

			} else {
				System.out.println("결과가 존재하지 않습니다.");
			}
		} catch (Exception e) {

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
