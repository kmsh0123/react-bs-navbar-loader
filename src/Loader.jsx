import React, {useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Loader(props) {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
    return (
        <div>
            {
                loading ?
                    <div className="d-flex align-items-center justify-content-center vh-100">
                        <ClipLoader color={"black"} loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader"/>
                    </div>
                    :
                    ""
            }
        </div>
    );
}

export default Loader;