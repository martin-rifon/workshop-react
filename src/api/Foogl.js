class FooglApi {
  static signup(user) {
    const body = JSON.stringify({
      email: user.email
    })

    return fetch(`${API_URL}/users/signup`, {
        method: 'post',
        body
      })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static timeEntries(userId) {
    return fetch(`${API_URL}/time_entries?user_id=${userId}`)
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static projects(userId) {
    return fetch(`${API_URL}/projects?user_id=${userId}`)
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static createProject(project) {
    const body = JSON.stringify({
      name: project.name,
      user_id: project.userId
    })

    return fetch(`${API_URL}/projects`, {
        method: 'post',
        body
      })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static createTimeEntry(timeEntry) {
    const body = JSON.stringify({
      title: timeEntry.taskName,
      user_id: timeEntry.userId,
      project_id: timeEntry.projectId,
      time_start: timeEntry.start,
      time_end: timeEntry.end
    })

    return fetch(`${API_URL}/time_entries`, {
        method: 'post',
        body
      })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }

  static updateTimeEntry(timeEntry) {
    const body = JSON.stringify({
      id: timeEntry.id,
      title: timeEntry.title,
      user_id: timeEntry.user_id,
      project_id: timeEntry.project_id,
      time_start: timeEntry.time_start,
      time_end: timeEntry.time_end
    })

    return fetch(`${API_URL}/time_entries/${timeEntry.id}`, {
        method: 'patch',
        body
      })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteTimeEntry(timeEntryId) {
    return fetch(`${API_URL}/time_entries/${timeEntryId}`, { method: 'delete' })
      .then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }
}

export default FooglApi;
