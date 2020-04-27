import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  webTechnology = [
    {name: 'angular'},
    {name: 'react'},
    {name: 'vue'}
  ];
  mobileTechnology = [
    {name: 'ionic'},
    {name: 'react-native'},
  ];
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

}
