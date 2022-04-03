function createNumberArray(totalNumber: number) {
  return [...Array(totalNumber)].map((_, i) => i + 1)
}

export default { createNumberArray }
