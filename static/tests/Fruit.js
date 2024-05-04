class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getPlantInfo() {
    return `
   Name: ${this.name}
   Color: ${this.color}
  `;
  }
}

export default Fruit