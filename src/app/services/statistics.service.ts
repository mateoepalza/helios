import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, tap, catchError } from 'rxjs/operators';
import { Statistic } from "../models/statistics.model";

@Injectable({
    providedIn: 'root'
})
export class StatisticsSevice{

    /**
     * uso un subject porque los numeros que se encuentran en el header
     * son algo que puede ir cambiando a lo largo que yo interactuo con la plataforma
     * es decir pueden ir decrementando si yo realizo una acción y yo quiero que se
     * recaguen automaticamente sin tener que volver a cargar o crear el componente y por lo que
     * es un header es muy poco probable que se vuelva a cargar el componente
     */
    statsSub = new Subject<Statistic>();

    constructor(private http: HttpClient){}
    
    getStatistics(){
        this.http.get<Statistic>(
            "https://smartsoft-b6882-default-rtdb.firebaseio.com/statistics.json"
        ).pipe(
            catchError(this.handleErrors),
            tap((data) => {
                this.statsSub.next(data);
            })
        ).subscribe();
    }

    handleErrors(error : HttpErrorResponse){
        let msg = "Ocurrió algo inesperado";

        if(!error.error || !error.error.code){
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