import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SalaEditComponent } from './sala/sala-edit/sala-edit.component';
import { SalaComponent } from './sala/sala.component';
import { TorneoComponent } from './torneo/torneo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sala', component: SalaComponent, 
    canActivateChild: [AuthGuard],
    children: [
      {path: 'edit', component: SalaEditComponent}
  ]},
  {path: 'torneo', component: TorneoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
