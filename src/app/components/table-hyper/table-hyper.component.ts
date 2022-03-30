import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { DataTable } from 'src/app/models/hyper';

// const DATA = Array.from({length: 1000}, (v, i) => ({
//   // id: i + 1,
//   // name: `   #${i + 1}`,
//   // name_3: ` #${i + 1}`,
//   // name_4: ` #${i + 1}`,
//   // name_5: ` #${i + 1}`,
//   // name_6: ` #${i + 1}`,

// }));

const DATA:Array<DataTable> = Array.from({length:600}, (v,i) => (
  {
    days: i + 1,
    date: new Date().setDate(
      new Date().getDate() + i),
    amount:null,
    dailyInterest:null,
    dailyRewards:null,
    membershipBalance:null,
    rebuy:null,
    isCheck:true,
    index: i 
}));


@Component({
  selector: 'table-hyper',
  templateUrl: './table-hyper.component.html',
  styleUrls: ['./table-hyper.component.scss']
})
export class TableHyperComponent implements OnInit {


  @Input() data : DataTable | any = []

  public displayedColumns: string[] = ['day','date','amount','dailyInterest','dailyRewards','rebuy','balance'];

  dataSource = new TableVirtualScrollDataSource();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new TableVirtualScrollDataSource(DATA);

    // this.dataSource = new TableVirtualScrollDataSource(DATA);

    console.log(this.data);
  }
}
