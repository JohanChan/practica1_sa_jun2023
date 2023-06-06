import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { SoapComponent } from './components/soap/soap.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'soap',
    component: SoapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
