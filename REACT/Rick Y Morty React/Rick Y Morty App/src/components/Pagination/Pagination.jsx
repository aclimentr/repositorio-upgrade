import React from 'react'
import { useState,useEffect } from "react";
import './Pagination.scss'

export const Pagination = ({counter, setCounter}) => {


  return (
    <div className='butondiv'>
        {counter > 0 && <button className="butonpag" onClick={()=> setCounter(counter -1)}>Prev</button>}
        {counter}
        <button className="butonpag" onClick={()=> setCounter(counter + 1)}>Next</button>
    </div>
  )
}


