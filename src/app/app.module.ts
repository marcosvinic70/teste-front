import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { PlanejamentoService } from './planejamento/planejamento.component.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SideNavComponent,
		PlanejamentoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HighchartsChartModule,
		HttpClientModule
	],
	providers: [PlanejamentoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
