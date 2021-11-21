# Next.JS

## 공식 문서에서 중요한 내용 메모!

> `Code splitting and prefetching`
>
> Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

필요한 페이지만 렌더링! 즉, 아무리 많은 페이지로 구성된 사이트라고 해도 빠르게 로드됨! 왜냐면 처음에는

사이트의 첫페이지만 렌더링 되고 나머지 페이지는 클라이언트에서 요청이 들어오면 렌더링(로드) 되는 것!

페이지별로 독립적이라는 뜻!

<br/>

> `Using the Image Component`
>
> Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

이미지는 기본적으로 `lazy loading` 됩니다. 즉, 뷰포트 외부의 이미지에 대해서는 페이지 속도에 영향을 미치지 않습니다. 이미지는 뷰포트로 스크롤될 때 로드됩니다.

> Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

구글 검색순위에 사용할 핵심 Web Vital인 `누적 레이아웃 이동(CLS)`을 방지하는 방식으로 항상 렌더링

[Cumulative Layout Shift](https://web.dev/cls/) 참고하면 매우 좋을듯!

<br />

> `Adding Global CSS`
>
> In Next.js, you can add global CSS files by importing them from pages/\_app.js. You cannot import global CSS anywhere else.
>
> The reason that global CSS can't be imported outside of pages/\_app.js is that global CSS affects all elements on the page.

글로벌 CSS는 \_app.js에서만 import 하자!
