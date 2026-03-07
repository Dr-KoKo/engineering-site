# DH Engineering Site

VitePress 기반 기술 문서 & 블로그 사이트.

## Commands

```bash
npm run docs:dev      # 로컬 개발 서버
npm run docs:build    # 프로덕션 빌드
npm run docs:preview  # 빌드 결과 미리보기
```

## Structure

- `archive/` — 기술 문서 아카이브 (architecture, backend, infra, case-studies)
- `blog/` — 블로그 (시리즈 + 단독 글)
- `blog/<series-name>/` — 시리즈 디렉토리 (index.md + chNN.md)
- `.vitepress/config.mts` — 사이트 설정, nav, sidebar

## Blog Writing Conventions

- 블로그 글은 **한국어**로 작성한다
- 문체: ~입니다/~습니다 체, 대화체 유지
- 톤: 개념을 담백하게 서술. "초심자" 프레이밍, 평가적 레이블("잘못된/올바른"), 수사 의문문, 감탄 표현을 사용하지 않는다
- Mermaid 다이어그램 활용 (`vitepress-plugin-mermaid`)

## Blog Content Constitution

글의 구조와 내용을 작성할 때 다음 원칙을 따른다.

### 논증 흐름
- 문제 → 해결 기준 → 해결 시도의 한계 → 해법 순서로 전개한다
- 각 섹션은 이전 섹션과 자연스럽게 연결되어야 한다. 전환 문단을 통해 "왜 이 주제로 넘어가는지"를 밝힌다

### 문제 서술
- 문제를 나열만 하지 않는다. 각 문제가 **왜 발생하는지**(구조적 원인)를 설명하고, 구체적인 예시를 든다
- 예시는 하나의 도메인(예: 이커머스)을 일관되게 사용하여 독자가 맥락을 유지할 수 있게 한다

### 개념 설명
- 개념의 속성을 나열하기 전에, 그 개념이 **무엇인지**(what it IS)를 먼저 설명한다
- 비유를 활용하여 직관적 이해를 돕는다 (예: 은행 거래 원장, 회사 게시판)
- 속성은 개념의 자연스러운 귀결로 설명한다 (독립된 항목 나열이 아닌 흐름)

### 해법 제시
- 해법을 소개할 때, 앞서 제시한 문제를 **명시적으로 참조**하며 어떻게 해결하는지 연결한다
- 정의만 가르치지 않고, 왜 이것이 문제를 해결하는지 설득한다

### 섹션 배치
- 섹션 순서는 교과서 목차가 아니라 **논증 흐름**을 따른다
- 해결 기준(예: 서비스 분리 원칙)은 문제 직후에 배치하고, 통신 방식은 분리 이후에 다룬다

## Series Workflow (새 챕터 추가 시)

1. `blog/<series>/chNN.md` 생성 (series, chapter frontmatter 포함)
2. `.vitepress/config.mts` — 시리즈 sidebar에 챕터 항목 추가
3. `blog/<series>/index.md` — 테이블에서 해당 장 링크 추가, "예정" → "완료"
4. `blog/index.md` — 진행 카운트 업데이트

## Sidebar Config

VitePress는 longest-prefix 매칭을 사용한다. 시리즈별 sidebar 키(`/blog/<series>/`)를
일반 블로그 키(`/blog/`)보다 먼저 선언해야 시리즈 페이지에서 시리즈 nav가 표시된다.
