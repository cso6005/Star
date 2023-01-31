package io.star.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CommonErrorCode implements ErrorCode {
	

	//400
	INVALID_PARAMETER(HttpStatus.BAD_REQUEST, "잘못된 파라미터가 존재합니다. 확인 후 다시 시도해주세요."),
	MISSING_PARAMETER(HttpStatus.BAD_REQUEST, "메서드 매개 변수 유형에 필요한 요청 매개 변수 'id'가 없습니다"),
     
    //401
    INVALID_AUTH_TOKEN(HttpStatus.UNAUTHORIZED, "권한 정보가 없는 토큰입니다."),
    
    //404 // 사실 상 post 가 없으므로 빼도 됨.
    RESOURCE_NOT_FOUND(HttpStatus.NOT_FOUND, "리소스가 존재하지 않습니다. 확인 후 다시 시도해주세요."),
    
    //405
    INVALID_METHOD(HttpStatus.METHOD_NOT_ALLOWED ,"메소드 매칭이 되지 않습니다. 확인 후 다시 시도해주세요"),
    
    //500 (위 설정한 예외 제외한 RuntimeException 을 포함한 모든 Exception Handler 처리)
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "내부 서버 에러입니다. 서버팀에 문의해주세요."),
    ;
		
    private final HttpStatus httpStatus;
    
    private final String message;
	
	
}
