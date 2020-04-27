import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(msg: string, action: string) {
    const snackBarRef = this.snackBar.open(msg, action, {duration: 1000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('snackbar has been dismissed!');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('snackbar is doing something');
    });
  }

  createCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 1000});
  }
}

@Component({
  selector: 'app-custom-snackbar',
  template: `<span style="color: orange">Custom SnackBar</span>`
})
export class CustomSnackBarComponent { }
