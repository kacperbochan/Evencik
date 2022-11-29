import { IZadanie } from "../Interfaces/IZadanie";

export class ZadanieMap implements IZadanie {
  nazwa: string;
  czasPoczatek: Date;
  czasKoniec: Date;
  wolontariuszeWymagani: number;
  wolontariuszeObecni: number;

  constructor(zadanie:IZadanie){
    this.nazwa=zadanie.nazwa,
    this.czasPoczatek = zadanie.czasPoczatek,
    this.czasKoniec = zadanie.czasKoniec,
    this.wolontariuszeWymagani = zadanie.wolontariuszeWymagani,
    this.wolontariuszeObecni = zadanie.wolontariuszeObecni
  }
}
