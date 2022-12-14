import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  emailUser: string;
  senhaUser: string;

  alertaSolicitacaoCadastro: boolean = false;
  alertaRedefinicaoSenha: boolean = false;
  alertaSenhaIncorreta: boolean = false;
  listaTimeoutsAlertas = [];

  modalRedefinicaoSenha: boolean = false;
  visibilidadeOlho = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private users: UsersService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("usuario")) {
      this.navegacaoTipo();
    }
    if (localStorage.getItem("cadastro")) {
      localStorage.removeItem("cadastro");
      this.abrirModalAlerta(1);
    }
  }

  lembrar() {
    if (
      localStorage.getItem("lembrarSenha") == "0" ||
      !localStorage.getItem("lembrarSenha")
    ) {
      localStorage.setItem("lembrarSenha", "1");
    } else {
      localStorage.setItem("lembrarSenha", "0");
    }
  }

  // Função para redirecionar o usuário para a página de cadastro
  cadastrar() {
    this.router.navigate(["/cadastro"]);
  }

  // Função para abrir o modal de redefinição de senha
  esqueciASenha() {
    this.modalRedefinicaoSenha = true;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
  }

  // Função para trocar a visibilidade da senha
  trocarOlho() {
    let inputSenha = document.querySelector("#inputSenha1") as HTMLInputElement;
    if (this.visibilidadeOlho) {
      inputSenha.type = "password";
    } else {
      inputSenha.type = "text";
    }
    this.visibilidadeOlho = !this.visibilidadeOlho;
  }

  // Função para verificar se o usuário existe e entrar na página principal caso exista
  login() {
    this.users.usuarios.forEach((e) => {
      if (
        (e.email == this.emailUser || e.nome == this.emailUser) &&
        e.senha == this.senhaUser
      ) {
        localStorage.setItem("usuario", e.tipo.toString());
        localStorage.setItem("emailAtual", e.email);
        this.navegacaoTipo();
        return;
      }
    });

    this.abrirModalAlerta(3);
  }

  // Função para direcionar o usuário para a página principal dependendo de sua persona
  navegacaoTipo() {
    if (localStorage.getItem("usuario") == "1") {
      this.router.navigate(["/professor"]);
    } else if (
      localStorage.getItem("usuario") == "2" ||
      localStorage.getItem("usuario") == "3"
    ) {
      this.router.navigate(["/atendente"]);
    } else if (localStorage.getItem("usuario") == "4") {
      this.router.navigate(["/supervisor"]);
    }
  }

  // Função para abrir os modais de alertas de funções efetuadas, criando um timeout de 5 segundos para desaparecer
  // Recebe como parâmetro o número / id do modal que deverá ser aberto
  // Os timeouts são armazenados numa lista
  abrirModalAlerta(numeroModal) {
    switch (numeroModal) {
      case 1:
        this.alertaSolicitacaoCadastro = true;
        this.listaTimeoutsAlertas[0] = setTimeout(() => {
          this.alertaSolicitacaoCadastro = false;
        }, 5000);
        break;
      case 2:
        this.alertaRedefinicaoSenha = true;
        this.listaTimeoutsAlertas[1] = setTimeout(() => {
          this.alertaRedefinicaoSenha = false;
        }, 5000);
        break;
      case 3:
        this.alertaSenhaIncorreta = true;
        this.listaTimeoutsAlertas[2] = setTimeout(() => {
          this.alertaSenhaIncorreta = false;
        }, 5000);
        break;
    }
  }

  // Função para fechar os modais de alerta, limpando os timeouts respectivos para impedir conflitos
  fecharModalAlerta(numeroModal) {
    switch (numeroModal) {
      case 1:
        this.alertaSolicitacaoCadastro = false;
        clearTimeout(this.listaTimeoutsAlertas[0]);
        break;
      case 2:
        this.alertaRedefinicaoSenha = false;
        clearTimeout(this.listaTimeoutsAlertas[1]);
        break;
      case 3:
        this.alertaSenhaIncorreta = false;
        clearTimeout(this.listaTimeoutsAlertas[2]);
        break;
    }
  }

  // Função recebida do "esquecerSenha" para fechar o modal da senha e criar o modal de alerta
  // Recebe como evento um string dizendo se ele fez a redefinição (chamando modal de conclusão) ou saiu no X
  fecharModalSenha(event) {
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "1";
    this.modalRedefinicaoSenha = false;

    if (event == "Finalizado") {
      this.abrirModalAlerta(2);
    }
  }
}
