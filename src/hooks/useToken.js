import { async } from "@firebase/util";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = '';
            const { data } = await axios.post('https://serene-tundra-56712.herokuapp.com/login', { email });
            setToken(data.accessToken);
            localStorage.setItem('accessToken', data.accessToken);
        }
        getToken();
    }, [user])
    return [token];
}

export default useToken;