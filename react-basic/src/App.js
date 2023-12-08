//import logo from './logo.svg';
import './App.css';

function App() {
  
  /*
  리액트에서 사용하는 문법 : jsx문법
  jsx문법(javascript XML문법) : 
  확장형 스크립트 문법, html과 비슷한 문법으로 사용하는데는 난이도는 낮은 편에 속한다.
  일반 스크립트 문법이 아니기 때문에 바벨로 변환을 하는 작업이 필요하다.

  jsx문법 규칙
  1. 컴포넌트(jsx문서)안에 있는 여러개의 요소들은 반드시 하나의 부모태그만 있어야 한다. (각각의 jsx문서를 컴포넌트라고 한다.)
  react에서 가상의 dom이 컴포넌트를 감지할 때 하나의 객체만 감지하도록 되어 있기 때문에(return시 여러개 감지할 수 없음)
  보통 div로 감싸지만 깔끔한 코드 구성을 원한다면 <></>(fragment)로 감쌀 수도 있다. ->. 의미없는 태그기 때문에 class를 넣을 수 없음
    {여러개의 요소를 한번에 return할 수 없기 때문에 태그 하나로 감싸야함.(div로 p태그들 감싸면 div하나만 리턴되는 것)
    그러나 div가 아닌 의미없는 태그 <> fragment로 감싸도 됨}

  2. 자바스크립트 표현식을 사용할 수 있다.(if문 , for문 등)

  3. if문도 사용하지만 삼항연산자와 and 조건문을 더 많이 사용한다.(&&만, ||는사용X)

  4. class대신 className을 사용한다. (브라우저 개발자도구에선 class로 인식함, 문법만 다를 뿐)

  5. 싱글태그도 무조건 닫혀있어야 한다. (싱글태그 : input, img 등)
    <input type='text'> = x    
    <input type='text'/> = o

  6. 주석 기호
  밖에는 /*
  RETURN 안에는 jsx문법을 따르기 때문에 {/*}로
  /* {}안에 작성. 주석도 감싸는 태그 안에 써야하는 듯
  주석이 헷갈리면 ctrl + / 버튼으로 자동 주석 처리해도 됨

  7. 인라인 스타일 기법을 사용한다.
  - 인라인 스타일을 적용할 때에는 클래스네임을 사용할 수 없고 객체 형태로 전달해야 한다.
  key값에는 '-'을 사용할 수 없기에 카멜기법으로 작성해야 한다.
  font-size = fontSize

  8. 태그를 직접적으로 선택하지 말 것★★ (선택자로 지정하는 것을 남용하지 말 것)
  스크립트에선 선택자를 잡아서 사용했지만, 리액트에선 선호하지 X -> 구성방식이 다르기 때문(가상의 돔 이용하기 때문)

  9.css적용 방법
  - class에 css를 적용할 때에는 css문서를 따로 만들어서 import후에 적용하는 방법 사용한다.
  - 인라인 스타일로 적용할 때에는 style={{속성 : '값', 속성 : '값'}}으로 작성
      인라인 스타일을 여기선 잘 활용하지 않는다. class로 주는 방법과 object로 주는 방법을 더 많이 사용한다.
  - 오브젝트로 주는 방법
      지정되지 않은 함수를 stlye {}안에 넣고, 선언해준다.

  10. 파일명은 반드시 대문자로 시작해야 한다. (소문자는 인식을 안한다.)
  파일 이름을 수정하거나 지우고 다시 생성할 경우 바로 인식되지 않는다.
  리액트 재실행 또는 vsCode 재실행 해야 변경된 이름으로 인식된다.

  네이밍 규칙
  모든 네이밍은 카멜기법을 기본으로 한다.
  -디렉터리 폴더명은 소문자로 시작한다.
  -파일명은 보통 대문자로 시작한다.
    -component파일은 대문자로 생성한다.
    -그 외 파일(page파일 등)은 소문자로 생성한다.
  의미론적인 네임을 만들 것(이름이 길어져도 상관 없다.)

  *index파일은 무조건 소문자로! (대문자X)

  폴더명
  -component / components
    재사용 가능한 파일
    다양한 곳에 범용적인 사용성을 가진 컴포넌트 파일이 있는 곳이다.
  - component > atoms (component안에 atoms폴더)
    가장 작은 단위의 컴포넌트다.(component안에 또 component를 쪼갤 수 있는 리액트에서 가장 작은 단위의 컴포넌트)
  -domains
    - 주제별로 컴포넌트를 구분할 때 사용한다.
  -containers
    - 재사용할 수 없는 컴포넌트다.
  
  */

  const styleItem = {
    width : '100px',
    height: '100px',
    background: 'green'
  }
  const name = '김이김';

  return (
    <> 
      <p>안녕하세요</p>
      <p>리액트입니다.</p>
      <input type='text'/>
      {/*주석태그 : {}안에*/}
      <div className = "box"></div>
      <div style={{width : '100px', height : '100px', background : 'pink'}}></div>
      <div style={styleItem}>{name}</div> {/*{name}변수명 호출하는 방식*/}
      {/*삼항연산자*/}
      {name === 'park' ? <p>MRS</p> : <p>MR</p>}
      {/*and조건문, name이 '김김김'이면 name출력, 아니면 출력X*/}
      {name === '김김김' && <p>{name}</p>} 
    </>
  );
}

export default App;

