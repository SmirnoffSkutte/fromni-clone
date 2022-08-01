import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CampaingService } from '../api/campaing.service'
import Layout from '../Components/Layout/Layout'

type Props = {}

export default function WatchCampaingPage({}: Props) {
    const {id}=useParams()
    const [info,setInfo]=useState("")
    useEffect(()=>{
        CampaingService.getCampaingById(id)
        .then(res=>{
            let string=JSON.stringify(res.data)
            setInfo(string)
        })
    },[])
  return (
    <Layout>
        {info}
    </Layout>
  )
}