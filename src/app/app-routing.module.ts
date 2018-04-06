import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from 'news-listing/news-listing.component';
import {NewsListingComponent} from "./news-listing/news-listing.component";
import {AddNewsComponent} from "./add-news/add-news.component";

const routes: Routes = [
  { path: '', redirectTo: 'news/listing', pathMatch: 'full' },
  { path: 'news/listing', component: NewsListingComponent},
  { path: 'news/add', component: AddNewsComponent},
  { path: 'news/:id', component: AddNewsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
