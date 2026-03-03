# 코드 구조·테스트·문서화

## 파일 처리 로직 통합

분산되어 있던 파일 관련 로직을 단일 클래스 체계로 통합했다.

- **`CommFileUtil.java`** (293줄) — 파일 경로 생성(`getFilePath`), 저장(`fileWrite`), 디렉토리 생성(`makeDir`), 다운로드(`outputStream`), SFTP 업로드(`setServerMFSave`/`setServerSFSave`)/삭제(`setServerFileDel`)를 단일 클래스로 통합
- **`CommFileDAO.java`** (64줄) — 파일 메타데이터 DB 처리 (insert, update, delete, 시퀀스 발급, 첨부 목록 조회)
- **`CommonService`** / `CommonServiceImpl` — 파일 업로드·다운로드를 포함한 공통 서비스 레이어 제공

## 유틸리티 모듈화

기존 `egovframework/devjitsu/common/utiles/` (23개 클래스)에서 `egovframework/com/devjitsu/common/utiles/` (10개)로 통합했다.

- `common/utiles/` 패키지에 10개 유틸 클래스(`CommFileUtil`, `CommonUtil`, `ConvertUtil`, `AESCipher`, `MailUtil` 등)로 정리
- `expend/common/helper/` 하위에 도메인별 모듈 구조화:
  - connection 7개
  - convert 2개
  - exception 14개
  - logger 4개
  - 총 30개 파일

미사용 클래스 삭제, 불필요 import 정리를 통해 코드베이스를 경량화했다.

## 테스트 전략

테스트가 전무했던 프로젝트에 Java(JUnit + Mockito)와 JavaScript(Jest + jsdom) 양쪽의 테스트 환경을 구축했다.

`PayAppController`(지급 결의)와 `SubHolidayService`(휴가 관리)를 첫 테스트 대상으로 선택한 근거: 운영 중 가장 많은 버그 리포트가 집중된 2개 모듈이었다. 전체 커버리지보다 실제 장애 빈도가 높은 모듈부터 회귀 방어선을 구축하는 것이 제한된 시간 내 최대 효과를 내는 전략이었다.

## 테스트 상세

### PayAppControllerTest.java (336줄, 10 케이스)

- 로그인 세션 검증
- 파일 업로드 경계값
- 파라미터 검증
- 정상 플로우
- 예외 처리

### SubHolidayServiceImplTest.java (287줄, 11 케이스)

- null 처리
- 엣지 케이스
- 리포지토리 상호작용
- 삭제 검증

### JavaScript 테스트 환경

jQuery 모킹 + 글로벌 객체 설정으로 DOM 의존 코드 테스트가 가능한 환경을 구성했다.

### CI/CD 통합

`mvn test` → JUnit XML 리포트 자동 수집과 함께 Checkstyle/PMD/SpotBugs 정적 분석을 [CI/CD 파이프라인](./cicd-pipeline)에 통합했다.

## 문서화

총 **3,831줄**, **12개 파일**의 문서를 작성하여 신규 인력 온보딩이 가능한 수준으로 정비했다.

| 문서 | 규모 |
|------|------|
| 아키텍처 개요 | 355줄 |
| 코딩 표준 | 536줄 |
| G20 연동 가이드 | 422줄 |
| DB 핵심 테이블 | 379줄 |
| 기타 8개 파일 | 2,139줄 |

## 한계

현재 커버리지는 핵심 모듈 2개에 한정되어 있다. DAO 레이어와 외부 연동 모듈로의 확장이 필요하지만, 레거시 Map 파라미터 구조가 테스트 작성의 장벽으로 남아 있다. Map 기반 파라미터는 컴파일 타임에 키 이름이나 타입을 검증할 수 없어, 테스트에서 필요한 파라미터 조합을 사전에 파악하기 어렵다.

### 관련 커밋

| 커밋 | 날짜 | 내용 |
|------|------|------|
| `79fedb6a8` | 2025-07-17 | 미사용 클래스 삭제 |
| `599dc9797` | 2025-07-17 | 불필요 import 정리 |
