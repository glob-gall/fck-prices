import axios from "axios"

const API =  axios.create({
  baseURL:`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHOISAPI_KEY}&outputFormat=json`
})
export default API