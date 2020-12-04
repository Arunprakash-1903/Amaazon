 import axios from "axios"
 const instance= axios.create({
     baseURL:"http://localhost:9000/"
 });
 export default instance;
//https://protected-anchorage-96998.herokuapp.com/