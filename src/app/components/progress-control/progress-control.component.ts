import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-control',
  templateUrl: './progress-control.component.html',
  styleUrls: ['./progress-control.component.scss']
})
export class ProgressControlComponent implements OnInit {
  showProgress = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.showProgress = true;
    setTimeout(() => {
      this.showProgress = false;
    }, 2000);
  }
}
