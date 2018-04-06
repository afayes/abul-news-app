import {Component, OnInit} from "@angular/core";
import {NewsService} from "../news.service";
import {News} from "../news";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {

  newsItems: News[];

  constructor(private newsService: NewsService,
              private router: Router) {
  }

  ngOnInit() {
    console.log("ngOnInit called");
    this.newsItems = this.newsService.getNewsListing().slice();
  }

  deleteNews(news: News) {
    this.newsService.deleteNewsItem(news);
    this.newsItems = this.newsService.getNewsListing();
    this.router.navigate(["/news/listing"]);
  }
}
