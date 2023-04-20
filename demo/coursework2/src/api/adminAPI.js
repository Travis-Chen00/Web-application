import axios from "../utils/request";

export const $login =  async (params) =>{
    let {data} =  axios.get('Admin/Login',  {params}).then()
    console.log(data);
} 