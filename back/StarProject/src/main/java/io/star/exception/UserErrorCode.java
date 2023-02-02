package io.star.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UserErrorCode implements ErrorCode {
	

    ELK_NOT_CONNECT(HttpStatus.INTERNAL_SERVER_ERROR, "Elastic Server 가 꺼져있습니다. Timeout connecting to [/127.0.0.1:9200]"),

    ;
	
    private final HttpStatus httpStatus;
    private final String message;
	
}
