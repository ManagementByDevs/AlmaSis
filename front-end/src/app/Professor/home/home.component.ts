import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ProdutoService } from 'src/app/service/produtoService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private service: UsersService, private paginator: MatPaginatorIntl, private produtoService: ProdutoService) {

    paginator.itemsPerPageLabel = 'Quantidade de itens por página:';
    paginator.nextPageLabel = 'Próxima página';
    paginator.previousPageLabel = 'Página anterior';
    paginator.firstPageLabel = 'Primeira página';
    paginator.lastPageLabel = 'Última página';

    // *Personalizar a paginação
    paginator.getRangeLabel = (pageSize: number, length: number) => {
      return "página " + (this.paginaAtual + 1) + " de " + (Math.ceil(this.itensTotais / this.tamanhoPagina));
    };
  }

  carregando: boolean = true;

  numeroPaginas = 6;
  numResultados = 0;

  listaItens: any;
  listaEmBloco = true;

  feedbackSacolaReservada: boolean = false;
  feedbackSacolaExcluida: boolean = false;
  feedbackReservaCancelada: boolean = false;

  modalOrdenar: boolean = false;

  listaOrdenacoes = [false, false, false, false];

  itensTotais: number = 0;
  tamanhoPagina: number = 18;
  paginaAtual: number = 0;
  tamanhoPaginaAntigo: number = 18;
  parametrosPagina: string = "";

  itemOrdenacaoAtual: string = "id";
  ordenacaoAtual: string = "asc";

  textoPesquisa: string = "";

  ngOnInit() {

    this.buscarItens();
    // Função para fechamento dos modais ordenar e filtrar caso tenha sido clicado fora
    var self = this;
    window.addEventListener("click", function (event) {
      try {
        if (!(event.target as HTMLElement).className.includes("parteModal")) {
          if (!(event.target as HTMLElement).className.includes("iconsModais")) {
            if (self.modalOrdenar) {
              self.modalOrdenar = false;
            }
          }
        }
      } catch (error) {
        self.modalOrdenar = false;
      }
    });

    if (localStorage.getItem('excluir')) {
      localStorage.removeItem('excluir');
      this.abrirFeedback(1);
    } else if (localStorage.getItem('reservar')) {
      localStorage.removeItem('reservar');
      this.abrirFeedback(2);
    } else if (localStorage.getItem('cancelar')) {
      localStorage.removeItem('cancelar');
      this.abrirFeedback(3);
    }
  }

  buscarItens() {

    if (this.textoPesquisa == "") {
      this.produtoService.getCount().subscribe(
        data => { this.itensTotais = data; this.numResultados = data; },
        error => { console.log(error) }
      )

      this.produtoService.getPage(this.parametrosPagina).subscribe(
        data => { this.listaItens = data; this.carregando = !this.carregando; },
        error => { console.log(error) }
      );
    } else {

    }
  }

  // Função para mudar a visualização dos itens entre lista e bloco
  trocarVisualizacaoItem() {
    this.listaEmBloco = !this.listaEmBloco;
  }

  // Função para abrir e fechar o modal de ordenação
  mudarModalOrdenar() {
    this.modalOrdenar = !this.modalOrdenar;
  }

  // Função para voltar para a página anterior na lista de itens
  voltarPagina() {
    this.paginaAtual--;
  }

  // Função para ir para a próxima página na lista de itens
  proximoPagina() {
    this.paginaAtual++;
  }

  // Função para ir para uma página específica na lista de itens
  irPagina(numero: any) {
    this.paginaAtual = numero;
  }

  //Função para ordenar os itens, recebendo um array de booleanos que remetem às diferentes ordenações
  ordenarItens(event: any) {

    event = JSON.parse(event);
    if (event[0]) {
      this.itemOrdenacaoAtual = "nome"
      this.ordenacaoAtual = "asc";
    }
    if (event[1]) {
      this.itemOrdenacaoAtual = "nome"
      this.ordenacaoAtual = "desc";
    }
    if (event[2]) {
      this.itemOrdenacaoAtual = "quantidade"
      this.ordenacaoAtual = "desc";
    }
    if (event[3]) {
      this.itemOrdenacaoAtual = "quantidade"
      this.ordenacaoAtual = "asc";
    }
    if(!event[0] && !event[1] && !event[2] && !event[3]) {
      this.listaOrdenacoes = [false, false, false, false];
      this.itemOrdenacaoAtual = "id";
      this.ordenacaoAtual = "asc";
    }

    this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + this.tamanhoPagina + "&page=" + this.paginaAtual;
    this.carregando = !this.carregando;
    this.buscarItens();
  }

  abrirFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackSacolaExcluida = true;
        setTimeout(() => {
          this.feedbackSacolaExcluida = false;
        }, 4500)
        break;
      case 2:
        this.feedbackSacolaReservada = true;
        setTimeout(() => {
          this.feedbackSacolaReservada = false;
        }, 4500)
        break;
      case 3:
        this.feedbackReservaCancelada = true;
        setTimeout(() => {
          this.feedbackReservaCancelada = false;
        }, 4500)
        break;
    }
  }

  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackSacolaExcluida = false;
        break;
      case 2:
        this.feedbackSacolaReservada = false;
        break;
      case 3:
        this.feedbackReservaCancelada = false;
        break;
    }
  }

  mudarPagina(event: any) {
    if (event.previousPageIndex != event.pageIndex) {
      if (event.previousPageIndex <= event.pageIndex) {
        this.paginaAtual++;
      } else {
        this.paginaAtual--;
      }

      this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + event.pageSize + "&page=" + event.pageIndex;
      this.buscarItens();
    } else {
      if (event.pageSize != this.tamanhoPaginaAntigo) {
        this.tamanhoPagina = event.pageSize;
        this.tamanhoPaginaAntigo = event.pageSize;

        this.parametrosPagina = "sort=" + this.itemOrdenacaoAtual + "," + this.ordenacaoAtual + "&size=" + event.pageSize + "&page=" + event.pageIndex;
        this.buscarItens();
      }
    }
  }

  filtrarPorClassificacao() {}
  pesquisar() {
    this.carregando = !this.carregando;
    this.buscarItens();
  }
}
