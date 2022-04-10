function createNumberArray(totalNumber: number) {
  return [...Array(totalNumber)].map((_, i) => i + 1)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { createNumberArray }
