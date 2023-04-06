"use client";

import React, { useState } from 'react';



function ProntInput() {
    const [input, setInput] = useState("");
  return (
    <div className='m-10'>
        <form className='flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x'>
        <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a Prompt...'
        className='flex-1 p-4 outline-none rounded-md'
        />
        <button type='submit'
        className={`p-4 font-bold ${
            input
            ?"bg-violet-500 text-white transation-colors duration-200"
            :"text-gray-300 cursor-not-allowed"
        }`}
        disabled={!input}> 
            generate</button>
        <button className='p-4 bg-violet-400 text-white transation-colors duration-200 font-bold disable:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400' type='button'>Use Sugestion</button>
        <button className='p-4 bg-white-400 text-violet-400 border-none transation-colors duration-200 ' type='button'>New Suggestions</button>
        
        
        
        
        
        
        
        
        
        
        </form>





    </div>
  )
}  

export default ProntInput