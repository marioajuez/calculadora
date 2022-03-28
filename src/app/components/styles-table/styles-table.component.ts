import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-table',
  templateUrl: './styles-table.component.html',
  styleUrls: ['./styles-table.component.scss']
})
export class StylesTableComponent implements OnInit {

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

}
