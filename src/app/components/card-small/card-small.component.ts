import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/models/news.model';
import { INewsRepository, NewsRepository } from 'src/app/repositories/news.repository';
import { Formatar } from 'src/app/utils/formatters';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent implements OnInit {

  private repository: INewsRepository;
  news:NewsModel = new NewsModel();

  constructor() {
    this.repository = new NewsRepository();
    this.news = this.repository.getRandomNews();
  }

  ngOnInit(): void {
  }

  formatarData(date: Date): string{
    return Formatar.data(date);
  }

}
