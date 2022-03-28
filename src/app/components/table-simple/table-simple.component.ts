import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',
  styleUrls: ['./table-simple.component.scss']
})
export class TableSimpleComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
    public viewPort: CdkVirtualScrollViewport;

  public rows: {col1: number, col2: string}[] = [];

  public get inverseOfTranslation(): string {
    if (!this.viewPort || !this.viewPort["_renderedContentOffset"]) {
      return "-0px";
    }
    let offset = this.viewPort["_renderedContentOffset"];
    return `-${offset}px`;
  }

  public ngOnInit() {
    this.rows = [];
    for (let i = 0; i < 10000; ++i) {
      this.rows.push({
        col1: i,
        col2: (Math.random() * 1000).toFixed(0),
      });
    }
  }
}
