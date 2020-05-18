import axios from "axios"
import { message} from 'antd';

export default class Axios{

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading){
            loading = document.getElementById("ajaxLoading");
            loading.style.display = 'block';
        }

        //let baseApi = "https://www.easy-mock.com/mock/5ec1f9f82ec0011bc82b9c7e/example/"
        let baseApi = options.data.baseURL;
        return new Promise((resolve, reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }

                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res);
                    }else{
                        message.info(res.data.msg)
                    }
                }else{
                    message.info(response.data)

                    reject(response.data)
                }
            })

        });
    }
}