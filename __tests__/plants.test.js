import { storeState } from "./../src/js/plant.js";
import { changeState } from "./../src/js/plant.js";
import { stateControl } from "./../src/js/plant.js";
import { blueFood } from "./../src/js/plant.js";
import { hydrate } from "./../src/js/plant.js";

describe("plants", () => {
  // beforeEach(() => {
  //   stateControl();
  // });

  // afterEach(() => {

  // });

  test("should determine if an objects state is changed", () => {
    const newThing = stateControl(blueFood);
    expect(newThing.soil).toEqual(5);
    // expect(stateControl(blueFood.soil)).toEqual(5);

    // const monstera = storeState();
    // const fern = storeState();

    // const blueFood = changeState("soil")(5);

    // const fedMonstera = monstera(blueFood);
    // const fedFern = fern(blueFood);
    // const bigFatFern = fedFern(blueFood);

    // expect(stateControl(blueFood.soil)).toEqual(5);

    // const feed = changeState("soil")(1);
  });
});
