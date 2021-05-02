import React, {useState,useEffect} from 'react'
import {projectStorage,projectFirestore} from '../firebase'

const useStorage=(file,name,price,collection)=> {
    const[progress,setProgress] = useState(0);
    const[error,setError] = useState(null);
    const[url,setUrl] = useState(null);
    
    useEffect(()=>{
        //references
        var sam= parseInt(price)
        const storageRef = projectStorage.ref('Pics');
        const imageRef = storageRef.child(file.name);
        const collectionRef = projectFirestore.collection('Products').doc('101').collection(collection)
        
        imageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async()=>{
          const url = await imageRef.getDownloadURL();  
          collectionRef.add({cardimage: url, cardname:name, cardprice:sam})
          setUrl(url);
        })
},[file])
    return (
       {progress,url,error}
    )
    
}
export default useStorage