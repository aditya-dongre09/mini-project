import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = (collection) =>{
    const[index, setIndex] = useState(null);
    const[file, setFile] = useState(null);
    const[error, setError] = useState(null);
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const types =['image/png','image/jpeg', 'image/jpg'];
    const collection1=collection.collection
    

    const changeHandler = (e) => {

       let selected = e.target.files[0];
       

       if(selected && types.includes(selected.type)){
           setFile(selected);

           setError('')
       } else {
           setFile(null);
           setError('Please select valid file type(jpeg,jpg or png)');
       }
   }
   const i =()=>{
       if(file && name.trim && price.trim ){
           setIndex(1)
       } 
       else{
        setError('Please fill all fields!')
       }

   }
 
   return(<>
       <form className='AddProduct'>

        <div className="output">
            <h6>Add product name: </h6>
            <input style={{height:"50%", border:"0.1px solid grey", borderRadius:"2px"}} placeholder="Product Name" type='text' value={name} onChange={(e) => setName(e.target.value)} required></input>
            <br></br><br></br>
            <h6>Add product price: </h6>
            <input style={{height:"50%", border:"0.1px solid grey", borderRadius:"2px"}} placeholder="Product Price" type='number' value={price} onChange={(e)=> setPrice(e.target.value)} required></input>
            
        </div>
       </form>
       <div className='add'>
           <br></br><br></br><br></br><br></br>
           <h6>Upload Product Image:</h6>
           
        <label className="prog">
             <input type='file' onChange={changeHandler} required/>
             <span>+</span>
        </label>
            {error && <div className="error">{ error }</div>}
            {file && <div>{file.name}</div>}
            {index && <ProgressBar file={file} setFile={setFile} index={index} setIndex={setIndex} name={name} price={price} collection={collection1}  />}
            <label className="AddButton" style={{width:"80px", margin:"20px auto"}} onClick={i}>Submit</label>
       </div>
               </> ) 
}

export default UploadForm;