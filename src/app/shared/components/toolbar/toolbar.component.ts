import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MenuItem } from 'primeng/api';
import { User } from '../../../interfaces/user';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Recommended',
        icon: 'pi pi-fw pi-home',
        routerLink: '/dashboard/recommended',
      },
      {
        label: 'My Profile',
        icon: 'pi pi-fw pi-user',
        routerLink: '/dashboard/profile',
      },
    ];
  }

  logout() {
    this.authService.logout();
  }
}
