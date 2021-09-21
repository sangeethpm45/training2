import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    path:'',
    component:FrontPageComponent
  },
  {
    path:'farm-details',
    component:FarmDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
