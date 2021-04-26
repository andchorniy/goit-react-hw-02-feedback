import React from 'react'
import style from './FeedbackOptions.module.css'

function FeedbackOptions ({options, onLeaveFeedback}){
    return <ul className={style.list}>
        {options.map((option)=>{
            return <li key={option}>
            <button className={style.btn} name={option} onClick={onLeaveFeedback}>
                {option}
            </button>
        </li>
        })}
        
    </ul>
}

export default FeedbackOptions