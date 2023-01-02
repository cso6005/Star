package io.star.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.star.model.entity.ObservationSiteEntity;
import io.star.model.entity.RegionEntity;

@Repository
public interface ObservationSiteRepository extends JpaRepository<ObservationSiteEntity, Integer>{

	List<ObservationSiteEntity> findAllByRegionId(RegionEntity regionId);
	
	
}
