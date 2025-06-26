import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const useContent = () => {
    const [content, setContent] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setContent(response.data.content);
        })
        
    }


    useEffect(() => {
        refresh();
        let interval = setInterval(()=>{
            refresh()
        },5000)

        return ()=>{
        clearInterval(interval);
    };
    },[])
    return {content , refresh}
    
}