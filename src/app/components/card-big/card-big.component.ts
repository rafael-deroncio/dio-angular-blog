import { Component, Input, OnInit } from '@angular/core';
import { NewsModel } from '../../../app/models/news.model';
import { INewsRepository, NewsRepository } from 'src/app/repositories/news.repository';
import { Formatar } from 'src/app/utils/formatters';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.css']
})
export class CardBigComponent implements OnInit {

  private repository: INewsRepository;
  news:NewsModel = new NewsModel();

  constructor() {
    this.repository = NewsRepository.getInstance();
    this.news = this.repository.getRandomNews();
  }

  ngOnInit(): void {
  }

  formatarData(date: Date): string{
    return Formatar.data(date);
  }
}

