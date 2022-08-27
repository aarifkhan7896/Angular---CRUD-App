import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/students-record/about/about.component';
import { ContactComponent } from './modules/students-record/contact/contact.component';
import { EditComponent } from './modules/students-record/edit/edit.component';
import { HomeComponent } from './modules/students-record/home/home.component';
import { ViewComponent } from './modules/students-record/view/view.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"about",
  component:AboutComponent
},{
  path:"contact",
  component:ContactComponent
},{
  path:"view",
  component:ViewComponent
},{
  path:"edit/:id",
  component:EditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
