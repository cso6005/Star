# 🌟 Project _ Star

 <span style="color:gray">*__Project Summary__*</span>

✔️ **프로젝트 명** 

ElasticStack 을 이용한 별 관측 정보 제공 웹 애플리케이션

**✔️ 프로젝트 기간**

2022.12.05 ~ 2023.02.10

**✔️ 프로젝트 설명**

- 대표 지역 별, 실시간 날씨 정보 제공 서비스
- 날씨 정보를 이용한 별 관측 여부 서비스
- 별자리 정보, 천문대 정보, 별 관측 명소 정보, 별 관측 Tip 제공 서비스



## 01. 팀 소개

**✔️ 팀**

| 이름 | 주 포지션 | 세부 담당  | GITHUB 주소 |
| --- | --- | --- | --- |
| 김영준 | Front | 별 정보(Front), 별 관측 Tip(Front), 특정 지역 검색 기능(Front), 지역 요약 페이지(Front), 지역 상세 페이지(Front), Logstash, ElasticSearch, 현재 달 정보(Front,Back) | https://github.com/itavita08 |
| 최소영 | Leader Back | Back REST-API 생성, 서버- 클라이언트 JSON 데이터 통신, Back 단 HTTP 에러 및 사용자 정의 예외 처리, Logback처리, 데이터 Crawling 구현 및 ETLpipline 적용, Java-high-level-client 를 이용하여 elastic 연동 자바 애플리케이션 구현, D3.js/topoJSON 으로 지도svg차트 구현, 별자리/ 명소/천문대 페이지(Front, Back) | https://github.com/cso6005 |


## 02. 프로젝트 기획

**✔️ 주제 선정 이유 및 기획 의도**

 주제 선정을 위해 논의하던 중, 별 관측과 관련하여 종합적인 정보를 제공하는 서비스가 현재 없다는 것을 알게 되었습니다. 

 최적의 관측 조건을 찾기 위해서는 기상 등 여러 데이터가 종합적으로 분석되어야 하므로 데이터 검색/분석 엔진 Elastic Stack 이 필요하다고 판단되었습니다. 

 Elastic Stack 을 이용한 실시간 별 관측 정보 검색을 주 기능으로 하여, 별자리, 별 관측 명소 등 다양한 정보를 제공하는 서비스를 개발하기 위해 본 프로젝트를 기획하게 되었습니다. 

**✔️ 주요 서비스**

**☀️ About Star**

- 별에 관한 정보 제공

**🌈 Observing Stars**

- 지역 별, 날씨 정보와 별 관측 가능 유무를 요약한 정보를 제공하는 서비스
- 특정 지역의 상세한 정보(운량, 이슬점, 달 모양 등)를 제공하는 서비스
- 원하는 지역 정보 검색 기능

**🌟 About Constellations**

- 별자리 유래와 전설에 관한 정보를 제공
- 계절 별, 별자리 선택 가능

**🌙 Observation Information**

**⭐ 별 관측 명소**

- 지역 별, 유명한 별 관측 명소 위치와 정보 제공

🌕 **천문대**

- 지역 별, 천문대 위치와 정보 제공

📷 **촬영 Tip**

- 카메라, 갤럭시, 아이폰 별 촬영 방법 제공

## 03. 프로젝트 설계

✔️ **서비스 아키텍처**

![아키텍처](https://user-images.githubusercontent.com/66711073/218293299-797b99c8-35bb-44c3-9d99-2b7dd31d9f50.png)

**✔️ 개발 스택 및 사용 TOOL**

- **OS**

<img src="https://img.shields.io/badge/Windows-0078D6?style=flat&logo=Windows&logoColor=white"> 

- **Back**

<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white"> ![](https://img.shields.io/badge/Java-007396?style=flat&logo=OpenJDK&logoColor=white") <img src="https://img.shields.io/badge/Apache Maven-C71A36?style=flat&logo=Apache Maven&logoColor=white"> <img src="https://img.shields.io/badge/JPA-6DB33F?style=flat&logo=&logoColor=white">


