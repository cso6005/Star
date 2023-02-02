package io.star.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class ObservatorySiteDTO {
	
	private int siteId;
	
	private String siteName;
	
	private String siteInfo;
	
	private Double siteX;
	
	private Double siteY;
	
	private String siteAddress;
	
	private int regionId;

}
