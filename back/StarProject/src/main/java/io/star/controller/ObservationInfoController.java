package io.star.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.star.model.ObservationInfoService;
import io.star.model.dto.ObservationSiteDTO;

@RestController
@RequestMapping("observation-info")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ObservationInfoController {
	
	@Autowired
	private ObservationInfoService observationInfoService;
	
	@GetMapping("/get-stie")
	public List<ObservationSiteDTO> getObservationSite (@RequestParam("id") String regionName) throws Exception {
		
		System.out.println("get info");
		System.out.println(regionName);
		
		List<ObservationSiteDTO> observationSiteList = observationInfoService.getObservationSite(regionName);
		
		return observationSiteList;
		
		
	}
	

}
