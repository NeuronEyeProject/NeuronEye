import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpanderComponent } from './expander/expander.component'
import { DomaininfoComponent } from './domaininfo/domaininfo.component';
import { dangerouslyDisableDefaultSrc } from 'helmet/dist/middlewares/content-security-policy';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'expander', component: ExpanderComponent},
{ path: 'domaininfo', component: DomaininfoComponent},
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
