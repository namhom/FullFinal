import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AddSubComponent } from './component/student/add-sub/add-sub.component';
import { ChangeSubComponent } from './component/student/change-sub/change-sub.component';
import { DeleteSubComponent } from './component/student/delete-sub/delete-sub.component';

import { RegisterComponent } from './component/student/register/register.component';
import { ResultSubComponent } from './component/student/result-sub/result-sub.component';
import { TableSubComponent } from './component/student/table-sub/table-sub.component';


const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'addSub', component : AddSubComponent},
  {path : 'changeSub', component : ChangeSubComponent},
  {path : 'deleteSub', component : DeleteSubComponent},
  {path : 'resultSub', component : ResultSubComponent},
  {path : 'tableSub', component : TableSubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
