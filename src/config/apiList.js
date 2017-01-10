function baseCnodeUrl (url){
  return{
    url:'https://cnodejs.org/api/v1' + url
  }
}
const apiList = {
  'get_topics':'/topics'
}

module.exports = apiList
