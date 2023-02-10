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

import io.star.model.ObservingInfoService;
import io.star.model.MoonService;
import io.star.model.dto.ObserveStarRegionDTO;

@RestController
@RequestMapping("observing-info")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ObservingInfoController {
	
	@Autowired
	private ObservingInfoService observingInfoServcie;
	
	@Autowired
	private MoonService moonService;
	
	@GetMapping("/region")
	public ObserveStarRegionDTO getWeather(@RequestParam("id") String regionName) throws Exception {
		
		ObserveStarRegionDTO observeResult = observingInfoServcie.getStarData(regionName);
		
		return observeResult;
	}
	
	@GetMapping("/region/all")
	public List<Map<String, Object>> getWeatherAll() throws Exception {
		
		List<Map<String, Object>> result = observingInfoServcie.getWeatherAllData();
		List<Map<String, Object>> summaryResult = new ArrayList<Map<String, Object>>();
		
		for(Map<String, Object> i : result) {
			if(i.get("이름").equals("수원") || i.get("이름").equals("서울") || i.get("이름").equals("강릉") || i.get("이름").equals("동해") || i.get("이름").equals("대구") || i.get("이름").equals("광주") || i.get("이름").equals("태백") || i.get("이름").equals("서귀포")) {
				summaryResult.add(i);
			}
		}
		
		return summaryResult;
	}
	
	@GetMapping("/moon")
	public String getMoon(@RequestParam("date") int num) {
		
		String moonName = moonService.getMoonName();
		
		if(moonService.getMoonDay(moonName) == num) {
			return moonName;
		}
		
		String moon = moonService.getLunarCycle(moonName, num);
			
		return moon;
	}
}
