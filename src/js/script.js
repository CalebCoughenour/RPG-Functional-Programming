export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  };
};


export const stateControl = storeState();
export const incrementer = counterFunction();
export const gatherWood = changeState("wood")(3);
export const stokeFire = changeState("wood")(-1);
export const gatherFood = changeState("food")(3);
export const eatFood = changeState("food")(-1);




// const plantStates = storeState({ plant1: storeState() });
// const plant1 = plantStates().plant1;
// plant1(blueFood);
// console.log(plant1());

// plantStates(setState("plant2")(storeState()));
// const plant2 = plantStates().plant2;
// console.log(plantStates());

// plant2(blueFood);
// console.log(plant2());