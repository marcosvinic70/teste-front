import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../utils/routes';
import { Planejamento } from '../models/planejamento.model';

@Injectable()
export class GraphicService {

	data: any;

	constructor(private http: HttpClient) {}

	public getData(): Observable<any> {

		return this.http.get(routes.PLANEJAMENTO);

	}

}