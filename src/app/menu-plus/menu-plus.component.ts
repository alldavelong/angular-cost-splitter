import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-plus',
  templateUrl: './menu-plus.component.html',
  styleUrls: ['./menu-plus.component.css']
})
export class MenuPlusComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  onSelect(){
    this.isDisplay = !this.isDisplay;
  }

}
