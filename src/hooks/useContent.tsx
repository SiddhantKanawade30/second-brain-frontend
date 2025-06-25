import { useState, useEffect, use } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const useContent = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const response = axios.get(BACKEND_URL + '/api/v1/content' , {
            headers:{
                "token": localStorage.getItem("token") 
            }
        })
        .then((response)=>{
            setContent(response.data.content);
        },[])
    })
    return content;
}