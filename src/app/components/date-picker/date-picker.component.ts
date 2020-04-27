import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date();

  // month starts from 0
  maxDate = new Date(2020, 3, 29);

  constructor() { }

  ngOnInit(): void {
  }

  myfilter(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}
