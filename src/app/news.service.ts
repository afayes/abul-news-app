import {Injectable} from "@angular/core";
import {News} from "./news";

@Injectable()
export class NewsService {

  newsItems: News[] = [];

  constructor() {
  }

  getNewsListing(): News[] {
    return this.newsItems;
  }

  getNews(id: number):News {
    for (let i = 0; i < this.newsItems.length; i++) {
      if (this.newsItems[i].id === id) {
        console.log('found news item with id ' + id);
        return this.newsItems[i];
      }
    }
  }

  save(news: News) {
    console.log("id type" + typeof news.id);
    if (typeof news.id !== "undefined") {
      this.updateNews(news);
    } else {
      news.id = this.newsItems.length;
      this.newsItems.push(news);
    }
  }

  private updateNews(news: News) {
    for (var i = 0; i < this.newsItems.length; i++) {
      if (this.newsItems[i].id == news.id) {
        this.newsItems[i] = news;
      }
    }
  }

  deleteNewsItem(news: News) {
    for (var i = 0; i < this.newsItems.length; i++) {
      if (this.newsItems[i].id == news.id) {
        this.newsItems.splice(i, 1);
        return;
      }
    }
  }
}
