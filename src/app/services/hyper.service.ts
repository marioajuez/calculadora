import { Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { DataTable } from '../models/hyper';

enum CONSTANTS {
  // No = 0,
  // Yes = 1,
}

@Injectable({
  providedIn: 'root'
})
export class HyperService {

  //user data
  private subjectStartMembership = new Subject<any>();

  constructor() {
  }

  public calculate(
    table: Array<DataTable>,
    data: DataTable,
    { rebuyNever = false, rebuyAlways = false }
  ) {

    for (let i = data.index + 1; i < table.length; i++) {
        table[i] = this.updateTable(table[i], data);
        data = this.makeCalculates(data);
    }
    return table;
  }

  private updateTable(table: DataTable, data: DataTable) {
    table.amount = data.amount;
    table.dailyInterest = data.amount * 0.005;
    table.dailyRewards = data.dailyRewards;
    table.rebuy = data.rebuy;
    table.membershipBalance = data.membershipBalance;
    table.isCheck = data.isCheck;
    return table;
  }

  private makeCalculates(data: DataTable) {

    if (data.dailyRewards >= 50) {

      data.amount += data.rebuy;
      data.membershipBalance += data.rebuy * 3 - data.amount * 0.005;
      data.dailyRewards -= data.rebuy;
    }
    else data.membershipBalance += data.rebuy * 3 - data.amount * 0.005; // Recompensas en Saldo en ejecución

    data.dailyRewards += data.amount * 0.005; // Saldo Diario de las recompensas
    data.rebuy = parseFloat((data.dailyRewards / 50.0).toString().split('.')[0]) * 50.0; // se obtiene el valor de la recompra

    return data;
  }

  public getStartMembership(): Observable<any> {
    return this.subjectStartMembership.asObservable();
  }

  public setStartMembership(newValue): void {
    this.subjectStartMembership.next(newValue);
  }

}
