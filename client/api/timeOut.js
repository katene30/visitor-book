const request = require('superagent')

function timeOut(){
    return request.post('api/v1/time-out')
    .then(res => res.body)
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
}
timeOut()