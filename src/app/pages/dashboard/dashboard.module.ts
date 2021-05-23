import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {MaterialModuleModule} from '../../material-module/material-module.module'

import { jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { Gauge1Component } from './gauge1/gauge1.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    jqxGaugeModule,
    MaterialModuleModule
  ],
  declarations: [
    DashboardComponent,
    
    Gauge1Component,
    
    SigninComponent,
  ],
})
export class DashboardModule { }
