import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {CommonModule, NgClass} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true, 
  imports:[RouterOutlet, CommonModule, NgClass, RouterOutlet,RouterLink, RouterLinkActive],
})

export class HeaderComponent {

  // Initialization for ES Users
  showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  
}
