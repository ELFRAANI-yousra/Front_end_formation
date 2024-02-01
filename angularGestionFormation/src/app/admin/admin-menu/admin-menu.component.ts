import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  activeMenuItem: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getActiveRoute();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getActiveRoute();
      });
  }


  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }

  private getActiveRoute(): void {
    const currentRoute = this.router.url;

    if (currentRoute === '/') {
      this.activeMenuItem = 'Home';
    } else if (currentRoute === '/about') {
      this.activeMenuItem = 'About';
    } else if (currentRoute === '/FourmateurExterne') {
      this.activeMenuItem = 'Postuler';
    } else if (currentRoute === '/access/evaluation') {
      this.activeMenuItem = 'Evaluation';
    } else {
      this.activeMenuItem = '';
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); 
  }
}
