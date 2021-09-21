import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentComponent } from './component/student/student.component';
import { PhotosComponent } from './component/photos/photos.component';

import { LoaderInterceptor } from './interceptor/loader';
import { LoaderComponent } from './layout/loader/loader.component';
const appRoute:Routes=[
  {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:'photos',component:PhotosComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoaderComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
