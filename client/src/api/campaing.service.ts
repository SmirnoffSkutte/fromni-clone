import { CampaingModel } from "./campaingDtos"
import api from "./interseptors"

export const CampaingService={
    async getCampaingById(id){
        return api.get(`/campaing/${id}`)
    },

    async getCampaings(){
        return api.get('campaing')
    },

    async createCampaing(){
        return api.post('campaing')
    },

    async updateCampaing(updateDto:any,id:any){
        return api.put(`campaing/${id}`,updateDto)
    },

    async deleteCampaing(id){
        return api.delete(`campaing/${id}`)
    }

}