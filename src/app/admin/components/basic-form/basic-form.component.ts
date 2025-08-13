import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  namefield  = new FormControl('', [Validators.required, Validators.maxLength(10) ]);
  emailfield = new FormControl('');
  phonefield = new FormControl('');
  colorfield = new FormControl('#000000');
  datefield = new FormControl('');
  agefield = new FormControl('');
  categoryfield = new FormControl('category-1');
  tagfield = new FormControl('');
  agreefield = new FormControl(true);
  genderfield = new FormControl('');
  zonefield = new FormControl('');
  constructor() { }
  ngOnInit(): void {
    this.namefield.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  getNameValue(){
    console.log(this.namefield.value);
  }

}
