import React, { useEffect, useRef, useState } from 'react'
import ButtonCreateForm from './ButtonCreateForm'
import ButtonItem from './ButtonItem'
import MyButton from './Buttons/MyButton'
import styles from './campaing.module.scss'
import Table from 'react-bootstrap/Table';
import TelegramButtonCreateForm from './ButtonCreateForms/WhatsappButtonCreateForm'
import WhatsappButtonCreateForm from './ButtonCreateForms/WhatsappButtonCreateForm'

export default function WhatsappOptionsBlock(props:any) {

  const [buttonsState,setButtonsState]=useState<any>([])
  const [keyR,setKeyR]=useState(false)
  const[textState,setTextState]=useState("")
  const createButton:any=(newButton)=>{
    setButtonsState([...buttonsState,newButton])
  }
  useEffect(()=>{
    setButtonsState([])
  },[keyR])

  const channelInfo={
    text:textState,
    buttons:{
      isInline:keyR,
      buttons:buttonsState
    }
  }


let isFetching=props.fetchFlag
let sendData=props.giveData

useEffect(()=>{
  sendData(channelInfo)
},[buttonsState,textState])
// console.log(channelInfo)
  return (
    <div className={styles.buttonsForm}>
        <div className={styles.header}><h1>Whatsapp</h1></div>
        <h2>Текст сообщения</h2>
        <textarea maxLength={1096} onChange={(e)=>setTextState(e.target.value)}></textarea>
        <h2>кнопки</h2>
      inline-режим клавиатуры  <input onChange={() => setKeyR(!keyR)} type='checkbox'></input>
      <WhatsappButtonCreateForm butAmount={buttonsState.length} isInline={keyR} create={createButton}/>
      <Table striped>
      <thead>
        <tr>
          <th>Текст</th>
          <th>Тип</th>
          <th>Ответ/ссылка</th>
          <th>Стиль</th>
        </tr>
      </thead>
      <tbody>
      {buttonsState.map((i)=>{
        return <ButtonItem text={i.text} type={i.type} style={i.style} value={i.value}/>
      })}
      </tbody>
      </Table>
    </div>
  )
}