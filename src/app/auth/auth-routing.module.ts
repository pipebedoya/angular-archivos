import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      { path:'login', component:LoginComponent },
      { path:'recuperar-pass', component:ForgotPassComponent },
      { path:'**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
