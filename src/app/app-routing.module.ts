import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './parent/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { SecritaireComponent } from './secritaire/secritaire.component';
const routes: Routes = [
  {
    path:"",
    component:ParentComponent

  },
  {
    path:"parent",
    component:HomeComponent
  },
  {
    path:"secritaire",
    component:SecritaireComponent
  },
  {path:"admin",
component:AdminComponent},
 {
   path:"login",
   component:AdminloginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
