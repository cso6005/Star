package io.star.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.star.model.dto.ObservationSiteDTO;
import io.star.model.entity.ObservationSiteEntity;
import io.star.model.entity.RegionEntity;
import io.star.model.repository.ObservationSiteRepository;
import io.star.model.repository.RegionRepository;

@Service
public class ObservationInfoService {

	@Autowired
	private ObservationSiteRepository observationSiteRepository;

	@Autowired
	private RegionRepository regionRepositoty;

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

}
