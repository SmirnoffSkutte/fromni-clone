import React, { useEffect, useRef, useState } from 'react'
import MyButton from '../Buttons/MyButton'
import styles from '../campaing.module.scss'

export default function VkButtonCreateForm(props:any) {
    const [text,setText]=useState("")
    const [type,setType]=useState("быстрый ответ")
    const [linkOrResponce,setLinkOrResponce]=useState("")
    const [style,setStyle]=useState("обычный")
    // const [inline,setInline]=useState()
    const [MaxButtonsAmount,setMaxButtonsAmount]=useState(0)
    const create=props.create
    const butAm=props.butAmount
    const isInline=props.isInline
 
    const addButton=()=>{
        if(isInline){
            setMaxButtonsAmount(9)
        }else{
            setMaxButtonsAmount(39)
        }
       if(butAm > MaxButtonsAmount){
        alert("Максимум 10 инлайн кнопок,или 40 обычных")
       }else{
        create(buttonInfo)
       }
    }
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

        <MyButton onClick={()=>addButton()}>Добавить</MyButton>

    </div>
  )
}