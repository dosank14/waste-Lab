'use client'

import { useState, useEffect, useRef } from 'react';
import { selectRandomImages,selectRandomDishes,simulateOvertaking } from './lib';
import './game.css';
import Link from 'next/link';
import { useSearchParams} from 'next/navigation';

const Game = () => {
  const [isRacing, setIsRacing] = useState(false);
  const [iswinner, setWinner] = useState(null);
  const [runnerImages, setRunnerImages] = useState([]);
  const [runnerDishes,setRunnerdishes]=useState([]);
  const backgroundRef = useRef(null);
  const runnersRef = useRef([]);
  const goalLineRef = useRef(null);
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const monsterImages = Array.from({ length: 10 }, (_, i) => `https://44412.github.io/codepen/images/monster${i + 1}.png`);

  useEffect(() => {
      const selectImages=selectRandomImages(monsterImages);
      const selectDishes=selectRandomDishes(type);
      setRunnerdishes(selectDishes);
      setRunnerImages(selectImages);
    
  }, []);

  const startRace = () => {
    if (isRacing) return;
    setIsRacing(true);

    runnersRef.current.forEach(runner => {
      runner.style.transition = 'transform 2s linear';
      runner.style.transform = 'translateX(50vw)';
    });

    setTimeout(() => {
      if (backgroundRef.current) {
        backgroundRef.current.style.animation = 'slideBackground 2s linear infinite';
      }

      runnersRef.current.forEach(runner => {
        runner.style.animation = 'none';
        runner.style.transition = 'transform 0.1s linear';
      });

      simulateOvertaking(runnersRef);

      setTimeout(() => finishRace(), 5000);
    }, 2000);
  };

  

  const finishRace = () => {
    const Winnerid = Math.floor(Math.random() * 4);
    if (goalLineRef.current) {
      goalLineRef.current.style.left = '10%';
    }

    runnersRef.current.forEach((runner, index) => {
      runner.style.transition = 'transform 2s linear';
      runner.style.transform = 'translateX(0)';
      
      if (index === Winnerid) { 
        runner.style.transition = 'transform 1.5s linear';
      }
    });

    setTimeout(() => {
      if (backgroundRef.current) {
        backgroundRef.current.style.animationPlayState = 'paused';
      }
      
      setWinner(Winnerid); 
    }, 1500);
  };

  return (
    <div className="race-container">
      <div className="background" ref={backgroundRef}></div>
      <div className="race-track">
        {[0, 1, 2, 3].map((id) => (
          <div key={id} className={`runner runner${id + 1}`} ref={(el) => runnersRef.current[id] = el}>
            {runnerImages[id] && <img src={runnerImages[id]} alt={`${runnerDishes[id + 1]}`} />}
          </div>
        ))}
        <div className="goal-line" ref={goalLineRef}></div>
      </div>
      {!isRacing && <button id="startBtn" onClick={startRace}>スタート</button>}
      {iswinner !== null && (
        <div>
          <div className="winner-display"style={{display:'block'}}>
            <br/>
            {runnerDishes[iswinner]}
            <img src={runnerImages[iswinner]} alt="Winner" style={{width: '100px', height: '100px', borderRadius: '50%'}} />
            <br />
           ゴール！！
          </div>
          <div>
            <Link href="/">
              <button id="homeBtn" className="home-button">
                ホームに戻る
              </button>
           </Link>
         </div> 
        </div>
      )}
    </div>
  );
};

export default Game;