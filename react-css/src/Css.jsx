/*
리액트에서는 css를 이용하는 방법들이

1. 리액트의 특징
-리액트는 파일이 컴포넌트 단위로 쪼개져 있다.
2.컴포넌트 마다 하나의 css파일을 생성해서 관리하는 방법을 주로 사용한다.(css연결방식에 따라 달라질 수 있음)
(bem방식 ; block, element, modifier을 사용하지 않는다.)
3. 클리스가 class가 아닌 className으로 변경되어서 사용
*출력은 똑같이 class로 되기 때문에 선택자는 동일하게 한다.

단점 : 지역스타일 방식이기 때문에 reset과 같은 전역 스타일을 줘야하는 상황에서 컴포넌트 내부의 다른 방식을 사용해야 한다.

리액트에서 사용하는 클래스 입력 종류
1. 기본 css(내장css) - 일반적으로 사용하는 css방법
선택자를 이용하거나 컴포넌트-클래스명을 활용해서 네이밍한다.

2. css module 사용하기
css의 발전된 형태로 보고, 일반 css와 구별하기 위해서 파일명에 .module을 붙여서 사용한다.
(ex)App에 module로 사용하는 css만들고 싶을 때 -> App.module.css
*module css사용하는 이유
- 클래스 명 충돌 방지
- 컴포넌트 단위의 스타일을 적용할 때
- 같은 클래스 명을 사용하면서 컴포넌트 단위로 다른 값을 줘야 할 때 사용한다.

-module을 사용하게 되면 클래스명 뒤에 각각 고유의 값이 랜덤으로 부여되기 때문에 실수로 css 클래스 이름이 다른 곳에서 사용한 클래스명과 중복되어 사용되는 일이 없어지게 된다.
(ex) Button class=".Button02_button__eW2t8"

- 보통 처음부터 module을 도입하지는 않지만, 보통 프로젝트 진행중에 수정하거나 추가로 인해서 class를 추가해야 하는 경우 충돌을 방지하기 위해서 module을 사용하는 경우가 많다.
- 혹은 클래스명이 중복되지 않도록 네이밍 규칙을 유지하기 싫을 때 사용하기도 한다.

규칙 :
-다른 컴포넌트명이랑 중복되지 않도록 하기
-컴포넌트 최상단 class명은 컴포넌트 이름과 일치시키기(ex) Button컴포넌트 -> module.css는 Button.module.css)


3. sass(scss) 사용
- yarn add node-sass
- yarn add sass
두가지 설치 후 똑같이 사용하면 된다.
사스는 global으로 설치하지 않는다.

설치 후 package.json에서 node-sass와 sass 버전 확인해 보기
버전이 이상한 경우 지우면 됨... 지우는 명령어는 몰라...

4. style-component 라이브러리 사용하기
내장형이 아니기 때문에 별도의 설치가 필요함
- yarn add styled-components
별도의 파일을 관리할 파일이 없으며, 스크립트 파일안에서 스타일을 작성한다.
별도의 클래스명을 사용하지 않는다.(태그명 대신에 대문자로 시작하는 컴포넌트 명을 생성)
(ex) <div className='box></div>이렇게 만든 것을 -> <Box></Box> 이렇게 만들면 된다.(일반 컴포넌트인지 스타일컴포넌트인지 헷갈릴 땐 import확인해보면 된다.)

컴포넌트 내부에서 자동완성 확장 프로그램을 설치해야 한다.  
vscode-styled-components 설치

5. tailwind 라이브러리 사용하기
별도의 파일이 필요없고 클래스명을 찾아서 작성하는 타입이다.
코드 자체를 깨끗하게 사용할 수 있다.(css폴더,영역 없이도 가능. but 클래스이름이 길어진다.)
다만 필요한 클래스를 직접 찾아서 작성해야 하기 때문에 초반 난이도가 다른 css방식에 비해 있는 편이다.(잘 정리 되어 있어서 어렵지는 않음)

tailwind 설치 방법
yarn add -D package : 패키지 설치
yarn tailwind init -p : tailwind config파일 생성 -> postcss.config.js와 tailwind.config.js파일이 생기면 정상 설치 된 것

tailwind.config.js파일에서
content부분에서 경로설정을 해줘야한다. 
content: ["./src/~~~~ "] -> 주석코드와 겹쳐서 다 못적음 직접 확인해보기
  //src폴더안에 *모든 디렉터리안에 있는 .확장자명에서 js,jsx,ts,tsx를 받아오겠다.(리액트만 쓰면 js, jsx | 타입스크립트 ts,tsx)

글로벌 css나 최상위 css파일에( 보통 index.css)
@tailwind base;
@tailwind components;
@tailwind utilities;
이 3개를 import하기 (index.css 최상위에 복붙)



---------------------------------------------------------------
생명주기, Life cycle : 리액트에서 나온 단어
생명주기 -> 컴포넌트와 연결됨.
컴포넌트가 dom에 연결되는 방식을 생명주기라고 하며, 
연결됐다.생성됐다 = dom에 마운트 됐다. = 컴포넌트가 태어났다. = 생명주기
컴포넌트가 생성되고 죽고 소멸되는(언마운트) 되는 것을 = Life Cycle

*/