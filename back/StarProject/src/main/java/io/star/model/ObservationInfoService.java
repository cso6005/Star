package io.star.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.star.model.dto.ConstellationDTO;
import io.star.model.dto.ObservationSiteDTO;
import io.star.model.dto.ObservatorySiteDTO;
import io.star.model.entity.ConstellationEntity;
import io.star.model.entity.ObservationSiteEntity;
import io.star.model.entity.ObservatorySiteEntity;
import io.star.model.entity.RegionEntity;
import io.star.model.entity.SeasonEntity;
import io.star.model.repository.ConstellationRepository;
import io.star.model.repository.ObservationSiteRepository;
import io.star.model.repository.ObservatorySiteRepository;
import io.star.model.repository.RegionRepository;
import io.star.model.repository.SeasonRepository;

@Service
public class ObservationInfoService {

	@Autowired
	private ObservationSiteRepository observationSiteRepository;
	
	@Autowired
	private ObservatorySiteRepository observatorySiteRepository;

	@Autowired
	private RegionRepository regionRepositoty;
	
	@Autowired
	private SeasonRepository seasonRepository;
	
	@Autowired
	private ConstellationRepository constellationRepository;

	@Transactional
	public List<ObservationSiteDTO> getObservationSite(String regionName) throws Exception {

		List<ObservationSiteDTO> observationSiteListDTO = new ArrayList<ObservationSiteDTO>();

		try {

			Optional<RegionEntity> regionEntity = regionRepositoty.findByRegionName(regionName);

			List<ObservationSiteEntity> observationSiteListEntity = observationSiteRepository
					.findAllByRegionId(regionEntity.get());

			if (observationSiteListEntity.isEmpty()){
				
				System.out.println("해당 지역에 명소 정보 존재하지 않습니다.");
				
			}
			observationSiteListEntity.stream()
			.forEach(o -> observationSiteListDTO.add(new ObservationSiteDTO(o.getSiteId(), o.getSiteName(),
					o.getSiteInfo(), o.getSiteX(), o.getSiteY(), o.getSiteAddress(), o.getRegionId().getRegionId())));

		

		} catch (Exception e) {
			
			e.getStackTrace();

		}


		return observationSiteListDTO;

	}
	
	
	@Transactional
	public List<ObservatorySiteDTO> getObservatorySite(String regionName) throws Exception {

		List<ObservatorySiteDTO> observatorySiteListDTO = new ArrayList<ObservatorySiteDTO>();

		try {

			Optional<RegionEntity> regionEntity = regionRepositoty.findByRegionName(regionName);

			List<ObservatorySiteEntity> observatorySiteListEntity = observatorySiteRepository
					.findAllByRegionId(regionEntity.get());

			if (observatorySiteListEntity.isEmpty()){
				
				System.out.println("해당 지역에 천문대 정보 존재하지 않습니다.");
				
			}
			observatorySiteListEntity.stream()
			.forEach(o -> observatorySiteListDTO.add(new ObservatorySiteDTO(o.getSiteId(), o.getSiteName(),
					o.getSiteInfo(), o.getSiteX(), o.getSiteY(), o.getSiteAddress(), o.getRegionId().getRegionId())));

		

		} catch (Exception e) {
			
			e.getStackTrace();

		}

		return observatorySiteListDTO;

	}
	
	@Transactional
	public List<ConstellationDTO> getConstellationList(String season) throws Exception {

		List<ConstellationDTO> constellationListDTO = new ArrayList<ConstellationDTO>();

		try {

			Optional<SeasonEntity> seasonEntity =  seasonRepository.findBySeason(season);
			
			List<ConstellationEntity> constellationListEntity = constellationRepository.findAllBySeasonId(seasonEntity.get());

			if (constellationListEntity.isEmpty()){
				
				System.out.println("해당 계절 별자리 정보가 존재하지 않습니다.");
				
			}
			
			constellationListEntity.stream().forEach(c -> constellationListDTO.add(new ConstellationDTO(c.getConstellationId(), c.getConstellationName(), c.getConstellationInfo(), c.getConstellationLegend(), c.getSeasonId().getSeasonId())));

		} catch (Exception e) {
			
			e.getStackTrace();

		}

		return constellationListDTO;

	}
	
	@Transactional
	public ConstellationDTO getConstellation(int constellationId) throws Exception {


		ConstellationDTO constellationDTO = null;
		
		try {
			
			ConstellationEntity constellationEntity = constellationRepository.findById(constellationId).get();
			constellationDTO = new ConstellationDTO(constellationEntity.getConstellationId(), constellationEntity.getConstellationName(), constellationEntity.getConstellationInfo(), constellationEntity.getConstellationLegend(), constellationEntity.getSeasonId().getSeasonId());

		} catch (Exception e) {
			
			e.getStackTrace();

		}

		return constellationDTO;

	}

}
