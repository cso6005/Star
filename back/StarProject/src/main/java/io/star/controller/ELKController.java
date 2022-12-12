package io.star.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.star.model.ELKService;

@RestController
@RequestMapping("elk")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ELKController {
	
	@Autowired
	private ELKService elkServcie;
	
	@GetMapping("/getWeather")
	public Map<String, Object> test(@RequestParam("id") String region) throws Exception {
		
		System.out.println(" get api getWeather ! ");
		System.out.println(region);
		Map<String, Object> result = elkServcie.getData(region);
		
		return result;
		
	}
	
	@GetMapping("/getWeatherAll")
	public List<Map<String, Object>> getWeatherAllData() throws Exception {
		
		System.out.println(" get api getWeatherAll ! ");
		List<Map<String, Object>> result = elkServcie.getWeatherAllData();
		
		return result;
		
	}
	

}
