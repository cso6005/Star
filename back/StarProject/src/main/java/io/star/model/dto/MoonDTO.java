package io.star.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Builder
@AllArgsConstructor
@ToString
public class MoonDTO {

	private int moonId;
	
	private String moonName;
	
	private int count;
	
	private int day;
	
}
