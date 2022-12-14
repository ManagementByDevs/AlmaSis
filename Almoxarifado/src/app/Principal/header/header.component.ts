import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nomeUsuario: string;
  emailUsuario: string;

  // ------------- VARIAVEIS DO MODAL EDITAR USER ------------------
  abrirEditar: boolean = false;
  configuracoes: boolean = false;
  trocarOlho1: boolean = false;
  olho1: number = 1;
  trocarOlho2: boolean = false;
  olho2: number = 1;
  // ------------- FIM VARIAVEIS DO MODAL EDITAR USER ------------------

  // ------------- VARIAVEIS DO MODAL CONFIGURAÇÕES ------------------
  // configuracoes: boolean = false;
  fonteAtual: number = 3;
  // ------------- FIM VARIAVEIS DO MODAL CONFIGURAÇÕES ------------------

  // -------- VARIAVEIS DO MODAL USER (DENTRO DO HEADER EM SI) --------
  user: number = 0;
  usuarioTipo: number = 0;
  // ------- FIM VARIAVEIS DO MODAL USER (DENTRO DO HEADER EM SI) ------

  constructor(private router: Router, private service: UsersService) { }

  // *Pega o email e nome do usuario logado
  ngOnInit() {
    this.service.usuarios.forEach((e) => {
      if (localStorage.getItem('emailAtual') == e.email) {
        this.emailUsuario = e.email;
        this.nomeUsuario = e.nome;
      }
    })
    this.usuarioTipo = parseInt(localStorage.getItem('usuario'));
  }

  // *Alguma coisa com o mouse, o resto nn entendi T-T
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    let contagem = 0;
    for (const path of event.path) {
      if(path.className == "modalUser") {
        contagem = 1;
      }
    }
    if(contagem == 0 && event.path[1].id != "usuarioIcone") {
      if (this.user == 1) {
        this.user = 0;
      }
    }
  }

  // -------------- FUNÇÕES DO MODAL EDITAR USER ------------------
  // *Fecha o modal de editar e o de configurações
  fechar() {
    this.abrirEditar = false;
    this.configuracoes = false;
  }

  // *Troca o olho do input de senha
  trocarOlho(input) {
    let input2: HTMLInputElement

    switch (input) {
      case 1:
        input2 = document.querySelector("#inputSenha1");
        if (this.olho1 == 1) {
          this.olho1 = 0;
          this.trocarOlho1 = true;
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          this.trocarOlho1 = false;
          input2.type = 'password';
        }
        break;
      case 2:
        input2 = document.querySelector("#inputSenha2")
        if (this.olho2 == 1) {
          this.olho2 = 0;
          this.trocarOlho2 = true;
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          this.trocarOlho2 = false;
          input2.type = 'password';
        }
        break;
    }
  }

  // *Irá fechar o modal
  salvar() {
    if (this.abrirEditar = true) {
      this.abrirEditar = false;
    }
  }
  // -------------- FIM FUNÇÕES DO MODAL EDITAR USER ------------------

  // ---------------- FUNÇÕES DO MODAL CONFIGURAÇÕES --------------------
  // *Fecha o modal de editar e o de configurações
  // fechar() {
  //   this.abrirEditar = false;
  //   this.configuracoes = false;
  // }

  // *Troca a fonte do site
  salvarConfig() {
    this.configuracoes = false;
    if(this.fonteAtual == 1) {
      document.documentElement.style.setProperty('--font-size--verysmall', '6px');
      document.documentElement.style.setProperty('--font-size--small', '10px');
      document.documentElement.style.setProperty('--font-size--default', '12px');
      document.documentElement.style.setProperty('--font-size--medium', '14px');
      document.documentElement.style.setProperty('--font-size--big', '16px');
      document.documentElement.style.setProperty('--font-size--verybig', '20px');
      document.documentElement.style.setProperty('--font-size--giant', '26px');
      document.documentElement.style.setProperty('--font-size--extreme', '36px');
    }
    if(this.fonteAtual == 2) {
      document.documentElement.style.setProperty('--font-size--verysmall', '8px');
      document.documentElement.style.setProperty('--font-size--small', '12px');
      document.documentElement.style.setProperty('--font-size--default', '14px');
      document.documentElement.style.setProperty('--font-size--medium', '16px');
      document.documentElement.style.setProperty('--font-size--big', '18px');
      document.documentElement.style.setProperty('--font-size--verybig', '22px');
      document.documentElement.style.setProperty('--font-size--giant', '28px');
      document.documentElement.style.setProperty('--font-size--extreme', '38px');
    }
    if(this.fonteAtual == 3) {
      document.documentElement.style.setProperty('--font-size--verysmall', '10px');
      document.documentElement.style.setProperty('--font-size--small', '14px');
      document.documentElement.style.setProperty('--font-size--default', '16px');
      document.documentElement.style.setProperty('--font-size--medium', '18px');
      document.documentElement.style.setProperty('--font-size--big', '20px');
      document.documentElement.style.setProperty('--font-size--verybig', '24px');
      document.documentElement.style.setProperty('--font-size--giant', '30px');
      document.documentElement.style.setProperty('--font-size--extreme', '40px');
    }
    if(this.fonteAtual == 4) {
      document.documentElement.style.setProperty('--font-size--verysmall', '12px');
      document.documentElement.style.setProperty('--font-size--small', '16px');
      document.documentElement.style.setProperty('--font-size--default', '18px');
      document.documentElement.style.setProperty('--font-size--medium', '20px');
      document.documentElement.style.setProperty('--font-size--big', '22px');
      document.documentElement.style.setProperty('--font-size--verybig', '26px');
      document.documentElement.style.setProperty('--font-size--giant', '32px');
      document.documentElement.style.setProperty('--font-size--extreme', '42px');
    }
    if(this.fonteAtual == 5) {
      document.documentElement.style.setProperty('--font-size--verysmall', '14px');
      document.documentElement.style.setProperty('--font-size--small', '18px');
      document.documentElement.style.setProperty('--font-size--default', '20px');
      document.documentElement.style.setProperty('--font-size--medium', '22px');
      document.documentElement.style.setProperty('--font-size--big', '24px');
      document.documentElement.style.setProperty('--font-size--verybig', '28px');
      document.documentElement.style.setProperty('--font-size--giant', '34px');
      document.documentElement.style.setProperty('--font-size--extreme', '44px');
    }
  }
   // ---------------- FIM FUNÇÕES DO MODAL CONFIGURAÇÕES --------------------

  // ----------------------- FUNÇÕES DO HEADER EM SI --------------------------
  // *Irá navegar conforme o usuário que loga
  navegacaoTipo() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else {
      this.router.navigate(['/supervisor'])
    }
  }

  // *Irá navegar para a página de sacolas
  sacolas() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor/sacolas']);
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente/sacolas']);
    } else {
      this.router.navigate(['/supervisor/sacolas'])
    }
  }

  // *Irá abrir o modal do user
  abrirUser() {
    if (this.user == 0) {
      this.user = 1;
    } else {
      this.user = 0;
    }
  }

  // -------------------- FUNÇÕES DO MODAL USER (DENTRO DO HEADER EM SI) ---------------------

  // *Irá abrir o modal de editar
  editarPerfil() {
    this.user = 0;
    if (this.abrirEditar == false) {
      this.abrirEditar = true;
    } else {
      this.abrirEditar = false;
    }
  }

  // *Irá navegar pela rota recebida
  navegar(rota: String) {
    this.router.navigate([rota]);
  }

  // *Irá abrir as configurações
  abrirConfiguracoes() {
    this.configuracoes = !this.configuracoes;
    this.user = 0;
  }

  // *Irá abrir a tela de ajuda
  // abrirAjuda() {
  //   NAO TEM
  // }

  // *Irá deslogar do sistema
  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('emailAtual');
    localStorage.removeItem('lembrarSenha');
    this.navegar('/');
  }
  // ----------------------- FIM DO MODAL USER (DENTRO DO HEADER EM SI) --------------------------

  // ----------------------- FIM FUNÇÕES DO HEADER EM SI --------------------------
}