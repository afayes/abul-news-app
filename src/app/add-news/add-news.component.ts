import {Component, OnInit, Input} from "@angular/core";
import {NewsService} from "../news.service";
import {Router} from "@angular/router";
import {News} from "../news";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  @Input() news: News;

  constructor(private newsService: NewsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.has("id")) {
      console.log("here1");
      const id = +this.route.snapshot.paramMap.get('id');
      console.log("id " + id);
      this.news = this.newsService.getNews(id);
      console.log(this.news);
    } else {
      console.log("here2");
      this.news = {} as News;
    }
  }

  save() {
    this.newsService.save(this.news);
    this.router.navigate(["/news/listing"]);
  }

}
