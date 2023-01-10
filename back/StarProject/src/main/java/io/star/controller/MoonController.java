package io.star.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.star.model.MoonService;

@RestController
@RequestMapping("moon")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MoonController {
	
	@Autowired
	private MoonService moonService;
	
	@GetMapping("/cycle")
	public String getMoon(@RequestParam("date") int num) {
		
		String moonName = moonService.getMoonName();
		
		if(moonService.getMoonDay(moonName) == num) {
			return moonName;
		}
		
		String moon = moonService.getLunarCycle(moonName, num);
			
		return moon;
	}

}
