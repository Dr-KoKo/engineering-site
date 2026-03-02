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

## Series Workflow (새 챕터 추가 시)

1. `blog/<series>/chNN.md` 생성 (series, chapter frontmatter 포함)
2. `.vitepress/config.mts` — 시리즈 sidebar에 챕터 항목 추가
3. `blog/<series>/index.md` — 테이블에서 해당 장 링크 추가, "예정" → "완료"
4. `blog/index.md` — 진행 카운트 업데이트

## Sidebar Config

VitePress는 longest-prefix 매칭을 사용한다. 시리즈별 sidebar 키(`/blog/<series>/`)를
일반 블로그 키(`/blog/`)보다 먼저 선언해야 시리즈 페이지에서 시리즈 nav가 표시된다.
