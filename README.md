# earthlingsave.co.kr

`earthlingsave.co.kr` 정적 랜딩 페이지입니다. 기존 EC2 Express 서버가 내려주던 원페이지 HTML을 GitHub Pages에서 바로 배포할 수 있도록 정적 파일로 분리했습니다.

## 구조

- `public/index.html`: 랜딩 페이지 마크업
- `public/stylesheet/`: 기존 반응형 CSS와 사이트 공통 CSS
- `public/javascript/portfolio-data.js`: 포트폴리오 카드와 모달 미디어 데이터
- `public/javascript/portfolio.js`: 포트폴리오 렌더링, 더 보기, 모달 처리
- `public/javascript/animations.js`: 스크롤 기반 섹션 애니메이션
- `public/javascript/partners.js`: 파트너 로고 렌더링
- `public/javascript/map.js`: Kakao 지도 초기화와 페이지 초기화 진입점
- `public/CNAME`: GitHub Pages 커스텀 도메인

포트폴리오 카드 썸네일과 이미지 모달에 쓰는 정적 이미지는 `public/image/portfolio/`에 보관합니다. 첫 화면 MP4는 `public/video/`에 보관합니다. YouTube iframe처럼 외부 플레이어가 필요한 미디어만 외부 URL을 유지합니다.

## 로컬 확인

```bash
python3 -m http.server 8080 -d public
```

브라우저에서 `http://localhost:8080`으로 확인합니다.

## GitHub Pages 전환

이 저장소는 `.github/workflows/pages.yml`로 `main` 브랜치 push 시 `public/` 디렉터리를 GitHub Pages에 배포합니다.

도메인 전환 시 DNS는 GitHub Pages apex 도메인 기준으로 설정해야 합니다. `earthlingsave.co.kr`의 A 레코드는 GitHub Pages IP로, `www`를 쓸 경우 CNAME은 GitHub Pages 호스트로 연결합니다. Kakao 지도 앱 키는 GitHub Pages 전환 후 `https://earthlingsave.co.kr` 도메인이 허용되어 있어야 지도가 정상 표시됩니다.
