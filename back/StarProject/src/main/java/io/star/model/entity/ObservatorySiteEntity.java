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
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Table(name = "observatory_site")
public class ObservatorySiteEntity {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "site_id")
	private int siteId;
	
	@Column(name = "site_name")
	private String siteName;
	
	@Column(name = "site_info")
	private String siteInfo;
	
	@Column(name = "site_x")
	private Double siteX;
	
	@Column(name = "site_y")
	private Double siteY;
	
	@Column(name = "site_address")
	private String siteAddress;
	
	@ManyToOne(targetEntity = RegionEntity.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "region_id")
	private RegionEntity regionId;

}
