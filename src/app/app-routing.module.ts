import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'
import { TodolistComponent } from './todolist/todolist.component'

const routes: Routes = [
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-todolist', component: TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
