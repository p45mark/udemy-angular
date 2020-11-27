import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  // styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  userInput = '';
  userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(){
    this.userName = this.userInput;
    this.userInput = ''
  }
}
