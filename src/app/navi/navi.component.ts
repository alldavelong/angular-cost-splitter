import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  navLinks = [
    {path: '/balance', label: 'Bilanz'},
    {path: '/journal', label: 'Journal'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
