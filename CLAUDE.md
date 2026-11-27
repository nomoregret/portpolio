이 프로젝트는 나영준의 이직을 위한 포트폴리오 작업 구축 프로젝트 이다.

포트폴리오 사이트는 react로 구성

## 기술 스택

`/Users/june/frameout/project._KOSMCO_front` 프로젝트의 스펙을 기본으로 사용한다. (디자인은 아직 미정)

| 구분 | 내용 |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 (strict) |
| Style | SCSS (CSS Modules) + BEM, `classnames/bind` (`cx`) |
| UI Primitive | Radix UI (`radix-ui`) |
| 애니메이션 | 기본 CSS, 복잡한 경우에 한해 `framer-motion` |
| 스크롤 인터랙션 | Locomotive Scroll v5 (`src/app/_components/SmoothScroll`, `data-scroll` / `data-reveal`) |
| 캐러셀 | Swiper |
| 상태관리 | 로컬 `useState`/`useReducer`, 컴포넌트 간 공유는 React Context |
| Package Manager | npm |

### Path Alias

```ts
"@/*"   → "./src/*"
"@ui/*" → "./ui/*"
```

## 문서 ↔ 페이지 데이터 동기화

경력 원본은 `doc/` 아래 md 파일이다. md를 수정하면 **같은 작업 안에서** 페이지 데이터도 맞춘다.

| 원본 (md) | 반영 대상 |
| --- | --- |
| `doc/career.md` | `src/data/career.ts` — `timeline`(전체 프로젝트), `featuredProjects`(대표 프로젝트, 상세 필드 포함) |
| `doc/career.md`의 사용 기술 | `src/app/_components/About/About.tsx`의 `SKILLS` (새 기술이 생기면 추가) |
| 프로젝트·회사 수, 경력 연차 변동 | `Hero.tsx`(연차·기업 수·프로젝트 수 문구), `About.tsx`(`STRENGTHS` 문구) |
| `doc/jobkorea.md`, `doc/introduce.md` | 사이트에 직접 쓰이지 않음. 단, `career.md`와 사실(기간·기술·역할)이 어긋나지 않게 함께 맞춘다 |

- 같은 프로젝트가 `timeline`과 `featuredProjects` 양쪽에 있으면 둘 다 고친다.
- `career.ts`의 `tech`는 소문자(`next.js`, `react`), md 문서용 표기는 대문자 시작(`Next.js`)을 유지한다.
- md와 페이지 데이터의 값이 서로 다르면(예: 기간) 임의로 한쪽에 맞추지 말고 사용자에게 확인한다.
- 수정 후 `npx tsc --noEmit`으로 타입을 확인한다.
