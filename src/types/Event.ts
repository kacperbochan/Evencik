import { Zadanie } from "./Zadanie";

export class Event {
  private static amount: number = 0;
  private _indeks: number;
  private _nazwa: string;
  private _dataPoczatek: Date = new Date();
  private _dataKoniec: Date = new Date();
  private _zadania: Zadanie[];

  constructor(nazwa:string = "", poczatek:Date = new Date(0), koniec:Date = new Date(0)){
    this._nazwa = nazwa;
    this._dataPoczatek = poczatek;
    this._dataKoniec = koniec;

    this._zadania = [];
  }

  //#region get/set
  public get indeks() : number{
    return this._indeks;
  }

  public get nazwa() : string {
      return this._nazwa;
  }
  public set nazwa(nazwa:string){
      this._nazwa = nazwa;
  }

  public set czasPoczatek(czas:Date){
      this._dataPoczatek = czas;
  }
  public get czasPoczatek() : Date {
    return this._dataPoczatek;
  }

  public set czasKoniec(czas:Date){
    this._dataKoniec = czas;
  }
  public get czasKoniec() : Date {
    return this._dataKoniec;
  }

  public get zadania() : Zadanie[]{
    return this._zadania;
  }
  public set zadania(zadania:Zadanie[]){
    this.zadania = zadania;
  }
  //#endregion

  public addZadanie(zadanie:Zadanie){
    this._zadania.push(zadanie);
  }
  public removeZadanie(id:number){
    this._zadania.splice(id,1);
  }
}
