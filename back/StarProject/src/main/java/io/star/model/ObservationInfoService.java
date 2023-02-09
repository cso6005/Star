package io.star.model;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.star.exception.CustomException;
import io.star.exception.UserErrorCode;
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
	
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

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
	public List<ObservationSiteDTO> getObservationSite(String regionName) {

		long startTime = System.currentTimeMillis();
		List<ObservationSiteDTO> observationSiteListDTO = new ArrayList<ObservationSiteDTO>();

		RegionEntity regionEntity = regionRepositoty.findByRegionName(regionName)
				.orElseThrow(() -> new CustomException(UserErrorCode.INVALID_REGION_NAME));

		List<ObservationSiteEntity> observationSiteListEntity = observationSiteRepository
				.findAllByRegionId(regionEntity);

		if (observationSiteListEntity.isEmpty()) {
			LOGGER.info("[ObservationInfo][geObservationSite] - 클라이언트에서 조회한 {} 지역의 명소 데이터는  존재하지 않습니다. :: Response = null :: {}ms", regionName, (System.currentTimeMillis() - startTime));			
		}

		observationSiteListEntity.stream().forEach(
				o -> observationSiteListDTO.add(new ObservationSiteDTO(o.getSiteId(), o.getSiteName(), o.getSiteInfo(),
						o.getSiteX(), o.getSiteY(), o.getSiteAddress(), o.getRegionId().getRegionId())));

		return observationSiteListDTO;
	}

	@Transactional
	public List<ObservatorySiteDTO> getObservatorySite(String regionName) {

		long startTime = System.currentTimeMillis();
		List<ObservatorySiteDTO> observatorySiteListDTO = new ArrayList<ObservatorySiteDTO>();

		RegionEntity regionEntity = regionRepositoty.findByRegionName(regionName)
				.orElseThrow(() -> new CustomException(UserErrorCode.INVALID_REGION_NAME));

		List<ObservatorySiteEntity> observatorySiteListEntity = observatorySiteRepository
				.findAllByRegionId(regionEntity);

		if (observatorySiteListEntity.isEmpty()) {
			LOGGER.info("[ObservationInfo][geObservatorySite] - 클라이언트에서 조회한 {} 지역의 천문대 데이터는  존재하지 않습니다. :: Response = null :: {}ms", regionName, (System.currentTimeMillis() - startTime));			
		}

		observatorySiteListEntity.stream().forEach(
				o -> observatorySiteListDTO.add(new ObservatorySiteDTO(o.getSiteId(), o.getSiteName(), o.getSiteInfo(),
						o.getSiteX(), o.getSiteY(), o.getSiteAddress(), o.getRegionId().getRegionId())));

		return observatorySiteListDTO;
	}

	@Transactional
	public List<ConstellationDTO> getConstellationList(String seasonName) {

		long startTime = System.currentTimeMillis();
		List<ConstellationDTO> constellationListDTO = new ArrayList<ConstellationDTO>();

		SeasonEntity seasonEntity = seasonRepository.findBySeason(seasonName)
				.orElseThrow(() -> new CustomException(UserErrorCode.INVALID_SEASON_NAME));

		List<ConstellationEntity> constellationListEntity = constellationRepository.findAllBySeasonId(seasonEntity);

		if (constellationListEntity.isEmpty()) {
			LOGGER.info("[ObservationInfo][geObservatorySite] - 클라이언트에서 조회한 {} 계절의 별자리 데이터는  존재하지 않습니다. :: Response = null :: {}ms", seasonName, (System.currentTimeMillis() - startTime));			
		}

		constellationListEntity.stream().forEach(
				c -> constellationListDTO.add(new ConstellationDTO(c.getConstellationId(), c.getConstellationName(),
						c.getConstellationInfo(), c.getConstellationLegend(), c.getSeasonId().getSeasonId())));

		return constellationListDTO;
	}

	@Transactional
	public ConstellationDTO getConstellation(int constellationId) {

		ConstellationDTO constellationDTO = null;

		ConstellationEntity constellationEntity = constellationRepository.findById(constellationId)
				.orElseThrow(() -> new CustomException(UserErrorCode.NOT_CONSTELLATION_DATA));

		constellationDTO = new ConstellationDTO(constellationEntity.getConstellationId(),
				constellationEntity.getConstellationName(), constellationEntity.getConstellationInfo(),
				constellationEntity.getConstellationLegend(), constellationEntity.getSeasonId().getSeasonId());

		return constellationDTO;
	}
}
