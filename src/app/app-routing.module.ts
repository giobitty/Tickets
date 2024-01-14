import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { MostreComponent } from './mostre/mostre/mostre.component';
import { VisitatoreComponent } from './visitatore/visitatore/visitatore.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title:'Login',},
  {path: 'mostre', component: MostreComponent, title:'Mostre',},
  {path: 'visitatore', component: VisitatoreComponent, title:'Visitatore',},
  {path: '', redirectTo: 'login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
