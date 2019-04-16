import {getLogs as apiGetLogs} from '../api/logs'

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