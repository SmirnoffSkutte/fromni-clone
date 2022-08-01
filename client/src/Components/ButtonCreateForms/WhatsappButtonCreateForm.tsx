import React, { useEffect, useRef, useState } from 'react'
import MyButton from '../Buttons/MyButton'
import styles from '../campaing.module.scss'

export default function WhatsappButtonCreateForm(props:any) {
    const [text,setText]=useState("")
    const [type,setType]=useState("быстрый ответ")
    const [linkOrResponce,setLinkOrResponce]=useState("")
    const [style,setStyle]=useState("обычный")
    // const [inline,setInline]=useState()
    const [isLinkExist,setIsLinkExist]=useState(false)
    const [MaxButtonsAmount,setMaxButtonsAmount]=useState(0)
    const create=props.create
    const butAm=props.butAmount
    const isInline=props.isInline
    const addButton=()=>{
        if(isInline){
            setMaxButtonsAmount(2)
        }else{
            setMaxButtonsAmount(9)
        }
        if(isInline && type==='ссылка'){
            setIsLinkExist(true)
            setType('быстрый ответ')
        }
       if(butAm>MaxButtonsAmount ){
        alert("Максимум 3 инлайн кнопок ответов и 1 инлайн кнопка ссылка,или 10 обычных")
       } else {
        create(buttonInfo)
       }
    }
    const buttonInfo={
        text:`${text}`,
        type:`${type}`,
        style:`${style}`,
        value:`${linkOrResponce}`
    }
    useEffect(()=>{
       setType('быстрый ответ')
       setIsLinkExist(false)
    },[isInline])

   

  return (
    <div className={styles.ButtonItemWrap}>
        <div>
        <h5>текст кнопки</h5>
        <input maxLength={20} onChange={(e)=>setText(e.target.value)} type={'text'}></input>
        </div>

        <div>
        <h5>тип кнопки</h5>
        {isInline ? (
            <>
            {isLinkExist ? (
            <select > 
                <option value={type} selected>быстрый ответ</option>
            </select>
            ) : (
            <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option selected>быстрый ответ</option>
                <option>ссылка</option>
            </select>
            )}
            </>
        ):(
            <select > 
                <option value={type} selected>быстрый ответ</option>
            </select>
        )}
        
        </div>
        {/* <select > 
                <option selected>быстрый ответ</option>
            </select> */}

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