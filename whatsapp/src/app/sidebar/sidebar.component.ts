import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  logoUrl: string = 'assets/logo.png';
  unreadCount: number = 4; // Example count, bind from service
}
