export class NewsModel {
  id: number;
  photoCover: string;
  titleCard: string;
  textCard: string;
  date: Date;

  constructor(
    id: number = 0,
    photoCover: string = 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg',
    titleCard: string = 'undefined',
    textCard: string = 'undefined',
    date: Date = new Date
  ) {
    this.id = id;
    this.photoCover = photoCover;
    this.titleCard = titleCard;
    this.textCard = textCard;
    this.date = date;
  }
}
