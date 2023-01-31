package io.star.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.star.model.ELKService;
import io.star.model.dto.ObserveStarRegionDTO;

@RestController
@RequestMapping("elk")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ELKController {
	
	@Autowired
	private ELKService elkServcie;
	
	@GetMapping("/getWeather")
	public ObserveStarRegionDTO getWeather(@RequestParam("id") String region) throws Exception {
		
		ObserveStarRegionDTO observeResult = elkServcie.getStarData(region);
		
		System.out.println(observeResult);
		
		return observeResult;
		
	}
	
	@GetMapping("/getWeatherAll")
	public List<Map<String, Object>> getWeatherAllData() throws Exception {
		
		List<Map<String, Object>> result = elkServcie.getWeatherAllData();
		List<Map<String, Object>> summaryResult = new ArrayList<Map<String, Object>>();
		
		for(Map<String, Object> i : result) {
			if(i.get("이름").equals("수원") || i.get("이름").equals("서울") || i.get("이름").equals("강릉") || i.get("이름").equals("동해") || i.get("이름").equals("대구") || i.get("이름").equals("광주") || i.get("이름").equals("태백") || i.get("이름").equals("서귀포")) {
				System.out.println(i.get("이름"));
				summaryResult.add(i);
			}
		}
		
		return summaryResult;
		
		
	}
	

}
