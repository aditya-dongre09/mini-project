import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'



const ProgressBar=({file,setFile,setIndex,name,price,collection})=> { 
    const {url,progress}=useStorage(file,name,price,collection)
    
    useEffect(()=> {
        if (url){
            setFile(null);
            setIndex(null);
            
        }
    }, [url, setFile])

    return (
        <div className='progress-bar' style={{width : progress + '%'}}>
            
        </div>
    )
    
}
export default ProgressBar