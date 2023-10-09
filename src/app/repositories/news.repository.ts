import { NewsModel } from "../models/news.model";

/**
 * Interface para um repositório de notícias.
 */
export interface INewsRepository {
  /**
   * Obtém todas as notícias disponíveis no repositório.
   * @returns Um array de objetos NewsModel representando todas as notícias.
   */
  getAllNews(): NewsModel[];

  /**
   * Obtém uma notícia pelo seu ID.
   * @param id - O ID da notícia a ser recuperada.
   * @returns Um objeto NewsModel correspondente ao ID fornecido, ou undefined se a notícia não for encontrada.
   */
  getNewsById(id: number): NewsModel | undefined;

  /**
   * Obtém uma notícia aleatória do repositório.
   * @returns Um objeto NewsModel representando uma notícia aleatória.
   */
  getRandomNews(): NewsModel;
}

export  class NewsRepository implements INewsRepository {
  private static instance: NewsRepository | null = null; // Variável estática para armazenar a única instância
  private newsData: NewsModel[] = [];

  private constructor() {
    this.startNews();
  }

  public static getInstance(): NewsRepository {
    if (NewsRepository.instance === null) {
      NewsRepository.instance = new NewsRepository();
    }
    return NewsRepository.instance;
  }

  getAllNews(): NewsModel[] {
    return this.newsData;
  }

  getNewsById(id: number): NewsModel | undefined {
    return this.newsData.find((news) => news.id === id);
  }

  getRandomNews(): NewsModel {
    const randomIndex = Math.floor(Math.random() * this.newsData.length);
    return this.newsData[randomIndex];
  }

  private startNews(): void {
    this.newsData = [
      new NewsModel(
        1,
        'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/angular-13.png',
        'Lançamento do Angular 13',
        'O Angular 13 foi lançado com melhorias de desempenho e recursos incríveis.',
        new Date('2023-10-01')
      ),
      new NewsModel(
        2,
        'https://bizflyportal.mediacdn.vn/bizflyportal/images/ang16145638173866.jpg',
        'Dicas para otimizar seu aplicativo Angular',
        'Aprenda a otimizar seu aplicativo Angular para melhor desempenho e escalabilidade.',
        new Date('2023-09-25')
      ),
      new NewsModel(
        3,
        'https://hermes.dio.me/articles/cover/cd4d72e3-fb1d-4358-a193-21669e48867f.jpg',
        'Angular vs. React: Qual é o melhor?',
        'Uma comparação detalhada entre Angular e React para ajudá-lo a escolher o melhor para seu projeto.',
        new Date('2023-09-20')
      ),
      new NewsModel(
        4,
        'https://code.visualstudio.com/assets/docs/nodejs/angular/bracket-matching.png',
        'Como criar componentes reutilizáveis no Angular',
        'Aprenda a criar componentes Angular reutilizáveis e mantenha seu código limpo e organizado.',
        new Date('2023-09-15')
      ),
      new NewsModel(
        5,
        'https://www.rlogical.com/wp-content/uploads/2023/03/Angular-CLI.webp',
        'Angular CLI: Dicas e truques',
        'Descubra dicas e truques para aproveitar ao máximo o Angular CLI em seu desenvolvimento.',
        new Date('2023-09-10')
      ),
      new NewsModel(
        6,
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tjHPRoTbmmVDrSW3.jpg',
        'Novos recursos no Angular Router',
        'Saiba mais sobre os novos recursos e aprimoramentos no Angular Router na última versão.',
        new Date('2023-09-05')
      ),
      new NewsModel(
        7,
        'https://malcoded.com/static/8c48d4c4bb8b1f2793fa9c6536dae7c6/685a2/angular-reactive-forms-tutorial.webp',
        'Angular Forms: Melhores práticas',
        'Siga as melhores práticas ao usar formulários no Angular para criar experiências de usuário excepcionais.',
        new Date('2023-08-28')
      ),
      new NewsModel(
        8,
        'https://i.ytimg.com/vi/UNkqooT1x8E/maxresdefault.jpg',
        'Integração Angular com APIs REST',
        'Aprenda a integrar seu aplicativo Angular com APIs REST para buscar e enviar dados de forma eficaz.',
        new Date('2023-08-20')
      ),
      new NewsModel(
        9,
        'https://i.ytimg.com/vi/BumgayeUC08/maxresdefault.jpg',
        'Angular Testing: Guia para iniciantes',
        'Inicie com testes unitários e de integração no Angular para garantir a qualidade do seu código.',
        new Date('2023-08-15')
      ),
      new NewsModel(
        10,
        'https://www.syncfusion.com/blogs/wp-content/uploads/2019/10/blog_1x-1.jpg',
        'Angular Security: Melhores práticas',
        'Proteja seu aplicativo Angular seguindo as melhores práticas de segurança durante o desenvolvimento.',
        new Date('2023-08-10')
      ),
    ];
  }
}
