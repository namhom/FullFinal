import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './component/sidenav/sidenav.component';
import { NbThemeModule } from '@nebular/theme';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { RegisterComponent } from './component/student/register/register.component';
import { AddSubComponent } from './component/student/add-sub/add-sub.component';
import { ChangeSubComponent } from './component/student/change-sub/change-sub.component';
import { DeleteSubComponent } from './component/student/delete-sub/delete-sub.component';
import { TableSubComponent } from './component/student/table-sub/table-sub.component';
import { ResultSubComponent } from './component/student/result-sub/result-sub.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RegisterComponent,
    AddSubComponent,
    ChangeSubComponent,
    DeleteSubComponent,
    TableSubComponent,
    ResultSubComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
