import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeContentComponent } from './home-content/home-content.component';
const routes: Routes = [
  {
    path: '',
    component: HomeContentComponent
  },
  {
    path: 'admin' ,
    component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
