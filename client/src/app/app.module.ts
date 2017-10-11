import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.modules';
import { BicycleService } from './bicycle.service';
import { User } from './user';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BicycleMarketComponent } from './bicycle-market/bicycle-market.component';
import { ListComponent } from './bicycle-market/list/list.component';
import { UserCycleComponent } from './bicycle-market/user-cycle/user-cycle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BicycleMarketComponent,
    ListComponent,
    UserCycleComponent,
    DashboardComponent,
    CreateComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
