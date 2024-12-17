import { dishes } from "@/data/dishes";

export const selectRandomImages = (monsterImages) => {
    const selectedImages=RandomSelect(monsterImages);
    return selectedImages;
  };

export const simulateOvertaking = (runnersRef,goalLineRef,callback) => {
    const duration = 5000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const runners = runnersRef.current.map((runner) => ({
      element: runner,
      position: 50,
      speed: Math.random() * 0.4 - 0.2,
      amplitude: Math.random() * 3 + 2,
      frequency: Math.random() * 0.05 + 0.02,
      directionChangeCounter: 0
    }));

    const animate = () => {
      if (frame >= totalFrames) {
        goalLineRef.current.style.transition = 'left 1.5s ease-out'; //ゴールライン速度
        goalLineRef.current.style.left = '10%'; // ゴールライン
        if (callback) callback();
        return;
      }
      runners.forEach((runner) => {
        const wobble = Math.sin(frame * runner.frequency) * runner.amplitude;
        const verticalWobble = Math.sin(frame * 0.1) * 20; // 縦揺れ
        runner.position += runner.speed;
        
        if (runner.position < 20) {
          runner.position = 20;
          runner.speed = Math.abs(runner.speed);
        } else if (runner.position > 65) {
          runner.position = 65;
          runner.speed = -Math.abs(runner.speed);
        }

        runner.directionChangeCounter++;
        if (runner.directionChangeCounter > 60) {
          if (Math.random() < 0.3) {
            runner.speed = Math.random() * 0.4 - 0.2;
            runner.directionChangeCounter = 0;
          }
        }

        runner.element.style.transform = `translate(${runner.position + wobble}vw, ${verticalWobble}px)`;
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  };

  export const selectRandomDishes = (type) =>{
    let foodData=[];
    switch(type){
        case 'japanese':
            foodData=[...dishes.japanese];
            break;
        case 'western':
            foodData=[...dishes.western];
            break;
        case 'chinese':
            foodData=[...dishes.chinese];
            break;
        case 'random':
          foodData=[...dishes.japanese,...dishes.western,...dishes.chinese];
          break;
    }
    const selectfoodData=RandomSelect(foodData);

    return selectfoodData;
  }

const RandomSelect=(Data)=>{
    const selectedData = [];
    const usedIndices = new Set();

    while (selectedData.length < 4) {
        const randomIndex = Math.floor(Math.random() * Data.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          selectedData.push(Data[randomIndex]);
        }
     }
    return selectedData;
}