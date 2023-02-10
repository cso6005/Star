package io.star.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserErrorCode implements ErrorCode {
	

    ELK_NOT_CONNECT(HttpStatus.INTERNAL_SERVER_ERROR, "Elastic Server:9200 가 꺼져있습니다."),

    INVALID_REGION_NAME(HttpStatus.INTERNAL_SERVER_ERROR, "해당 지역 파라미터 존재하지 않습니다."),

    INVALID_SEASON_NAME(HttpStatus.INTERNAL_SERVER_ERROR, "해당 계절 파라미터 존재하지 않습니다."),

    NOT_CONSTELLATION_DATA(HttpStatus.INTERNAL_SERVER_ERROR, "해당 별자리 데이터가 존재하지 않습니다."),
    ;
    
    private final HttpStatus httpStatus;
    
    private final String message;
	
}
