import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do.component';
const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'todo', component: ToDoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
