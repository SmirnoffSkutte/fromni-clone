import React, { useEffect, useRef, useState } from 'react'
import MyButton from './Buttons/MyButton'
import styles from './campaing.module.scss'

export default function ButtonCreateForm(props:any) {
    const [text,setText]=useState("")
    const [type,setType]=useState("быстрый ответ")
    const [linkOrResponce,setLinkOrResponce]=useState("")
    const [style,setStyle]=useState("обычный")

    const create=props.create
    const buttonInfo={
        text:`${text}`,
        type:`${type}`,
        style:`${style}`,
        value:`${linkOrResponce}`
    }

  return (
    <div className={styles.ButtonItemWrap}>
        <div>
        <h5>текст кнопки</h5>
        <input  onChange={(e)=>setText(e.target.value)} type={'text'}></input>
        </div>

        <div>
        <h5>тип кнопки</h5>
        <select onChange={(e)=>setType(e.target.value)} name="select"> 
            <option selected>быстрый ответ</option>
            <option>ссылка</option>
        </select>
        </div>

        <div>
        <h5>ссылка/ответ</h5>
        <input onChange={(e)=>setLinkOrResponce(e.target.value)} type={'text'}></input>
        </div>

        <div>
        <h5>стиль кнопки</h5>
        <select onChange={(e)=>setStyle(e.target.value)} name="select"> 
            <option selected>обычный</option>
            <option>красный</option>
            <option>зеленый</option>
        </select>
        </div>

        <MyButton onClick={()=>create(buttonInfo)}>Добавить</MyButton>

    </div>
  )
}