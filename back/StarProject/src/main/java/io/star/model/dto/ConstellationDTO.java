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
public class ConstellationDTO {
	
	private int constellationId;
	
	private String constellationName;
	
	private String constellationInfo;
	
	private String constellationLegend;
	
	private int seasonId;

}
