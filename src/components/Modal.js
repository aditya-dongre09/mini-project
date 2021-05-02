import React, { useState } from 'react'
import UploadForm from './UploadForm';
import { motion } from 'framer-motion';

const Modal = ({show,setShow,collection}) => {
    
    if (!show){
        return null;
        
    }
   
    

 const handleClick = (e) => {
     if (e.target.classList.contains('backdrop')){
     setShow(false);}


 }

    return (
       <motion.div animate className="backdrop" onClick={handleClick}>
       <motion.div className='upload' initial={{opacity:0}} animate={{opacity:1}}>
       <UploadForm collection={collection}/>
       </motion.div>
       </motion.div>
    )
}

export default Modal;