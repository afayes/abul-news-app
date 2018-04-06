import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import {NewsService} from "./news.service";
import { AddNewsComponent } from './add-news/add-news.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NewsListingComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
