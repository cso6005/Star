package io.star.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public ObserveStarRegionDTO test(@RequestParam("id") String region) throws Exception {
		System.out.println(" get api getWeather ! ");
		System.out.println(region);
		
		ObserveStarRegionDTO observeResult = elkServcie.getStarData(region);
		
		System.out.println(observeResult);
		
		return observeResult;
		
	}
	
	@GetMapping("/getWeatherAll")
	public List<Map<String, Object>> getWeatherAllData() throws Exception {
		
		System.out.println(" get api getWeatherAll ! ");
		List<Map<String, Object>> result = elkServcie.getWeatherAllData();
		
		return result;
		
	}
	

}
