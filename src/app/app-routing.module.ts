import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import ('./protected/protected.module').then(m=>m.ProtectedModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ] 
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios-admin/usuarios-admin.module').then ( m => m.UsuariosAdminModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ] 
  },
  {
    path:'parameters',
    loadChildren:()  => import ('./parameters/parameters.module').then( m => m.ParametersModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad:[ ValidarTokenGuard ] 
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
