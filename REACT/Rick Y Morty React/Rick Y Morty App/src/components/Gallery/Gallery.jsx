import '../../pages/CharactersPage/CharactersPage'
import CharactersPage from '../../pages/CharactersPage/CharactersPage'
import React from 'react'
import './Gallery.scss'


export default function Gallery({data}){
    return(
        <div>
            <header className='header'>

            </header>
        <div className='c-gallery'>
        <div className='row'>
            {data.map((item, index)=> 
            <div key={index} className='col-3' >
                <div className='c-gallery__item'>     
                        <h2>
                            {item.name}
                        </h2>
                <img src={item.image} alt={item.name}/>
                <button className='b-btn'>DETALLES</button>
                </div>
            </div>
            )}
        </div>
        </div>
        </div>
    )   
}