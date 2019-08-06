import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user : any;
  choice(value){
    this.user=value;
  };

  cards = [
    {
      title: 'Location : Hill',
      description: 'A hill is a landform',
      img: 'assets/img/example.jpg'
    },
    {
      title: 'Location : Ocean',
      description: 'Body of water',
      img: 'assets/img/ocean.jpg'
    },
    {
      title: 'Location : Desert',
      description: 'Land of Sand',
      img : 'assets/img/desert1.jpg'
    }
  ];

switch:any;
change(value){
this.switch=value;
}
  
case = {
  Praveen : [
    'Name : Praveen',
    'Age : 22',
    'Gender : Male',
    'DOB : 01-01-01'
 ],
  RL : [
    'Name : RL',
    'Age : 22',
    'Gender : Male',
    'DOB : 01-01-01'
  ],
  Naveen : [
    'Name : Naveen',
    'Age : 22',
    'Gender : Male',
    'DOB : 01-01-01'
  ],
  Kumar : [
    'Name : Kumar',
    'Age : 22',
    'Gender : Male',
    'DOB : 01-01-01'
  ]
}
}
