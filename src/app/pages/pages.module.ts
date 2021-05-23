import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TestComponent } from './test/test.component';
import { ListeComponent } from './CihazYonetimi/liste/liste.component';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  
} from '@nebular/theme';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  ],
  providers:[
    AuthService,
  ],
  declarations: [
    PagesComponent,
    TestComponent,
    ListeComponent,
  ],
})
export class PagesModule {
}
