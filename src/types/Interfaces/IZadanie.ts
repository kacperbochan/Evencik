export interface IZadanie{
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;
  wolontariuszeWymagani: number;

  eventId: number;
  przydzieleniId: number[];
}
