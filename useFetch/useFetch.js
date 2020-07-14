import React, { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    const [state, setstate] = useState({data:null, loading:true,error:null});
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;        
        }
    }, [])

    useEffect( () =>{
        setstate({data:null, loading:true,error:null});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //setTimeout( () =>{
                    if(isMounted.current){
                       setstate({
                            loading:false,
                            error:null,
                            data
                        }) 
                    }else{console.log('no se llamo el setState!!!');}
                     
                //}, 4000);
            });

    },[url] )

    return state;
}

