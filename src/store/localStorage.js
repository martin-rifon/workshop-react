export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('foogl')
    if (!serializedState) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('foogl', serializedState)
  } catch (e) { }
}
