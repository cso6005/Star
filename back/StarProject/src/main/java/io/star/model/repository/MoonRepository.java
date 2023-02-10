package io.star.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.star.model.entity.MoonEntity;

@Repository
public interface MoonRepository extends JpaRepository<MoonEntity, Integer>{

	@Query("select m.count from MoonEntity m where m.moonName =:moonName ")
	int findCountByMoonName(@Param("moonName") String moonName);
	
	@Query("select m from MoonEntity m where m.moonName =:moonName")
	MoonEntity findByMoonName(@Param("moonName") String moonName);
	
	@Query("select m.day from MoonEntity m where m.moonName =:moonName")
	int findDayByMoonName(@Param("moonName") String moonName);
	
}
