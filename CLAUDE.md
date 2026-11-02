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
| 캐러셀 | Swiper |
| 상태관리 | 로컬 `useState`/`useReducer`, 컴포넌트 간 공유는 React Context |
| Package Manager | npm |

### Path Alias

```ts
"@/*"   → "./src/*"
"@ui/*" → "./ui/*"
```
