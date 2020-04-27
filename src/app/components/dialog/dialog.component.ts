import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ExampleDialogComponent} from '../example-dialog/example-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialog = this.dialog.open(ExampleDialogComponent,
      {
        disableClose: true,
        data: {name: 'wtf'},
        height: '400px',
        width: '300px'
      });

    dialog.afterClosed().subscribe(result => {
      console.log(`result is ${result}`);
    });
  }
}
