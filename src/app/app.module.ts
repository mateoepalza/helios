import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { AppRoutesModule } from './app.routes.module';
import { CampaignItemComponent } from './components/campaign/campaign-item/campaign-item.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CampaignComponent,
    CampaignItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
