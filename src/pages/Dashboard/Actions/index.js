export const createTimeEntry = (timeEntry) => {
  return {
    type: 'CREATE_TIME_ENTRY',
    timeEntry
  }
}

export const findOrCreateProjectByName = (projectName) => {
  return {
    type: 'FIND_OR_CREATE_PROJECT_BY_NAME',
    projectName
  }
}
