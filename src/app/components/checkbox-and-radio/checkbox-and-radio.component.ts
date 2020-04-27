import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-and-radio',
  templateUrl: './checkbox-and-radio.component.html',
  styleUrls: ['./checkbox-and-radio.component.scss']
})
export class CheckboxAndRadioComponent implements OnInit {
  checkBoxValue: string;
  radioValue: string;


  constructor() { }

  ngOnInit(): void {
  }

}
