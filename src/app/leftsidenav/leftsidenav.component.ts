import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'cset', title: 'CSET',  icon:'person', class: '' },
    { path: 'conpca', title: 'CON-PCA',  icon:'content_paste', class: '' },
    { path: 'cyberchamp', title: 'Cyber-Champ',  icon:'library_books', class: '' },
    { path: 'malcom', title: 'Malcom',  icon:'bubble_chart', class: '' },
   
];

@Component({
  selector: 'app-leftsidenav',
  templateUrl: './leftsidenav.component.html',
  styleUrls: ['./leftsidenav.component.css']
})
export class LeftsidenavComponent implements OnInit {
  menuItems: any[]=[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      // if ($(window).width() > 991) {
      //     return false;
      // }
      return true;
  };
}
