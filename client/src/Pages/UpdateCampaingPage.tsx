import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CampaingService } from '../api/campaing.service'
import MyButton from '../Components/Buttons/MyButton'
import Layout from '../Components/Layout/Layout'
import TelegramOptionsBlock from '../Components/TelegramOptionsBlock'
import VkOptionsBlock from '../Components/VkOptionsBlock'
import WhatsappOptionsBlock from '../Components/WhatsappOptionsBlock'
// import styles from './campaing.module.scss'
type Props = {}

export default function UpdateCampaingPage({}: Props) {
  // useEffect(()=>{
    
  // })
  const redirect=useNavigate()
  const {id}=useParams()
  const [nameState,setName]=useState("")
  const [commentState,setComment]=useState("")
  const  [vkState,setVkState]=useState({})
  const  [telegramState,setTelegramState]=useState({})
  const  [whatsappState,setWhatsappState]=useState({})
  const  [smsState,setSmsState]=useState("")
  const [isFetching,setIsFetching]=useState(false)
  const getVkData:any=(data)=>{
    setVkState({...data})
  }
  const getWhatsappData:any=(data)=>{
    setWhatsappState({...data})
  }
  const getTelegramData:any=(data)=>{
    setTelegramState({...data})
  }

  // let allData={}

  const fetchAllData=async function() {
    setIsFetching(true)
    let allData={
      name:nameState,
      vkOptions:vkState,
      telegramOptions:telegramState,
      whatsappOptions:whatsappState,
      smsOptions:{
        text:smsState
      },
      comment:commentState
    }
    console.log(vkState)
    console.log(allData)
    CampaingService.updateCampaing(allData,id)
    .then(res=>{
      console.log(allData)
      redirect("/campaing")
    })
  }

  // allData={
  //   name:nameState,
  //   vkOptions:vkState,
  //   telegramOptions:telegramState,
  //   whatsappOptions:whatsappState,
  //   smsOptions:smsState,
  //   comment:commentState
  // }

  return (
    <Layout>
      <h3>Название</h3>
      <input className='wFull' type={'text'} onChange={(e)=>setName(e.target.value)}></input>
      <h3>Комментарий</h3>
      <textarea onChange={(e)=>setComment(e.target.value)}></textarea>
      <h3>Настройка каналов</h3>
      <VkOptionsBlock fetchFlag={isFetching} giveData={getVkData}/>
      <WhatsappOptionsBlock fetchFlag={isFetching} giveData={getWhatsappData}/>
      <TelegramOptionsBlock fetchFlag={isFetching} giveData={getTelegramData}/>
  
      <h1>Sms</h1>
      <textarea onChange={(e)=>setSmsState(e.target.value)}/>
      <MyButton onClick={()=>fetchAllData()}>Ок</MyButton>

    </Layout>
  )
}
