import React from 'react'
import style from './Section.module.css'

function Section ({title, children}){
    return <div className={style.container}>
        <h2 className={style.title}>{title}</h2>
        {children}
    </div>
}

export default Section