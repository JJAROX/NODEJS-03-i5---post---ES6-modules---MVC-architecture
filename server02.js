import { rand, randfix } from "./static/tests/utilsFunctions.js";
import { setName, getName } from './static/tests/userData.js';
import someArray from './static/tests/arrayData.js'
import allFunctionsObj from './static/tests/objectData.js'
import Fruit from './static/tests/Fruit.js'

console.log(rand(1000));
console.log(randfix(2));
setName("Anna")
console.log(`User: ${getName()}`);
console.log(someArray.length);
const { makeThings, makeThingsAsync } = allFunctionsObj

makeThings()

const doit = async () => {
  await makeThingsAsync()
}
doit()

console.log(allFunctionsObj.makeOtherThingsAndReturnWithPromise())

const doit2 = async () => {
  let result = await allFunctionsObj.makeOtherThingsAndReturnWithPromise()
  console.log(result);
}
doit2()
const plant1 = new Fruit("banan", "żółty")
const plant2 = new Fruit("jabłko", "czerwone")
console.log(plant1, plant2);
