export class Zadanie {
  private static amount: number = 0;
  private _indeks: number;
  private _nazwa: string;
  private _czasPoczatek: Date = new Date();
  private _czasKoniec: Date = new Date();
  private _wolontariuszeObecni: number;
  private _wolontariuszeWymagani: number;

  constructor(nazwa:string, wymagani:number=-1, obecni:number=-1){
      this._indeks = Zadanie.amount++;
      this._nazwa = nazwa;
      this._czasPoczatek.setDate(this._czasPoczatek.getDate()+Math.random()*100%50);
      this._czasKoniec.setDate(this._czasPoczatek.getDate()+Math.random()*10%3);
      this._wolontariuszeWymagani = (wymagani>0)?wymagani:Math.floor(Math.random()*10%10);
      this._wolontariuszeObecni = (obecni>0)?obecni:Math.floor(Math.random()*100%this._wolontariuszeWymagani);

  }

  public get indeks() : number{
    return this._indeks;
  }

  public get nazwa() : string {
      return this._nazwa;
  }

  public set nazwa(nazwa:string){
      this._nazwa = nazwa;
  }


  public set wolontariuszeObecni(obecni:number){
    this._wolontariuszeObecni = obecni;
  }

  public get wolontariuszeObecni() : number {
    return this._wolontariuszeObecni;
  }

  public set wolontariuszeWymagani(wymagani:number){
    this._wolontariuszeWymagani = wymagani;
  }

  public get wolontariuszeWymagani() : number {
    return this._wolontariuszeWymagani;
  }

  public set czasPoczatek(czas:Date){
      this._czasPoczatek = czas;
  }
  public get czasPoczatek() : Date {
    return this._czasPoczatek;
  }

  public set czasKoniec(czas:Date){
    this._czasKoniec = czas;
  }
  public get czasKoniec() : Date {
    return this._czasKoniec;
  }

}
