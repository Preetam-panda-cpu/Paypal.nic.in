import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainmenuComponent } from './header/mainmenu/mainmenu.component';
import { AuthmenuComponent } from './header/authmenu/authmenu.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaypalworkComponent } from './paypalwork/paypalwork.component';
import { PaypalLeftBlockComponent } from './paypalwork/paypal-left-block/paypal-left-block.component';
import { PaypalRightBlockComponent } from './paypalwork/paypal-right-block/paypal-right-block.component';
import { LinkbarComponent } from './linkbar/linkbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    AuthmenuComponent,
    SliderComponent,
    HomeComponent,
    PagenotfoundComponent,
    PaypalworkComponent,
    PaypalLeftBlockComponent,
    PaypalRightBlockComponent,
    LinkbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

