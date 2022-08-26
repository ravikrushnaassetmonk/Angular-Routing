import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoungComponent } from './component/not-foung/not-foung.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "login",component:LoginComponent},
  {path: "forgot-password",component:ForgotPasswordComponent},
  {path: "", redirectTo:"/login",pathMatch:'full'},
  {path:'admin', canActivate:[AuthGuard], loadChildren:()=> import('./modules/admin/admin.module').then((m) =>m.AdminModule)},
  {path: "**",component:NotFoungComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
