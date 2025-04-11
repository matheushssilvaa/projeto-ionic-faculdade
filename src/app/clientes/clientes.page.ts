import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false
})
export class ClientesPage implements OnInit {

  constructor() { }

  usuarios = [
    {
      nome: "João Silva",
      email: "joao.silva@email.com"
    },
    {
      nome: "Maria Oliveira",
      email: "maria.oliveira@email.com"
    },
    {
      nome: "Pedro Santos",
      email: "pedro.santos@email.com"
    },
    {
      nome: "Ana Costa",
      email: "ana.costa@email.com"
    },
    {
      nome: "Lucas Almeida",
      email: "lucas.almeida@email.com"
    },
    {
      nome: "Fernanda Lima",
      email: "fernanda.lima@email.com"
    },
    {
      nome: "Rafael Pereira",
      email: "rafael.pereira@email.com"
    },
    {
      nome: "Beatriz Souza",
      email: "beatriz.souza@email.com"
    }
  ];

  ngOnInit() {
  }

}
