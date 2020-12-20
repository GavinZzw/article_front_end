// import axios from '../request'
import axios from 'axios'

const service = axios.create({
  baseURL: "/api",
  timeout: 5000
})
//文章类别接口
export const getArticleType = () => service.get("/articleType")
