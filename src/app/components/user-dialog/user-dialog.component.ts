import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CrudOperation} from '../../shared/SharedConsts';
import {UserDialogDto} from '../../app.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  Operation = CrudOperation;
  dto: UserDialogDto;

  constructor(
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: UserDialogDto
  ) {
    // temp bad solution
    this.dto = JSON.parse(JSON.stringify(data));
  }

  ngOnInit(): void {
  }

  doAction() {
    this.dialogRef.close(this.dto);
  }

  closeDialog() {
    this.dialogRef.close({});
  }
}
