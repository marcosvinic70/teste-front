import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GraphicComponent } from './graphic/graphic.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GraphicService } from './graphic/graphic.component.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SideNavComponent,
		GraphicComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HighchartsChartModule,
		HttpClientModule
	],
	providers: [GraphicService],
	bootstrap: [AppComponent]
})
export class AppModule { }
