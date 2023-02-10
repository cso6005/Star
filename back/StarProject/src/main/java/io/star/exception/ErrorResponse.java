package io.star.exception;

import java.util.Date;

import org.springframework.http.ResponseEntity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorResponse {
	
	private String timestamp;

	private int status; 
	
	private String error;

	private String message;
	
	private String path;

	public static ResponseEntity<Object> toCommonErrorResponse(CommonErrorCode e, String requestURL) {
		
		return ResponseEntity.status(e.getHttpStatus())
				.body(ErrorResponse.builder()
						.timestamp(new Date().toString())
						.status(e.getHttpStatus().value())
						.error(e.name())
						.message(e.getMessage())
						.path(requestURL).build());
	}
	
	public static ResponseEntity<Object> toUserErrorResponse(UserErrorCode e, String requestURL) {
		
		return ResponseEntity.status(e.getHttpStatus())
				.body(ErrorResponse.builder()
						.timestamp(new Date().toString())
						.status(e.getHttpStatus().value())
						.error(e.name())
						.message(e.getMessage())
						.path(requestURL).build());
	}
}
