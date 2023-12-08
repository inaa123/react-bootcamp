import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Props from './Props';
import Props02 from './Props02';
import State from './State';
import Count from './Count';
import StateEx from './StateEx';
import Effect from './Effect';
import EffectEx from './EffectEx';
import EffectMember from './EffectMember';
import ColorMode from './context/ColorMode';
import DarkMode from './context/DarkMode';
import UseRef from './useRef/UseRef';
import Game from './useRef/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Props name="김김김" local="강남" job="백수" age={40 + 1}/> */}
    {/* <Props02 name="이이이" local="서울" job="우왕" age={30} /> */}
    {/* <State /> */}
    {/* <Count /> */}
    {/* <StateEx /> */}
    {/* <Effect /> */}
    {/* <EffectEx /> */}
    {/* <EffectMember /> */}
    {/* <ColorMode /> */}
    
    {/* <UseRef /> */}
    {/* <Game /> */}

    {/* StrictMode: 리액트 문법 검사해줌. 콘솔 같은거 두개 찍힘 */}
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*React.StrictMode
- 각종 에러와 잘못된 문법에 대한 오류를 표시해준다.
- 프로덕션 빌드에서는 전혀 영향을 주지 않는 영역에서 활동한다.
vscode에서 확장 프로그램으로 오류를 잡아낼 수는 있지만 기본적인 기능에서는 차이가 나며

결론 : React.StrictMode를 사용하는 게 좋다.
*/