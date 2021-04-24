import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UrlscannerComponent } from './urlscanner/urlscanner.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'urlscanner', component: UrlscannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
