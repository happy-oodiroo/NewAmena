import { Component } from '@angular/core';
export interface card {
  src: string;
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards : card[]= [
    {src:"./assets/icon1.svg", title:"الرخص والشهادات "},
    {src:"./assets/icon2.svg", title:"المشهد الحضري"},
    {src:"./assets/icon1.svg", title:"المنح والعقارات"},
    {src:"./assets/icon1.svg", title:"بلاغات وشكاوي 940"},
    {src:"./assets/icon1.svg", title:"الإستعلامات"},
  ]
}