- **Front**

<img src="https://img.shields.io/badge/React-1DAFB?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white">  

- **DB**

<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white">

- **Data Search Engine**

<img src="https://img.shields.io/badge/Elastic-005571?style=flat&logo=Elastic&logoColor=white"> <img src="https://img.shields.io/badge/Elasticsearch-005571?style=flat&logo=ElasticSearch&logoColor=white"> <img src="https://img.shields.io/badge/Logstash-005571?style=flat&logo=Logstash&logoColor=white"> <img src="https://img.shields.io/badge/JavaRestHighLevelClient-005571?style=flat&logo=A&logoColor=white"> 

<img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Crawling-005571?style=flat&logo=&logoColor=white">

- **IDE**

<img src="https://img.shields.io/badge/STS-6DB33F?style=flat&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/VSC-007ACC?style=flat&logo=VisualStudioCode&logoColor=white">

- **기타**

<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/REST API-5A29E4?style=flat&logo=REST API&logoColor=white">  <img src="https://img.shields.io/badge/JSON-000000?style=flat&logo=JSON&logoColor=white"> 
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white">


- **프로젝트 관리**

<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Agile-E20074?style=flat&logo=A&logoColor=white"> <img src="https://img.shields.io/badge/Jira-0052CC?style=flat&logo=Jira Software&logoColor=white"> 
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white">

**✔️ DB ERD**

