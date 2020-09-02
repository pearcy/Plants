export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }; //creates things that will accept different abilities (made below)
};

export const stateControl = storeState();

// start of Change State

export const changeState = (prop) => { //adds abilities to the things (made with code above)
  // soil is property
  return (value) => {
    // 5 is passed in here
    return (state) => ({
      //
      ...state, // spread operator, creating a new version, state -
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// I have _____(plant/state) whose _________ (soil/prop) increases by _______ (5/value) when I _______ (give it blue food/name of the variable) -> states are like things

const feed = changeState("soil")(1);
// console.log(const feed = changeState("soil")(1));
export const blueFood = changeState("soil")(5);
// console.log(blueFood());
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

// const newFunction = () => {
//   let i = 0;
//   return (incrimentFunction = ())
//   if (i < 10){
//     i++
//     newfunction();
//   } 

// }