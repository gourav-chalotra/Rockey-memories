import React from 'react'
import './Home.css'
import memories from './Memory'
const home = ()=>{
    return(
        <>
            <div className='ContainerSectionGrid'>
                <div className='Welcome_heading'>Hello Rockey <br/>Here...</div>
                <div className='memorybtn'><button>Memories</button></div>
            </div>
        </>
    )
}

export default home;