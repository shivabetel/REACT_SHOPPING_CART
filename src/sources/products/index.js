import HttpLib from '../../network'
import { transformProductResponse } from '../transforms/products';

export const srGetProducts = async function (filters){
    let response = {};
    try{

        const httpLib = new HttpLib();
        response = await httpLib.get("http://localhost:8001/api/products");
        response = transformProductResponse(response, filters);
        return new Promise(resolve => resolve(response))
    }catch(err){
        return new Promise((resolve, reject) => reject(err))
    }
}