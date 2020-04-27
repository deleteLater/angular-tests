import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  emailFormControl: FormControl;
  value: string;

  commentControl: FormControl;
  commentOptionsObj = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'React Native'},
    {name: 'Vue'},
    {name: 'Vue WHAT'},
  ];
  filteredOptions: Observable<{ name: string }[]>;

  constructor() {
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);

    this.value = 'default';
    this.commentControl = new FormControl();
  }

  ngOnInit(): void {
    this.filteredOptions = this.commentControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        // value can be
        //  a string that user currently input
        //  a selected obj {name: 'input'}
        return this.filter(value.name ?? value);
      })
    );
  }

  displaySelected(selected) {
    return selected ? selected.name : '';
  }

  private filter(input) {
    return this.commentOptionsObj.filter(
      option => option.name.toLowerCase().startsWith(input.toLowerCase())
    );
  }
}
