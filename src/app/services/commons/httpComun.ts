import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { IDataStandar } from '../../models/IDataStandar';
import { URL_ROOT } from '../../config/constantes';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export abstract class HttpComun<T> {

    constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

    public abstract getPathURL(): string;

    public getAll(pagina?: string, conSpinner: boolean = true) {
        let observable = this.http.get<IDataStandar<T>>(`${URL_ROOT}${this.getPathURL()}?page=${pagina || 1}`);
        if (conSpinner) {
            this.spinner.show();
            return observable.pipe(
                finalize(() => {
                    this.spinner.hide();
                })
            )
        }
        return observable;
    }

    public getUnique(id: string, conSpinner: boolean = true): any {
        let observable = this.http.get<T>(`${URL_ROOT}${this.getPathURL()}${id}`);
        if (conSpinner) {
            this.spinner.show();
            return observable.pipe(
                finalize(() => {
                    this.spinner.hide();
                }) 
            )
        }
        return observable;
    }
}
