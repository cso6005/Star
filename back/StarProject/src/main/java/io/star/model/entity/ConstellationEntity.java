package io.star.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "constellation")
public class ConstellationEntity {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "constellation_id")
	private int constellationId;
	
	@Column(name = "constellation_name")
	private String constellationName;
	
	@Column(name = "constellation_info")
	private String constellationInfo;
	
	@Column(name = "constellation_legend")
	private String constellationLegend;
	
	@ManyToOne(targetEntity = SeasonEntity.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "season_id")
	private SeasonEntity seasonId;

}
