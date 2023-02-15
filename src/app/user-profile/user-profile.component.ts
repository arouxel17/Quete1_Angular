import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: "Doe",
    firstName: "John",
    age: 68,
    quote: "Loving is not looking at each other, it's looking together in the same direction",
    photo: "https://images.pexels.com/photos/12666104/pexels-photo-12666104.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  };

  isHidden: boolean = false;

  constructor() {}

  afficherMasquer() {
    this.isHidden = !this.isHidden
  }
}
