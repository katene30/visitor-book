import {getLogs as apiGetLogs, signOut as apiSignOut, addLog as apiAddLog} from '../api/logs'

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

  export function addLog(log){
    return dispatch => {
      return apiAddLog(log)
      .then(() => {
        dispatch(getLogs())
      })
    }
  }