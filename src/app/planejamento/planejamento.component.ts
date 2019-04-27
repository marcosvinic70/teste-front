import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PlanejamentoService } from './planejamento.component.service';
import { Planejamento } from '../models/planejamento.model';

@Component({
	selector: 'app-planejamento',
	templateUrl: './planejamento.component.pug',
	styleUrls: ['./planejamento.component.scss']
})
export class PlanejamentoComponent implements OnInit {

	Highcharts = Highcharts;
	chartOptions: any;
	canLoad: boolean = false;
	planejamentos: Planejamento[];

	constructor(private planejamentoService: PlanejamentoService) {

		this.findPlanejamentos();

	}

	ngOnInit() { }

	findPlanejamentos() {

		this.planejamentoService.getData()
			.subscribe((planejamentos: Planejamento[]) => {

				this.planejamentos = planejamentos;

				this.buildChartOptions(planejamentos);

		});

	}

	buildChartOptions(planejamentos: Planejamento[]) {

		this.chartOptions = {
			series: [
				{
					name: 'Datas',
					colorByPoint: true,
					data: this.getDatas(planejamentos)
				}
			],
			chart: {
				type: 'column'
			},
			title: {
				text: 'Planejamento de atendimentos'
			},
			yAxis: {
				allowDecimals: false,
				title: {
					text: 'Capacidade - Atendimento Realizado'
				}
			},
			xAxis: {
				type: 'category',
			},
			tooltip: {
				valueSuffix:" (Capacidade - Atendimento Realizado)"
			}
		}

		this.canLoad = true;

	}

	getDatas(planejamentos: Planejamento[]) {

		return planejamentos.map((planejamento) => {

			return {name: planejamento.data, y: planejamento.capacidade - planejamento.atendimentoRealizado}

		});

	}

}
