import React from 'react'
import {useState} from 'react'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import {Link} from 'react-router-dom'
import {FaHome} from'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'

 function Shrikhand() {
    const [show,setShow] = useState(false);
    const collection='Shrikhand';

    return (
        <>
            <div className="nav">
            <button className='Back' ><Link to ='/' style={{ color:'#fff', textDecoration: 'none', fontSize:'25px', padding:0}}><BiArrowBack/> {'\u00A0'} <FaHome/></Link></button>
            <button className="AddButton" onClick={() => setShow(true)}> Add Products</button>
            </div>
            <Modal show={show} setShow={setShow} collection={collection}>
            </Modal>
            <ImageGrid collection={collection}/>

            
        </>
    )
    
}
export default Shrikhand;