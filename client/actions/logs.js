import {getLogs as apiGetLogs, signOut as apiSignOut} from '../api/logs'

export function getLogs() {
    return dispatch => {
        return apiGetLogs()
        .then(logs => {
         dispatch(saveLogs(logs))
      })
    }
  }
  
  export function saveLogs(logs){
    return {
        type: 'SAVE_LOGS',
        logs,
    }
  }

  export function signOut(log){
    return dispatch => {
      return apiSignOut(log.id)
      .then(() => {
        dispatch(getLogs())
      })
    }
  }