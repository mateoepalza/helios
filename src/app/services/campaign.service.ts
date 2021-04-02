import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Campaign } from "../models/campaign.model";

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    constructor(private http : HttpClient){
        
    }

    getCampaigns(){
        return this.http.get<Campaign[]>(
            "https://smartsoft-b6882-default-rtdb.firebaseio.com/campaigns.json"
        ).pipe(
            catchError(this.handleError),
            map( data => {
                const resCampaigns: Campaign[] = []; 
                
                for(let elem of data){
                    resCampaigns.push(elem);
                }
                
                return resCampaigns;
            })
        )
    }
    
    getCampaign(_id: string){
    }
    
    updateCampign(){
        
    }
    
    deleteCampaign(_id: string){
    }
    
    handleError(error : HttpErrorResponse){
        return throwError("")
    }
}