import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css'],
})
export class TodoitemsComponent implements OnInit {
  constructor() {
    console.log('construter of Todo Module');
  }

  ngOnInit() {}
}
