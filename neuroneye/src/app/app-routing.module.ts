import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UrlscannerComponent } from './urlscanner/urlscanner.component';
import { DangersiteComponent } from './dangersite/dangersite.component';
import { GoodsiteComponent } from './goodsite/goodsite.component';
import { dangerouslyDisableDefaultSrc } from 'helmet/dist/middlewares/content-security-policy';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'domainsearch', component: UrlscannerComponent},
{ path: 'dangersite', component: DangersiteComponent},
{ path: 'goodsite', component: GoodsiteComponent},
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
