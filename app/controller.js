import { Animal, animalsArray } from './model.js'
const controller = {
  add: (data) => {
    const animal = new Animal(animalsArray.length + 1, data.name, data.color)
    animalsArray.push(animal)
    console.log(animalsArray);
    // utwórz obiekt klasy Animal
    // dodaj do animalsArray
  },
  delete: (id) => {
    const indexToRemove = animalsArray.findIndex(element => element.id === id);
    animalsArray.splice(indexToRemove, 1);
    // usuwanie po id z animalsArray
  },
  update: (id) => {
    // update po id elementu animalsArray
    const animalID = parseInt(id)
    for (let i = 0; i < animalsArray.length; i++) {
      if (animalsArray[i].id === animalID) {
        animalsArray[i].name = "ŻYRAFA"
        animalsArray[i].color = "POMARANCZOWO-CZARNA"
        return
      }
    }

  },
  getall: () => {
    return animalsArray
  },
  deleteall: () => {
    animalsArray.length = 0
  }

}
export default controller