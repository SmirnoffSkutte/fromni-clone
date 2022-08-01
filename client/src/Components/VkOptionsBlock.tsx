import React, { useEffect, useRef, useState } from 'react'
import ButtonCreateForm from './ButtonCreateForm'
import ButtonItem from './ButtonItem'
import MyButton from './Buttons/MyButton'
import styles from './campaing.module.scss'
import Table from 'react-bootstrap/Table';
import VkButtonCreateForm from './ButtonCreateForms/VkButtonCreateForm'

export default function VkOptionsBlock(props:any) {

  const [buttonsState,setButtonsState]=useState<any>([])
  const [keyR,setKeyR]=useState(false)
  // const [isFetching,setIsFetching]=useState(false)
  // const [buttonsInfo,setButtonsInfo]=useState<any>([])
  const[textState,setTextState]=useState("")
  const [o,sO]=useState(false)
  useEffect(()=>{
    setButtonsState([])
  },[keyR])
  const createButton:any=(newButton)=>{
    setButtonsState([...buttonsState,newButton])
  }

  let isFetching=props.fetchFlag
  let sendData=props.giveData



const channelInfo={
  text:textState,
	buttons:{
    isInline:keyR,
    buttons:buttonsState
  }
}

useEffect(()=>{
  sendData(channelInfo)
},[buttonsState,textState])

let sendAllData=function(info){
  sendData(info)
}
// useEffect(()=>{
//   sendData(channelInfo)
//   console.log(channelInfo)
// },[isFetching])

// console.log(channelInfo)


// if(isFetching && o!==true){
//   sO(true)
//   sendData(channelInfo)
//   console.log(channelInfo)
//   console.log(isFetching)
// }

  return (
    <div className={styles.buttonsForm}>
        <div className={styles.header}><h1>Vk</h1></div>
        <h2>Текст сообщения</h2>
        <textarea maxLength={4096} onChange={(e)=>setTextState(e.target.value)}></textarea>
        <h2>кнопки</h2>
      inline-режим клавиатуры  <input onChange={() => setKeyR(!keyR)} type='checkbox'></input>
      <VkButtonCreateForm butAmount={buttonsState.length} isInline={keyR} create={createButton}/>
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