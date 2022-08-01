import React, { useRef, useState } from 'react'
import ButtonCreateForm from './ButtonCreateForm'
import ButtonItem from './ButtonItem'
import MyButton from './Buttons/MyButton'
import styles from './campaing.module.scss'
import Table from 'react-bootstrap/Table';

export default function ButtonsCreateBlock() {

  const [buttonsState,setButtonsState]=useState<any>([])
  const [keyR,setKeyR]=useState(false)
  const [buttonsInfo,setButtonsInfo]=useState<any>([])
  const createButton:any=(newButton)=>{
    setButtonsState([...buttonsState,newButton])
  }
  
const allButtons={
  isInline:`${keyR}`,
  buttons:buttonsInfo
  
}
  return (
    <div className={styles.buttonsForm}>
      inline-режим клавиатуры  <input onChange={() => setKeyR(!keyR)} type='checkbox'></input>
      <ButtonCreateForm create={createButton}/>
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