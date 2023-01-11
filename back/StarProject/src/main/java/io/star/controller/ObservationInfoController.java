package io.star.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.star.model.ObservationInfoService;
import io.star.model.dto.ConstellationDTO;
import io.star.model.dto.ObservationSiteDTO;
import io.star.model.dto.ObservatorySiteDTO;

@RestController
@RequestMapping("observation-info")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ObservationInfoController {
	
	@Autowired
	private ObservationInfoService observationInfoService;
	
	@GetMapping("/get-site")
	public List<ObservationSiteDTO> getObservationSite (@RequestParam("id") String regionName) throws Exception {
		
		System.out.println("get info");
		System.out.println(regionName);
		
		List<ObservationSiteDTO> observationSiteList = observationInfoService.getObservationSite(regionName);
		
		return observationSiteList;
		
		
	}
	
	@GetMapping("/get-observatory")
	public List<ObservatorySiteDTO> getObservatorySite (@RequestParam("id") String regionName) throws Exception {
		
		System.out.println("get info");
		System.out.println(regionName);
		
		List<ObservatorySiteDTO> observatorySiteList = observationInfoService.getObservatorySite(regionName);
		
		return observatorySiteList;
		
		
	}
	
	@GetMapping("/get-constellation-list")
	public List<ConstellationDTO> getConstellationList (@RequestParam("id") String season) throws Exception {
		
		System.out.println("get info");
		
		List<ConstellationDTO> constellationList = observationInfoService.getConstellationList(season);
		
		return constellationList;
		
		
	}
	
	@GetMapping("/get-constellation")
	public ConstellationDTO getConstellation (@RequestParam("id") int constellationId) throws Exception {
		
		System.out.println("get info");
		
		ConstellationDTO constellation = observationInfoService.getConstellation(constellationId);
		
		return constellation;
		
	}
	

}
