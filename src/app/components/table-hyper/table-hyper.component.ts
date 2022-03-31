import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { DataTable } from 'src/app/models/hyper';
import { BreakpointObserverService } from 'src/app/services/utils/breakpoint-observer.service';


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

  virtualScrollItemSize= {
    xs: '22',
    sm: '50',
    md: '60',
    lg: '70',
    xl: '70'
  }

  itemSize:string;

  constructor(
    private translate: TranslateService,
    private breakpointObserverService:BreakpointObserverService
  ) {}

  ngOnInit(): void {
    this.dataSource = new TableVirtualScrollDataSource(this.data);
    this.breakpointObserverService.size$.subscribe ( size =>{

      this.itemSize = this.virtualScrollItemSize[size];

      // console.log(this.virtualScrollItemSize[size]);
    })

  }

}
