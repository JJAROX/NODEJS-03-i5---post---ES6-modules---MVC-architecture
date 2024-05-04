let n = "x"

const setName = (name) => {
  n = name
}

const getName = () => {
  return `name=${n}`
};

export { getName, setName }