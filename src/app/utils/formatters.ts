export class Formatar {
  static data(date: Date): string {
    return date.toLocaleDateString(
      'pt-BR',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
  }
}
