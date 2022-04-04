import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  langs: string[] = [];


  constructor(
    private translate: TranslateService,
  ){}

  ngOnInit(): void {
    this.langs = this.translate.getLangs()
  }

}
