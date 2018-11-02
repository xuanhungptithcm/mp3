import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent implements OnInit {

  constructor() { }
  user1: Boolean = false;
  ngOnInit() {
  }
  block_User() {
    this.user1 = !this.user1;
  }
}
