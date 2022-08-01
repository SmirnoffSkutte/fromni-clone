import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CampaingService } from '../api/campaing.service'
import styles from "./campaing.module.scss"

export default function CampaingItem(props:any) {
    const nav=useNavigate()
    const name=props.name
    const id=props._id
  return (
    <div className={styles.itemWrap}>
        <div className={styles.itemCell}>{name}</div>
        <div className={styles.itemCell} onClick={()=>nav(`${id}`)}>посмотреть</div>
        <div className={styles.itemCell} onClick={()=>nav(`/updateCampaing/${id}`)}>обновить</div>
        <div className={styles.itemCell} onClick={()=>CampaingService.deleteCampaing(id)}>удалить</div>
    </div>
  )
}