import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.scss']
})
export class FormCalcComponent implements OnInit {
  
  public formControl: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  private createForm() {

    this.formControl = this.formBuilder.group({
      date: ['1'],
      membership: ['5'],
    })
  }

}
