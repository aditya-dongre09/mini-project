import React,{useState} from 'react'
import {Card,Button,Alert, Container} from 'react-bootstrap'
import{useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom'
import {motion} from 'framer-motion';

export default function Dashboard() {
    const [error,setError]=useState("")
    const{currentUser,logout} =useAuth()
    const history= useHistory

    async function handleLogout(){
        setError('')
        try{
            await logout();
            history.pushState('/login')
        }
        catch{
            setError('Failed to log out')}

    }


    return (
       <div className="text-center" >
       <Card style={{width:'17%', height:'100%',marginLeft:'83%'}}>
           <Card.Body>
                <h2 className='text-center mb-4'>Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>} 
                <strong>Email:</strong>{currentUser.email}
                <Link to ='/update-profile' className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
           </Card.Body>
        </Card>
       <div >
            <h1>Categories</h1>
                <div className="img-grid1">
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2Fimages.jpg?alt=media&token=a68f94d9-4b68-4989-b61b-a8f32d4ae281" alt="pickles image"></img>
                   </div>
                   <Link to='/pickle' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Pickles</Link></motion.div>


                   
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2Fyojak-kokum.png?alt=media&token=54bf4360-3fc0-4337-82a5-6f24a9967425" alt="syrups image"></img>
                   </div>
                   <Link to='/syrup' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Syrups</Link></motion.div>

                   
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2Forange_front_1.jpg?alt=media&token=73d39a4b-064d-4571-a856-227a05928700" alt="product image"></img>
                   </div>
                   <Link to='/barfi' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Barfis</Link></motion.div>
                  
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2Fdeshee-ghee-boxes-53282.jpg?alt=media&token=ec2176b0-d0a2-4079-b33b-6007435224ac" alt="product image"></img>
                   </div>
                   <Link to='/ghee' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Ghee</Link></motion.div>

                  
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2F200-shrikhand-badam-pista-shrikhand-amul-original-imafyfhsmmwy9czg.jpeg?alt=media&token=5ca1b813-4d7c-4074-ba0b-bd90aa1d7507" alt="product image"></img>
                   </div>
                   <Link to='/shrikhand' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Shrikhand</Link></motion.div>

                   
                 <motion.div layout className='parent1'>
                   <div className="img-wrap" >
                       <img src="https://firebasestorage.googleapis.com/v0/b/mini-bazaar-e41f0.appspot.com/o/Pics%2Fkhaman-dhokla.png?alt=media&token=edf49552-7a00-4951-901a-a4fbced64e51"  alt="product image"></img>
                   </div>
                   <Link to='/InstantMix' className="btn btn-info mb-4 " style={{width:'100px', marginLeft:'auto', marginRight:'auto'}}>Instant Mix</Link></motion.div></div>
            </div>
        </div>
       
       
    )
}
