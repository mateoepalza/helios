import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Campaign } from "../models/campaign.model";

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    campaignsEmitter = new Subject<Campaign[]>();

    campaigns: Campaign[] = [
        {
            _id: "5646545",
            title: "Celular apagado",
            status: "Programada",
            createdAt: new Date(),
            type: "Promoción",
            users: 0,
            sentAt: new Date()
        },
        {
            _id: "fsd564654ds",
            title: "Celular prendido",
            status: "Programada",
            createdAt: new Date(),
            type: "Promoción",
            users: 100,
            sentAt: new Date()
        },
        {
            _id: "sdf465fsd4",
            title: "Sin celular",
            status: "Programada",
            createdAt: new Date(),
            type: "Promoción",
            users: 500,
            sentAt: new Date()
        }
    ]
    
    getCampaigns(){
        this.campaignsEmitter.next(this.campaigns.slice());
    }
    
    getCampaign(_id: string){
        this.campaignsEmitter.next([this.campaigns.find((elem) => elem._id === _id)]);
    }
    
    updateCampign(){
        
    }
    
    deleteCampaign(_id: string){
        const index = this.campaigns.findIndex( elem => elem._id === _id);
        this.campaigns.splice(index, 1);
        this.campaignsEmitter.next(this.campaigns);
    }
}