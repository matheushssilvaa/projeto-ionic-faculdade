import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  nome: string = "Matheus";
  email: string = "matheus@teste.com";
  senha: string = "123456"

  constructor() { }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }

  getSenha(): string {
    return this.senha;
  }

  setNome(n: string){
    this.nome = n;
  }
}
