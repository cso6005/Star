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
	
	@GetMapping("/observation/site")
	public List<ObservationSiteDTO> getObservationSite (@RequestParam("id") String regionName) throws Exception {
		
		List<ObservationSiteDTO> observationSiteList = observationInfoService.getObservationSite(regionName);
		
		return observationSiteList;
	}
	
	@GetMapping("/observatory/site")
	public List<ObservatorySiteDTO> getObservatorySite (@RequestParam("id") String regionName) throws Exception {
		
		List<ObservatorySiteDTO> observatorySiteList = observationInfoService.getObservatorySite(regionName);
		
		return observatorySiteList;
	}
	
	@GetMapping("/constellation/list")
	public List<ConstellationDTO> getConstellationList (@RequestParam("id") String seasonName) throws Exception {
		
		List<ConstellationDTO> constellationList = observationInfoService.getConstellationList(seasonName);
		
		return constellationList;
	}
	
	@GetMapping("/constellation/detail")
	public ConstellationDTO getConstellation (@RequestParam("id") int constellationId) throws Exception {
		
		ConstellationDTO constellation = observationInfoService.getConstellation(constellationId);
		
		return constellation;
	}
}
