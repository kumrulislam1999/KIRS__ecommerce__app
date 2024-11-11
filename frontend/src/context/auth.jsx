import { useState, useEffect,useContext, createContext, } from "react";
import axios from "axios";


const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user : null,
        token : "",
    });

    /* ===== Default Authorization Token ====== */
    axios.defaults.headers.common["Authorization"] = auth?.token;

    /* ===== Set Data from LocalStorage ===== */

    useEffect(() => {
        const data = localStorage.getItem("auth");

        if(data){
            const parseData = JSON.parse(data);

            setAuth({
                ...auth,
                user : parseData.user,
                token : parseData.token,
            });
        }
        //eslint-disable-next-line
    },[]);
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};