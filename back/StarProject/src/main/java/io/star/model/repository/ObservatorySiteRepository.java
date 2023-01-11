package io.star.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.star.model.entity.ObservatorySiteEntity;
import io.star.model.entity.RegionEntity;

@Repository
public interface ObservatorySiteRepository extends JpaRepository<ObservatorySiteEntity, Integer>{

	List<ObservatorySiteEntity> findAllByRegionId(RegionEntity regionId);
	
	
}
