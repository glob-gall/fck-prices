import axios from "axios"

const API =  axios.create({
  baseURL:`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_wIUS3IPGAolVpRSihubPI4bhPzSTs&thinWhois=0&ignoreRawTexts=0&outputFormat=json`
})
export default API