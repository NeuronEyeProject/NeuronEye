import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { from } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ExpanderComponent } from './expander/expander.component';
import { DomaininfoComponent } from './domaininfo/domaininfo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InformationComponent } from './information/information.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ExpanderComponent,
    DomaininfoComponent,
    NavigationComponent,
    InformationComponent,
 
  ],
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
