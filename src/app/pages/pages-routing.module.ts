import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TestComponent } from './test/test.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import {BulComponent} from './CihazYonetimi/Bul/bul.component';
import {UyarilarComponent } from './CihazYonetimi/Uyarilar/uyarilar.component';

import { ListeComponent} from './CihazYonetimi/liste/liste.component';
 
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'warning',
      component: TestComponent,
    },
    {
      path: 'bul',
      component: BulComponent,
    },
    {
      path: 'uyarilar',
      component: UyarilarComponent,
    },
    {
      path: 'liste',
      component: ListeComponent,
    },
   
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
