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
public class ObserveStarRegionDTO {

	private String date;
	
	private String region;
	
	private String starResult;
	
	private String weather;
	
}
