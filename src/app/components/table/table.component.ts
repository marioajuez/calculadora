import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

const DATA_ = Array.from({length: 1000}, (v, i) => ({
  days: i + 1,
  date: new Date(),
  amount: i + 1,
  dailyInterest:i + 1,
  dailyRewards: i + 1,
  rebuy: i + 1,
  balance: i + 1,
  membershipBalance: i + 1
  
}));

const DATA = Array.from({length: 1000}, (v, i) => ({
  id: i + 1,
  name: `   #${i + 1}`,
  name_3: ` #${i + 1}`,
  name_4: ` #${i + 1}`,
  name_5: ` #${i + 1}`,
  name_6: ` #${i + 1}`,

}));

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
    public viewPort: CdkVirtualScrollViewport;

  public displayedColumns = ['id', 'name', '3', '4', '5','6','7'];

  public headerColumns = [  { name:'id',  label: 'day', text: 'Element #', styles:''},
                            { name:'name', label: 'date' , text: 'Element #', styles: ''},
                            { name:'name', label: 'amount', text: '`Element #', styles: ''},
                            { name:'name', label: 'dailyInterest', text: 'Element #', styles: ''},
                            { name:'name', label: 'dailyRewards', text: 'Element #', styles: ''},
                            { name:'name', label: 'rebuy', text: 'Element #' , styles: ''},
                            { name:'name', label: 'balance', text: 'Element #' ,styles: ''}];

  
  public displayedColumns_: string[] = ['day','date','amount','dailyInterest','dailyRewards','rebuy','balance'];

  dataSource = new TableVirtualScrollDataSource(DATA);
  dataSource_ = new TableVirtualScrollDataSource(DATA_);


  constructor() { }

  public rows: {col1: number, col2: string}[] = [];

  public ngOnInit() {
    this.rows = [];
    for (let i = 0; i < 10000; ++i) {
      this.rows.push({
        col1: i,
        col2: (Math.random() * 1000).toFixed(0),
      });
    }
  }
  
  public get inverseOfTranslation(): string {
    if (!this.viewPort || !this.viewPort["_renderedContentOffset"]) {
      return "-0px";
    }
    let offset = this.viewPort["_renderedContentOffset"];
    return `-${offset}px`;
  }

  

  

}
