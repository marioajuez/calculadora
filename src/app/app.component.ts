import { Component } from '@angular/core';
import { DataTable } from './models/hyper';
import { HyperService } from './services/hyper.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public dataTable:Array<DataTable>


  constructor(
    public hyperService:HyperService
  ){
    this.hyperService.setStartMembership(300);
  }

  ngOnInit(){

    this.dataTable = Array.from({length: 600}, (v, i) => (
      {
        days: 1,
        date: new Date(),
        amount:0,
        dailyInterest:0,
        dailyRewards:0,
        membershipBalance:0,
        rebuy:0,
        isCheck:true,
        index: 1
    }));

    console.log( this.dataTable);

  
  }
}

