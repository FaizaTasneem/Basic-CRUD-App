import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import base_url from './api'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Edit() {
    const notify = () => toast.success("Book Updated Successfully");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [author,setAuthor]=useState('');
    const [price,setPrice]=useState('');
    useEffect(() => {
        getData();
        }, []);

        async function getData() {
            axios.get(`${base_url}/book/`+tid)
                .then(res => {
                    console.log(res.data);
                    setName(res.data.name);
                    setAuthor(res.data.author);
                    setPrice(res.data.price);
                    setId(res.data.id);
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function categoryEdit (e) { 
            e.preventDefault();
            
            const data = {
                'id':id,
                'name':name,
                'author':author,
                'price':price
              };
              axios
              .put(`${base_url}/book/`, +tid)
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
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={categoryEdit}>
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
