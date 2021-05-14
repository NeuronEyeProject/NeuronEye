import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UrlscannerComponent } from './urlscanner/urlscanner.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'urlsearch', component: UrlscannerComponent},
{ path: 'contact', component: ContactComponent},
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
