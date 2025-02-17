import React from 'react'
import { memo } from 'react'
import style from './css/NavBar.module.css'
import { createContext } from 'react'
export default memo (function NavBar() {
 let x = [{title:'Home' , lnk:'#'},{title:'Client' , lnk:'#'}, {title:'Contact' , lnk:'#'}, {title:'About Me' , lnk:'#'},{title:'For You' , lnk:'#'}]

 return (

    <div className={style.TheDiv} id='nav'>
    {x.map((x,index)=>{
        return <a key={index} href={x.lnk} style={{ textDecoration:'none'}} className={style.font}>{x.title}</a>
    })}
    </div>

  )
})

