import { IZadanie } from "../Interfaces/IZadanie";

export class ZadanieMap implements IZadanie {
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;
  wolontariuszeWymagani: number;
  eventId: number;
  przydzieleniId: number[];

  constructor(zadanie:IZadanie){
    this.nazwa=zadanie.nazwa,
    this.czasPoczatek = zadanie.czasPoczatek,
    this.czasKoniec = zadanie.czasKoniec,
    this.wolontariuszeWymagani = zadanie.wolontariuszeWymagani,
    this.eventId = zadanie.eventId;

    zadanie.przydzieleniId.forEach(x=>this.przydzieleniId.push(x));

  }
}
