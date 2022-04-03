import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { DataTable } from 'src/app/models/hyper';
import { BreakpointObserverService } from 'src/app/services/utils/breakpoint-observer.service';
// import { virtualScrollParams as virtualScroll } from './constants-responvise';


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

export const virtualScrollParams= {
  xs: {
    headerHeight: '30',
    tvsItemSize:  '24'
  },
  sm: {
    headerHeight: '30',
    tvsItemSize:  '24'
  },
  md: {
    headerHeight: '42',
    tvsItemSize:  '48'
  },
  lg: {
    headerHeight: '42',
    tvsItemSize:  '48'
  },
  xl: {
    headerHeight: '42',
    tvsItemSize:  '48'
  }
}


@Component({
  selector: 'table-hyper',
  templateUrl: './table-hyper.component.html',
  styleUrls: ['./table-hyper.component.scss']
})
export class TableHyperComponent implements OnInit {


  @Input() data : DataTable | any = []

  public displayedColumns: string[] = ['day','date','amount','dailyInterest','dailyRewards','rebuy','balance'];

  dataSource = new TableVirtualScrollDataSource();

  public itemSize: {headerHeight:string, tvsItemSize:string};


  constructor(
    private translate: TranslateService,
    private breakpointObserverService:BreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.dataSource = new TableVirtualScrollDataSource(this.data);
    this.breakpointObserverService.size$.subscribe ( size =>{

      this.itemSize= virtualScrollParams[size];
      console.log(size)

    })

  }

}
