import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router) {}

  itensMenu = [
    {name: "Login", url: "/login"},
    {name: "Produtos", url: "/produtos"},
    {name: "Clientes", url: "/clientes"},
  ]

  navigateFromPage(url: string): void {
    this.router.navigate([url]);
  }

}