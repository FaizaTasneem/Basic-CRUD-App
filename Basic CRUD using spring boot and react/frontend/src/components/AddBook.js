import React,{useState} from 'react'
import "../nav.css"
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';

export default function AddBook() {
    const notify = () => toast.success("Book added successfully");
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [author,setAuthor]=useState('');
    const [price,setPrice]=useState('');
    async function tagSubmit(e){
        if(name!="" || author!=""||id!=""||price!=""){
            e.preventDefault();
            const data = {
                'id':id,
                'name':name,
                'author':author,
                'price':price
            };

            axios.post(`${base_url}/book`, data)
          .then((response) => {
            setName("");
            setAuthor("");
            setPrice("");
            setId("");
            notify();
          }).catch((err) => {
            console.log( err.data );
          });
        }
        else{
            alert("all fields are required");
        }
    }
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={tagSubmit}>
            <label for="fname" style={{color:"antiquewhite", fontSize:"20px"}}>Id</label>
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} />
            <label for="fname" style={{color:"antiquewhite", fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label for="lname" style={{color:"antiquewhite", fontSize:"20px"}}>Author</label>
            <input type="text" id="lname" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <label for="lname" style={{color:"antiquewhite", fontSize:"20px"}}>Price</label>
            <input type="text" id="lname" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="submit" value="Submit" style={{ backgroundColor:"green",fontSize:"25px" }}/>
            </form>
        </div>
    )
}
