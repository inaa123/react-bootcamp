import React, { useEffect, useRef, useState } from 'react'
import img from '../game.png';

function Game() {
    /*
    가위바위보 게임
    조건 : 내 점수와 pc의 점수를 비교해서 0점은 비기기, 1점이 된 상대는 승리
    -1 점이 된 상대는 패배

    */

    const settings = {
        가위 : 1,
        바위 : 0,
        보 : -1
    }
    const gamePosition = {
        바위 : '-100px',
        가위 : '-500px',
        보 : '-800px'
        //버튼의 위치 값
    }

    const [result, setResult] = useState(''); //결과값(승리, 패배, 비김)
    const [score, setScore] = useState(0); //기본 점수
    const interval = useRef(); //setinterval관리
    const [imgPo, setImgPo] = useState(gamePosition.바위); //게임 시작 위치 설정, 기본값 gamePosition의 바위위치

    useEffect(() => {
        interval.current = setInterval(changeHand, 50);
        //console.log(interval);
        return () => {
            clearInterval(interval.current)
        }
    }, [imgPo]) //imgPo이미지포지션 바꼈을때 한번 실행

    const changeHand = () => {
        if(imgPo === gamePosition.바위){
            setImgPo(gamePosition.가위)
        }else if(imgPo === gamePosition.가위){
            setImgPo(gamePosition.보);
        }else if(imgPo === gamePosition.보){
            setImgPo(gamePosition.바위)
        }
    }

    const onClickBtn = (choice) => () => { //choice매개변수
        //1. setinterval 정지
        clearInterval(interval.current);
        console.log(choice);

        //2. 나와 컴퓨터의 선택지에 대한 점수를 제공(settings값으로 세팅. 가위 몇점인지 바위 몇점인지 등 알려줘야 함)
        const myScore = settings[choice];
        //console.log(myScore)
        const comScore = settings[getChoicePc(imgPo)];
        //console.log(comScore)
        const diffScore = myScore - comScore;
        console.log(diffScore)

        if(diffScore === 0){
            setResult('비겼습니다. 다시 한 번 더');
        }else if([-1,2].includes(diffScore)){//-1과 2가 diffScore에 있는지 비교,찾아줘
            setResult('이겼습니다!')
            setScore((prev)=> prev+1)
        }else{
            setResult('졌습니다. 아쉽네요 ㅠㅜ')
            setScore((prev)=> prev-1)
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 50)
        }, 3000)
    }

    const getChoicePc = (imgPo) => {
        return Object.keys(gamePosition).find((key) => gamePosition[key] === imgPo);

    }

    return (
        <div>
            <div 
                className='hand' 
                style={{
                    width : '350px', 
                    height : '500px', 
                    background : `url(${img}) ${imgPo} 0`
                }}>
                
            </div>
            <div>
                <button onClick={onClickBtn('가위')}>가위</button>
                <button onClick={onClickBtn('바위')}>바위</button>
                <button onClick={onClickBtn('보')}>보</button>
            </div>
            <p>{result}</p>
            <p>{score}</p>
        </div>
    )
}

export default Game
