import{ useEffect, useState} from "react";
import axios from 'axios';
const useFetch = (url)=>{
        const [Data,setData] = useState([]);
        const [loading,setLoading] = useState(false);
        const [error,setErr] = useState(false);
        
        useEffect(()=>{
                const fetchData = async ()=>{
                    setLoading(true);
                    try {
                        const res =  await axios.get(url);
                        setData(res.data);
                    } catch (error) {
                        setErr(error);
                    }
                        setLoading(false);
                };
                fetchData();
        } ,[url]);

        const reFetch = async ()=>{
            setLoading(true);
            try {
                const res =  await axios.get(url);
            } catch (error) {
                setErr(error);
            }
                setLoading(false);
        };
        return {Data,loading,error,reFetch}
}

export default useFetch;

