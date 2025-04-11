import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  nomeUser: string = "";
  login: string = "";
  senha: string = "";

  constructor(private dadoUser: UserService) { }

  entrar(login: string, senha: string) {
    console.log("------" + login + " - " + senha);
    if(this.dadoUser.getEmail() == login && this.dadoUser.getSenha() == senha) {
      this.nomeUser = "Bem vindo(a) " + this.dadoUser.getNome();
    } else {
      this.nomeUser = "Login ou senhas inválidos";
    }
    this.login = "";
    this.senha = "";
  }

  ngOnInit() {
  }

}
