import React, { useEffect, useState } from 'react'
import { CampaingService } from '../api/campaing.service'
import CampaingItem from '../Components/campaingItem'
import Layout from '../Components/Layout/Layout'
import Table from 'react-bootstrap/Table';
import MyButton from '../Components/Buttons/MyButton';
import { useNavigate } from 'react-router-dom';
import styles from "../Components/campaing.module.scss"
type Props = {}

export default function CampaingsPage({}: Props) {
    const [campaingsState,setCampaingsState]=useState<any>([])
    useEffect(()=>{
        CampaingService.getCampaings()
            .then(res=>{
                setCampaingsState(res.data)
            })
      
    },[])
    const redirect=useNavigate()
    const create=async function() {
        CampaingService.createCampaing()
        .then(res=>{
            const id=res.data._id
            redirect(`/updateCampaing/${id}`)
        })
    }
    const nav=useNavigate()
    const refetchWithDelete=async function(_id) {
        CampaingService.deleteCampaing(_id)
        .then(res=>{
            CampaingService.getCampaings()
            .then(res=>{
                setCampaingsState(res.data)
            })
        })
    }
  return (
    <Layout>
        <div>
            <MyButton onClick={create}>Создать</MyButton>
            {campaingsState.map((item:any)=>{
                return (
                <div className={styles.itemWrap}>
                    <div className={styles.itemCell}>{item.name}</div>
                    <div className={styles.itemCell} onClick={()=>nav(`${item._id}`)}>посмотреть</div>
                    <div className={styles.itemCell} onClick={()=>nav(`/updateCampaing/${item._id}`)}>обновить</div>
                    <div className={styles.itemCell} onClick={()=>refetchWithDelete(item._id)}>удалить</div>
                </div>
                )
            })}
        </div>
    </Layout>
  )
}