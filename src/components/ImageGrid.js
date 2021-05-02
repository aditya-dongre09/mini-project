import React, {useState} from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion';
// import DeleteIcon from '@material-ui/icons/Delete';
import {projectStorage,projectFirestore} from '../firebase'
import Modal from 'react-modal';
import {MdDelete} from 'react-icons/md'
import {MdEdit} from 'react-icons/md'




const ImageGrid = (collection) =>{
    const[newname,setNewname]=useState('');
    const[newprice,setNewprice]=useState('');
    const [modal1IsOpen, setModal1IsOpen] = useState(false)
    const [modal2IsOpen, setModal2IsOpen] = useState(false)
    const [Cimage,setCImage]=useState(null)
    const {docs} = useFirestore(collection.collection);
    const [CName,setCName] =useState(null);
    const [CId,setCId] =useState("");
    const[file, setFile] = useState(null);
    const[error, setError] = useState(null);
    const types =['image/png','image/jpeg', 'image/jpg'];
    const[url,setUrl] = useState(null);
    const[progress,setProgress] = useState(null);

    const Updating=()=>{
        if(file){
        const storageRef = projectStorage.ref('Pics');
        const imageRef = storageRef.child(file.name);
        const collectionRef = projectFirestore.collection('Products').doc('101').collection(collection.collection).doc(CId)
        imageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
            const photoref= projectStorage.refFromURL(Cimage);
            photoref.delete();
        },(err)=>{
            setError(err);
        },async()=>{
          const url = await imageRef.getDownloadURL();  
          collectionRef.update({'cardimage': url}).then(setModal2IsOpen(false))
          setUrl(url);
        })

        setFile(null);
        setProgress(null);
        }
        if(newname){

                projectFirestore.collection('Products').doc('101').collection(collection.collection).doc(CId).update({"cardname": newname}).then(
                setModal2IsOpen(false),
                setNewname(null)) 
                
        }
        if(newprice){
                var price=parseInt(newprice)
            
                projectFirestore.collection('Products').doc('101').collection(collection.collection).doc(CId).update({"cardprice": price}).then(
                setModal2IsOpen(false),
                setNewprice(null)) 
                
        }
    }
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

   return(
       <div className="img-grid">
           {docs && docs.map(doc => (
               <motion.div layout className='parent' key={doc.id}>
                   <div className="img-wrap" >
                       <img src={doc.cardimage} alt="product image"></img>
                   </div>
                   <h6 style={{textDecoration: 'underline'}}>{doc.cardname}</h6>
                   <h6 style={{color: '#ff4a4a'}}>₹{doc.cardprice}</h6>
                  
 
                   <button className="btn2" style={{width:"90px", border:"0"}} 
                   onClick={() =>{ setModal2IsOpen(true); setProgress(null); setCName(doc.cardname); setCId(doc.id); setCImage(doc.cardimage) }}>
                    <MdEdit/> Update </button>
                   <Modal ariaHideApp={false}
                   style={{overlay: {
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     zIndex:5,
                     backgroundColor: 'rgba(0, 0, 0, 0.09)'},
                    content:{
                     textAlign: 'center',
                     top: '30%',
                     left: "35%",
                     right: '35%',
                     bottom: '30%',
                    }}}
                   isOpen={modal2IsOpen} 
                   onRequestClose= {() => setModal2IsOpen(false)}>
                       <h4>Update {CName}: </h4>
                       <h6>New Name:</h6>
                       <input type='text' placeholder='Enter new product name' value={newname} onChange={(e) => setNewname(e.target.value)} ></input>
                       { error && <div>{error}</div>}
                       <br></br>  <br></br>
                       <h6>New Price:</h6>
                       <input type='number' placeholder='Enter new product price' value={newprice} onChange={(e) => setNewprice(e.target.value)}></input>
                       <br></br>
                       <label className="prog" style={{lineHeight:'17px'}}>
                         <input type='file' onChange={changeHandler}/>
                         <span>+</span>
                        </label>
                        {error && <div className="error">{ error }</div>}
                        {file && <div>{file.name}</div>}
                        
                        {progress>0 &&<div className='progress-bar' style={{width : progress + '%'}}></div>}
                       <div>
                        <label className="btn1" onClick={() => setModal2IsOpen(false)}>Cancel</label>
                        <label className="btn2" onClick={() => {Updating(); 
                          
                          }}>Update</label>
                       </div>
                   </Modal>
                                    

                   <button className="btn2" style={{width:"90px", border:"0"}} 
                   onClick={() =>{ setModal1IsOpen(true); setCName(doc.cardname); setCId(doc.id); setCImage(doc.cardimage) }}>
                    <MdDelete/> Delete </button>
                   <Modal ariaHideApp={false}
                   style={{overlay: {
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     backgroundColor: 'rgba(0, 0, 0, 0.09)'},
                    content:{
                     textAlign: 'center',
                     top: '30%',
                     left: "30%",
                     right: '30%',
                     bottom: '53%',
                    }}}
                   isOpen={modal1IsOpen} 
                   onRequestClose= {() => setModal1IsOpen(false)}>
                       <h4>Do you want to delete {CName}? </h4>
                       
                       <div>
                        
                        <label className="btn1" onClick={() => setModal1IsOpen(false)}>Cancel</label>
                        <label className="btn2" onClick={()=>{
                          projectFirestore.collection('Products').doc('101').collection(collection.collection).doc(CId).delete().then(setModal1IsOpen(false));
                          const photoref= projectStorage.refFromURL(Cimage);
                          photoref.delete();
                          }}>Delete</label>
                       </div>
                   </Modal>



               </motion.div>
           ))}
       </div>
   )

}

export default ImageGrid;