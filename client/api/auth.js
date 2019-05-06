import request from 'superagent'
const apiEndpoint = ("https://mashape-community-urban-dictionary.p.mashape.com/define?term=")

export function getDefinition(name) {
  return request 
  .get(apiEndpoint + name).set('x-mashape-key', 'IUU7GyrOK4mshNOCbJEmBmj5SKSop1kSmPJjsn2nWIxgxzZbEc').then(res => {
    return res.body.list[0]
  })
}