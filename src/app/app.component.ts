import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataTable } from './models/hyper';
import { HyperService } from './services/hyper.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  // --------- variables to store calculations ------------
  private rebuy;
  private amount;
  private dailyRewards;
  private membershipBalance

  public dataTable:Array<DataTable>;


    langs: string[] = [];

  constructor(
    private translate: TranslateService,
    public hyperService:HyperService

  ){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.addLangs(['en', 'es','fr']);
    console.log(this.langs)
  }

  ngOnInit(){

    this.dataTable = this.createTable();
    this.amount = 300;
    this.membershipBalance = this.amount * 3 - this.amount * 0.005;
    this.dailyRewards =  this.amount * 0.005;
    this.rebuy =parseFloat((this.dailyRewards / 50.0).toString().split('.')[0]) * 50.0;
  
    this.dataTable= this.hyperService.calculate(this.dataTable, {
      days: 1,
      amount: this.amount,
      dailyRewards: this.dailyRewards,
      membershipBalance: this.membershipBalance,
      rebuy:this.rebuy,
      isCheck: false,
      index:-1
    },
    { rebuyAlways:true}
    );
  }

  private createTable(): Array<DataTable>{

      return Array.from({length:600}, (v,i) => (
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
  }


  
}

