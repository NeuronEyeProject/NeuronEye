import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpanderComponent } from './expander/expander.component'
import { DomaininfoComponent } from './domaininfo/domaininfo.component';
import { dangerouslyDisableDefaultSrc } from 'helmet/dist/middlewares/content-security-policy';
import { InformationComponent } from './information/information.component';
import { MyipComponent } from './myip/myip.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'expander', component: ExpanderComponent},
{ path: 'domaintools', component: DomaininfoComponent},
{ path: 'information', component: InformationComponent },
{ path: 'myip', component: MyipComponent },
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
