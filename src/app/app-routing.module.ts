import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NavibarComponent}from './navibar/navibar.component';
const routes: Routes = [

  {
    path:'',component:RegistrationComponent}
,
   { path:'login',component:LoginComponent },
   {path:'navibar',component:NavibarComponent},
   {path:'todo',component:ToDoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
