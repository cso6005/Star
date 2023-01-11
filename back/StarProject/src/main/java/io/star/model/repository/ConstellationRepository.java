package io.star.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.star.model.entity.ConstellationEntity;
import io.star.model.entity.SeasonEntity;

@Repository
public interface ConstellationRepository extends JpaRepository<ConstellationEntity, Integer>{

	List<ConstellationEntity> findAllBySeasonId(SeasonEntity seasonId);
	
}
