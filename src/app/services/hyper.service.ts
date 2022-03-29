import { Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

// import {DataTable} from '../models/hyper';

@Injectable({
  providedIn: 'root'
})
export class HyperService implements OnInit{

  private rebuy;
  private amount;
  private dailyRewards;
  private membershipBalance

  //user data
  private subjectStartMembership =  new Subject<any>();


  constructor(){

    this.getStartMembership().subscribe( resp =>{
      console.log(resp);
    })

  }

  ngOnInit(){
  }

  getStartMembership(): Observable<any> {
    return this.subjectStartMembership.asObservable();
  }

  setStartMembership(newValue): void {
    this.subjectStartMembership.next(newValue);
  }


}
