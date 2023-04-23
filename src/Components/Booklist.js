import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Booklist=()=>{
   const [books, setBooks] = useState([])
   let data;
   useEffect((event)=>{
    getAllBooks(event);
   },[books]);
  async function  getAllBooks (event) {
    
    event.defaultPrevent();
    
     const response = await fetch('http://localhost:3000/books',{
        method: 'GET',
        headers: {
            'Content-Type' :'application-json',

        },
      

     })

      data = await response.json();
     if(data.booklist) {
        setBooks(data.booklist);
     }
    

   }
    return(<>
    {data.booklist.forEach((item, index)=>{

<div className='box' key = {index}> 
<div className='title'>{item.title}</div>
<div className='author'>{item.author}</div>
<div className='genre'>{item.description}</div>
</div>

    })}
   

    
   </>)

}
export default Booklist