import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: false
})
export class ProdutosPage implements OnInit {

  constructor(private route: Router) { }

  produtos = [
    {
      nome: "Hambúrguer Clássico",
      preco: 25.90,
      descricao: "Hambúrguer de carne bovina 150g, queijo cheddar, alface, tomate e maionese especial",
      categoria: "Lanches",
      imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      nome: "Pizza Margherita",
      preco: 42.00,
      descricao: "Molho de tomate artesanal, muçarela de búfala e manjericão fresco",
      categoria: "Pizzas",
      imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Batata Frita",
      preco: 15.50,
      descricao: "Porção de 300g de batatas crocantes com tempero especial",
      categoria: "Acompanhamentos",
      imagem: "https://images.unsplash.com/photo-1623610934157-0fcb6d50e90f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Salmão Grelhado",
      preco: 58.90,
      descricao: "Filé de salmão grelhado com ervas, acompanhado de legumes salteados",
      categoria: "Pratos Principais",
      imagem: "https://plus.unsplash.com/premium_photo-1664472670740-76504463a146?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Coca-Cola 350ml",
      preco: 6.50,
      descricao: "Refrigerante lata restaurante Faustino",
      categoria: "Bebidas",
      imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Torta de Chocolate",
      preco: 18.90,
      descricao: "Torta cremosa de chocolate belga com cobertura de ganache",
      categoria: "Sobremesas",
      imagem: "https://images.unsplash.com/photo-1629716266949-39bcbeae9d1e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Espaguete Carbonara",
      preco: 38.00,
      descricao: "Massa artesanal com molho de parmesão, pancetta e gema de ovo",
      categoria: "Massas",
      imagem: "https://plus.unsplash.com/premium_photo-1691948106030-d5e76d461b14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nome: "Suco de Laranja Natural",
      preco: 12.00,
      descricao: "Suco fresco 300ml, feito na hora",
      categoria: "Bebidas",
      imagem: "https://images.unsplash.com/photo-1613478223719-2ab802602423"
    }
  ];

  limitarCaracteres(texto: string, limite: number): string {
    if (texto.length <= limite) {
      return texto;
    }
    return texto.substring(0, limite) + '...';
  }

  navegarParaProdutoIndividual(nomeProduto: string): void {
    var routeUrl = `localhost:8100/produto/${nomeProduto}`
    this.route.navigate([routeUrl]);
    console.log(routeUrl);
  }

  ngOnInit() {
  }

}
