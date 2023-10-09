import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/models/news.model';
import {
  INewsRepository,
  NewsRepository,
} from 'src/app/repositories/news.repository';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  private repository: INewsRepository;
  news: NewsModel;

  constructor(private route: ActivatedRoute) {
    this.repository = NewsRepository.getInstance();
    this.news = new NewsModel();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const param:string | null = params.get('id');
      const id:number = param !== null ? parseInt(param, 0) : 0;

      // recuperando noticia pelo id ou default
      const newsById = this.repository.getNewsById(id)
      this.news = newsById === undefined ? this.news : newsById;
    });
  }
}
