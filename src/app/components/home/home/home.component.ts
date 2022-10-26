import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { 
    window.addEventListener("scroll", function header() {
      var header = document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 0);})
  }

  ngOnInit(): void {
  }

}
