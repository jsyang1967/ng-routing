import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoauthComponent } from './noauth/noauth.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'noauth', pathMatch:'full'},
  {path:'noauth', component:NoauthComponent},
  {path:'auth', component:AuthComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
