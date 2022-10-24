import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens = service.itens;
    this.localizacoesLista = service.localizacoes;
    this.localizacoesFiltradas = this.localizacoesLista;
    this.tipoUsuario = parseInt(localStorage.getItem("usuario") || "0");
  }

  listaOrdenacoes = [false, false, false, false];
  listaItens: any = [];
  
  listaEmBloco = true;
  abaItensAberta = false;

  inputGeral = "";
  tipoUsuario = 2;
  reserva = true;
  aparecerConfirmacao = 0;
  nomeLoc: any;
  modalClassificacao = 0;
  inputClassificacao = 0;
  numResultados = 0;

  indexExcluir: number = 0;

  ngOnInit() {
    let div;

    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.onclick = function (event) {
      if (!(event.target as HTMLElement).className.includes("parteModal")) {
        if (!(event.target as HTMLElement).className.includes("iconsModais")) {
          if (self.modalOrdenar) {
            self.modalOrdenar = false;
          }
        }
      }
    }

    setTimeout(() => {
      switch (this.tipoUsuario) {
        case 2:
          this.devolucoes = 1;
          div = document.querySelector("#devolucoes") as HTMLElement;
          div.className = "comAzul";
          break;
        case 3:
          this.devolucoes = 1;
          div = document.querySelector("#devolucoes") as HTMLElement;
          div.className = "comAzul";
          break;
        case 4:
          this.gerenciaUsuarios = 1;
          div = document.getElementById("gerenciarUsuarios") as HTMLElement;
          div.className = "comAzul";
          break;
      }
    }, 10);
  }

  localizacaoAtual = "paredeCentro";
  localizacoesFiltradas: any = [];
  localizacoesLista: any = [];
  listaClassificacao = [{ nome: "Nome classificacao" }];

  contadorRecusar = 0;
  contadorAceitar = 0;
  gerenciaUsuarios = 0;
  gerenciaCadastros = 0;
  devolucoes = 0;
  retirada = 0;
  contLocalizacoes = 0;

  localizacoesItem = 1;

  cadastrarModal = false;
  aparecer = false;
  localizacaoModal = false;
  removerDevolucaoModal = false;

  informarDefeitoModal: boolean = false;
  devolucaoModal: boolean = false;
  modalOrdenar: boolean = false;
  ajuda: boolean = true;

  modalRecusar() {
    document.documentElement.style.overflow = "hidden";
    this.contadorRecusar = 1;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
  }

  modalAceitar() {
    document.documentElement.style.overflow = "hidden";
    this.contadorAceitar = 1;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "0.5";
  }

  cadastrarProduto() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.inputClassificacao = 0;
  }

  botaoConfirmarRetirada() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  abrirDevolucao(numero: number) {
    document.documentElement.style.overflow = "hidden";
    this.devolucaoModal = true;
    this.aparecer = true;
  }

  fecharModalBaixaDevolucao() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  darBaixaDevolucao() {
    document.documentElement.style.overflow = "auto";
    this.devolucaoModal = false;
    this.aparecer = false;
  }

  cancelar() {
    document.documentElement.style.overflow = "auto";
    this.contadorRecusar = 0;
    this.contadorAceitar = 0;
    let divPrincipal = document.querySelector(".divPrincipal") as HTMLElement;
    divPrincipal.style.opacity = "1";
    this.aparecerConfirmacao = 0;
  }

  btnRecusar() {
    document.documentElement.style.overflow = "auto";
  }

  gerenciarCadastros() {
    this.gerenciaCadastros = 1;
    this.gerenciaUsuarios = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.abaItensAberta = false;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul5 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul5.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }
    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let comAzul = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      comAzul.className = "comAzul";
    }
  }

  gerenciarUsuarios() {
    this.gerenciaUsuarios = 1;
    this.gerenciaCadastros = 0;
    this.devolucoes = 0;
    this.retirada = 0;
    this.abaItensAberta = false;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul5 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul5.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let comAzul = document.querySelector("#gerenciarUsuarios") as HTMLElement;
      comAzul.className = "comAzul";
    }
  }

  baixaDevolucoes() {
    this.devolucoes = 1;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.retirada = 0;
    this.abaItensAberta = false;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#retirada") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#devolucoes") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  confirmarRetirada() {
    this.retirada = 1;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.abaItensAberta = false;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#listaItens") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#retirada") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  listaDeItens() {
    this.abaItensAberta = true;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;
    this.contLocalizacoes = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#retirada") as HTMLElement;
    semAzul2.className = "semAzul";
    let comAzul = document.querySelector("#listaItens") as HTMLElement;
    comAzul.className = "comAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let semAzul3 = document.querySelector("#localizacoes") as HTMLElement;
      semAzul3.className = "semAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  localizacoes() {
    this.contLocalizacoes = 1;
    this.abaItensAberta = false;
    this.retirada = 0;
    this.devolucoes = 0;
    this.gerenciaUsuarios = 0;
    this.gerenciaCadastros = 0;

    let semAzul1 = document.querySelector("#devolucoes") as HTMLElement;
    semAzul1.className = "semAzul";
    let semAzul2 = document.querySelector("#retirada") as HTMLElement;
    semAzul2.className = "semAzul";
    let semAzul3 = document.querySelector("#listaItens") as HTMLElement;
    semAzul3.className = "semAzul";

    if (this.tipoUsuario == 3 || this.tipoUsuario == 4) {
      let comAzul = document.querySelector("#localizacoes") as HTMLElement;
      comAzul.className = "comAzul";
    }

    if (this.tipoUsuario == 4) {
      let semAzul4 = document.querySelector(
        "#gerenciarCadastros"
      ) as HTMLElement;
      semAzul4.className = "semAzul";
      let semAzul5 = document.querySelector(
        "#gerenciarUsuarios"
      ) as HTMLElement;
      semAzul5.className = "semAzul";
    }
  }

  excluirLocalizacao() {
    this.aparecerConfirmacao = 0;
    let loc = this.localizacoesFiltradas[this.indexExcluir];
    let index1 = this.service.localizacoes.findIndex((e) => {
      if (e.nome == loc.nome) {
        return true;
      }
      return false;
    });
    if (index1 != -1) {
      this.service.localizacoes.splice(index1, 1);
    }
  }

  pesquisaLocalizacao() {
    var self = this;
    const listaFiltrada = this.localizacoesLista.filter(function (a: any) {
      return a.nome.toLowerCase().indexOf(self.inputGeral.toLowerCase()) > -1;
    });
    this.localizacoesFiltradas = listaFiltrada;
  }

  produtoNaoDevolvido() {
    let botao = document.querySelector(".btnSegundario") as HTMLElement;

    if (botao.style.backgroundColor == "red") {
      botao.style.backgroundColor = "gray";
    } else {
      botao.style.backgroundColor = "red";
    }
    //fazer lógica para dizer que o item não foi devolvido
    //desse jeito, a sacola ainda vai existir com os itens não devolvidos
  }

  cadastrar() {
    this.service.localizacoes.push({
      id: this.service.localizacoes.length + 1,
      nome: this.nomeLoc,
    });
    this.fecharModalLocalizacao();
  }

  confirmacaoLocalizacao(index: number) {
    this.aparecerConfirmacao = 1;
    this.indexExcluir = index;
  }

  informarDefeitoItem() {
    this.devolucaoModal = false;
    this.informarDefeitoModal = true;
  }

  voltarDevolucaoItens() {
    this.informarDefeitoModal = false;
    this.devolucaoModal = true;
  }

  adicionarLocalizacao() {
    if (this.localizacoesItem < 6) {
      this.localizacoesItem++;
    }
  }

  diminuirLocalizacao() {
    if (this.localizacoesItem > 0) {
      this.localizacoesItem--;
    }
  }

  acaoSegundariaDevolucaoModal() {
  }

  removerProdutoSacola() {
    this.removerDevolucaoModal = true;
    //item deve ser removido da sacola
  }

  textoAcaoSegundariaDevolucaoModal() {
    return "Remover";
  }

  buscarTextoModalRecusar() {
    return "Tem certeza que deseja recusar?";
  }

  buscarTextoBotaoModalRecusar() {
    return "Recusar";
  }

  removerDevolucaoModalBtn() {
    this.removerDevolucaoModal = false;
  }

  cancelarReserva() {
    this.devolucaoModal = false;
    this.reserva = false;
  }

  fecharModalCancelarReserva() {
    this.aparecer = false;
    this.reserva = true;
  }

  enviar() {
    this.aparecer = false;
    this.reserva = true;
  }

  adicionarClassificacao() {
    this.inputClassificacao = 1;
  }

  aparecerModalLocalizacao() {
    this.aparecer = true;
    this.localizacaoModal = true;
  }

  fecharModalLocalizacao() {
    this.aparecer = false;
    this.localizacaoModal = false;
  }

  aparecerModalCadastrar() {
    this.aparecer = true;
    this.cadastrarModal = true;
  }

  fecharModalCadastrar() {
    this.aparecer = false;
    this.cadastrarModal = false;
    this.inputClassificacao = 0;
  }

  // Função para mudar a visualização do modal de ordenação
  mudarModaisPesquisa(numero: number) {
    switch (numero) {
      case 1:
        this.modalOrdenar = !this.modalOrdenar;
        break;
    }
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {
    this.listaOrdenacoes = JSON.parse(event);
  }

  // Função para mudar a visualização dos componentes (Lista / Bloco)
  mudarVisualizacao() {
    this.listaEmBloco = !this.listaEmBloco;
  }

}