![Star ERD](https://user-images.githubusercontent.com/66711073/218293333-c4ceab56-ecde-45b5-b9e5-302fed80f83b.png)

**✔️ 웹 페이지 와이어프레임**

![Untitled (4)](https://user-images.githubusercontent.com/66711073/218293331-854d1548-2fc8-4ad4-8102-5cea0d922b39.png)

[https://www.figma.com/file/hgX2Th6iOTF1tagKDHeEwQ/Star-Project?node-id=0%3A1&t=1qmCKmpxKyxZ7HmC-0](https://www.figma.com/file/hgX2Th6iOTF1tagKDHeEwQ/Star-Project?node-id=0%3A1&t=1qmCKmpxKyxZ7HmC-0)

## 04. 프로젝트 수행 내용

✔️ **프로젝트 진행 및 협업 방식**

- **애자일 프로세스 운영 - Gira 활용**
    - **Back Log & 스프린트 보드 & Burndown report**
        
        스토리 포인트, 포지션, 에픽의 상태 등을 기술하여 효율적 업무 처리를 유도
        
        - **Board/Report**
            
          ![1](https://user-images.githubusercontent.com/66711073/218293371-e595a0f1-b3d0-4832-8ca1-0a30649c244e.png)
          ![4](https://user-images.githubusercontent.com/66711073/218293372-cda5545d-5a36-4e0e-9fb9-f2f52ad3d0f6.png)
          ![5](https://user-images.githubusercontent.com/66711073/218293373-7898cc1d-a5c6-4f07-93e3-54f28d11d610.png)
            
        
- **Git Hub 소스 코드 관리**
    - Git-flow 을 활용한 코드 형상 관리

**✔️ 개발 및 기술 구현 결과**

- **Front End**
    - 서비스 기능에 적합한 `React JavaScript`  구현
    - Figma 와이어 프레임에 적합한 `Front CSS`  구현
    - `topojson` 와 `D3.js`를 사용하여 지도 SVG 차트 구현
    - 재사용성을 높이기 위한 `component` 화
    - 화면 이동에 적합한 `Router`, `navigate` 설계 및 구현
    - Back Spring boot와  `AXIOS HTTP` 통신 및 `JSON` 포맷 데이터 통신
    - `URL Mapping` 적용
    - 보안을 위한 클라이언트-서버 `Proxy`설정

- **Back End**
    - 로직에 적합한 `DB table` 설계
    - Spring Boot 단 `MVC` 디자인 패턴 구현
    - 서비스 기능에 필요한 `REST API` 구현
    - 일반 데이터 관리 DB `Mysql`, 로우 데이터 관리  `Elasticsearch` , `Logstash`구축
    - `JPA` 사용하여 DB와 통신
    - Front 와 `JSON` 포맷 데이터 통신
    - `enum` 로 exception 통합 관리
    - HTTP 에러 `exceptionHandler`  처리와 `customExceptionHandler`  처리로 error payload 재정의
    - Logback 처리로 서버 내 로그 수집
    - `Junit`, `Postman` 을 통해 `Test` & `debugging`
    - `Postman Collection` 으로 api 요청 통합 관리

- **DataSearch**
    - 작업 스케쥴러로 기상청 공공 데이터 `crawling` 자동화 설정
    - 데이터 검색 및 분석을 위해 `ElasticSearch`, `Logstash` 사용
    - `ETL 파이프라인` 적용
    - Spring Boot에서 `JavaRestHighLevelClient` API 를 이용하여 Elastic Search 데이터 가져오기

**✔️ 기능 구현 영상**

- **Observing Stars - 지역 검색 시, 별 관측 정보 제공 기능**
    
    ![main](https://user-images.githubusercontent.com/66711073/218293416-cd74d77a-e09f-4257-9189-a24ad912657a.gif)
    
- **Observing Stars - 지역 별, 별 관측 정보 제공 기능**
    
    ![summary](https://user-images.githubusercontent.com/66711073/218293615-f5277ac0-6230-4ada-83fb-9a883ddf0751.gif)
    
- **About Star - 별 관련 정보 제공 기능**
    
    ![aboutstar](https://user-images.githubusercontent.com/66711073/218293634-087136ae-47b9-434f-899f-716ce1026bbc.gif)
    
- **About Constellation - 별자리 정보 제공 기능**
    
    ![aboutconstellation](https://user-images.githubusercontent.com/66711073/218293612-f6406277-9874-4b02-95b9-6bcfd9ee4b1d.gif)
    
- **Observation Info - 별 관측 명소/천문대 명소 정보 제공 기능**
    
    ![observation](https://user-images.githubusercontent.com/66711073/218293638-49ce6c28-c363-438b-b5fe-94ff58700505.gif)
    
    
- **Observation Info - 촬영 Tip 정보 제공 기능**
    
    ![camera](https://user-images.githubusercontent.com/66711073/218293637-77541938-320a-46fc-8b2a-72716426e16a.gif)
    
    
**✔️ 회고**


| 김영준 | 이번 프로젝트는 의외로 간단한 웹 사이트 만들기였지만 너무 여유를 두고 진행하는 바람에 시간이 오래 걸렸었던것 같아 아쉽다….ㅠㅠ Kibana도 할용해보고 싶었지만 프로젝트 주제에 적합한 Kibana 활용 방법을 못찾아서 아쉽다. 처음 사용해본 Logstash가 잘 작동해줘서 너무 기뻤다! 생각 보다는 Back에서 할 일이 없어서 Front에 많이 매진한것 같고 처음 React를 사용할때 보다는 쉽게 접근할 수 있었던것 같다. 다음에 ELK를 사용하기 위해 더 많은 로우데이터를 찾아봐야겠다. |
| --- | --- |
| 최소영 | 이번 프로젝트를 통해 이론으로만 배웠던 ELK 를 직접 구현해봄으로써 대용량 데이터 검색 및 처리에 대해 깊게 알게 되어 좋았다. 또, 예외와 로그 처리에 대하여 부족했던 지식을 공부하고 이를 프로젝트에 적용함으로써  백엔드 역량을 더욱 키울 수 있었다.  정보 제공 사이트로 백엔드에 비해 프론트엔드 관련 작업이 많아, 부족했던 프론트 지식을 쌓을 수 있는 기회가 된 것같아 좋았다. 다음에는 애플리케이션 로그를 ELK 스택으로 분석 및 시각화하여, 관리자 전용 페이지를 추가해봐도 좋을 것 같다. |
