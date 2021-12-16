import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BondingCreateComponent } from './pages/bonding-create/bonding-create.component';
import { BondingReadComponent } from './pages/bonding-read/bonding-read.component';
import { BondingUpdateComponent } from './pages/bonding-update/bonding-update.component';
import { BondingDeleteComponent } from './pages/bonding-delete/bonding-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'bonding-create', component: BondingCreateComponent },
      { path:'bonding-read', component: BondingReadComponent },
      { path:'bonding-update/:id', component: BondingUpdateComponent },
      { path:'bonding-delete/:id', component: BondingDeleteComponent },
      { path:'**', redirectTo:'bonding-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TBondingRoutingModule { }
