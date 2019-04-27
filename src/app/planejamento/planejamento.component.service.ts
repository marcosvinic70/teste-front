import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../utils/routes';

@Injectable()
export class PlanejamentoService {

	data: any;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {

		return this.http.get(routes.PLANEJAMENTO);

	}

}