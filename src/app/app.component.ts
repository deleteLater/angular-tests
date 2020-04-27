import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from './components/user-dialog/user-dialog.component';
import {CrudOperation} from './shared/SharedConsts';

export interface User {
  id: number;
  name: string;
}

export interface UserDialogDto {
  user: User;
  action: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Operation = CrudOperation;
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(private dialog: MatDialog) {
  }

  openDialog(action: CrudOperation, user: User | {}) {

    const dialogRef = this.dialog.open(UserDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '300px',
      data: {user, action: action.toString()}
    });

    dialogRef.afterClosed().subscribe(result => {
      const dto = result as UserDialogDto;

      switch (dto.action as CrudOperation) {
        case this.Operation.Create:
          this.addUser(dto.user.name);
          break;
        case this.Operation.Update:
          this.updateUser(dto.user);
          break;
        case this.Operation.Delete:
          this.deleteUser(dto.user.id);
          break;
        default:
          break;
      }

      this.table.renderRows();

      console.log(this.dataSource);
    });
  }

  addUser(name) {
    this.dataSource.push({
      id: new Date().getTime(),
      name
    });
  }

  updateUser(user) {
    const oldValueIndex = this.dataSource.findIndex(x => x.id === user.id);

    if (oldValueIndex === -1) {
      console.log('update failed! value not exists!');
      return;
    }

    this.dataSource.splice(oldValueIndex, 1, user);
  }

  deleteUser(id) {
    this.dataSource = this.dataSource.filter(row => row.id !== id);
  }
}
