import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Campaign } from "../models/campaign.model";

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    constructor(private http: HttpClient) {

    }

    getCampaigns() {
        return this.http.get<Campaign[]>(
            "https://smartsoft-b6882-default-rtdb.firebaseio.com/campaigns.json"
        ).pipe(
            catchError(this.handleError),
            map(data => {
                const resCampaigns: Campaign[] = [];

                for (let elem of data) {
                    resCampaigns.push(elem);
                }

                return resCampaigns;
            })
        )
    }
    // TODO
    getCampaign(_id: string) {
        // return this.http.get(
        //     "" + _id
        // ).pipe(
        //     catchError(this.handleError),
        //     map(data => {

        //     })
        // )
    }

    // TODO
    createCampaign(campaign: Campaign) {
        //    return this.http.post(
        //        "",
        //        campaign
        //    ).pipe(
        //         catchError(this.handleError)
        //         //something
        //    ) 
    }

    // TODO
    updateCampaign(campaign: Campaign) {
        // return this.http.put(
        //     "" + campaign._id,
        //     campaign
        // ).pipe(
        //     catchError(this.handleError),
        //     //something
        // )
    }

    // TODO
    deleteCampaign(_id: string) {
        // return this.http.delete(
        //     "" + _id
        // ).pipe(
        //     catchError(this.handleError)
        //     //something
        // )
    }

    handleError(error: HttpErrorResponse) {
        let msg = "Ocurrió algo inesperado";

        if (!error.error || !error.error.code) {
            throwError(msg);
        }

        switch (error.error.code) {
            case -4:
                msg = "Por favor intenta de nuevo";
                break;
            case -3:
                msg = "No tiene permisos para realizar esta acción";
                break;
            case -2:
                msg = "La operación falló, por favor intente de nuevo";
                break;
        }

        return throwError(msg);

    }
}