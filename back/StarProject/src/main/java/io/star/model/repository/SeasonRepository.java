package io.star.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.star.model.entity.SeasonEntity;

@Repository
public interface SeasonRepository extends JpaRepository<SeasonEntity, Integer>{

	Optional<SeasonEntity> findBySeason(String season);
	
}
