import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { IndexComponent } from './home/index.component';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
// import { AllCatalogComponent } from './employee/create-employee.component';
// import { ListEmployeeComponent } from './employee/list-employee.component';
// import { IndexComponent } from './home/index.component';
// import { CreateEmployeeComponent } from './employee/create-employee.component';
// import { ListEmployeeComponent } from './employee/list-employee.component';
// import { IndexComponent } from './home/index.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  // {path:'list', component: ListEmployeeComponent},
  // {path:'create', component: CreateEmployeeComponent},
  {path:'all-catalog-list', component: CreateEmployeeComponent},
  {path:'women-catalog-list', component: CreateEmployeeComponent},
  {path:'knitwear-catalog-list', component: CreateEmployeeComponent},
  {path:'dresses-catalog-list', component: CreateEmployeeComponent},
  {path:'bags-catalog-list', component: CreateEmployeeComponent},
  {path:'shoulder-bags-catalog-list', component: CreateEmployeeComponent},
  {path:'falabella-catalog-list', component: CreateEmployeeComponent},
  {path:'becks-catalog-list', component: CreateEmployeeComponent},
  {path:'clutches-catalog-list', component: CreateEmployeeComponent},
  {path:'falabella-catalog-list', component: CreateEmployeeComponent},
  {path:'becks-catalog-list', component: CreateEmployeeComponent},
  {path:'clutches-catalog-list', component: CreateEmployeeComponent},
  //{path:'', redirectTo:'/list', pathMatch:'full'}
  {path:'', redirectTo:'/index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
