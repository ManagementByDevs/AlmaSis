import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/service/produtoService';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemListaComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {
    this.tipoUser = parseInt(localStorage.getItem("usuario") || "");
  }

  tipoUser: number = 0;

  ngOnInit() {
    if (this.item.classificacao == null) {
      this.item.classificacao = { id: 0, classificacao: "Nenhuma" };
    }
  }

  // <!-- --------------- ITEM EM SI EM BLOCO ---------------- -->

  // Input para definir se o item está sendo visualizado em bloco ou em lista
  @Input() visualizacaoItem: string = "emLista";

  // Input com o objeto do item recebido da lista
  @Input() item = { id: 0, nome: "", descricao: "", quantidade: 0, descartavel: false, imagem: "", classificacao: { id: 0, classificacao: '' }, anexos: [{ descricao: "", anexo: "" }] };
  @Input() itens: any[] = [];

  itemModalReservar: any;

  modalReservar: boolean = false;
  modalEditar: boolean = false;
  modalConfirmarRemocao: boolean = false;

  modalAnexos: boolean = false;
  modalHistorico: boolean = false;
  modalMotivoEdicao: boolean = false;

  feedbackReservaFeita = false;
  feedbackColocadoSacola = false;
  feedbackEditarItem = false;
  feedbackRemoverItem = false;

  // Return das classes para visualização do item
  // Número - número definido do elemento HTML
  retornarClassesVisualizacao(numero: number) {
    switch (numero) {
      case 1:
        if (this.visualizacaoItem == "emLinha") {
          return "quadroItemLista";
        } else {
          return "quadroItemBloco";
        }
      case 2:
        if (this.visualizacaoItem == "emLinha") {
          return "imgProdutoLista";
        } else {
          return "imgProdutoBloco";
        }
      case 3:
        if (this.visualizacaoItem == "emLinha") {
          return "descricaoProdutoLista";
        } else {
          return "descricaoItemBloco";
        }
      case 4:
        if (this.visualizacaoItem == "emLinha") {
          return "infoItemLista";
        } else {
          return "infoItemBloco";
        }
    }
    return "";
  }

  // Retorna uma string se o item é descartável ou não dependendo do atributo boolean do objeto recebido
  retornaTextoDescartavel() {
    if (this.item.descartavel) {
      return "Descartável"
    } else {
      return "Não Descartável"
    }
  }

  // Função para deixar visível o modal de reserva do item
  abrirModalReserva(idIcone: any, item: any) {
    switch (idIcone) {
      case "iconeEditar":
        this.abrirModalEditar();
        break;
      case "iconeHistorico":
        this.abrirHistorico();
        break;
      case "iconeExcluir":
        this.removerItem(item.id);
        break;
      case "iconeEstrela":
        break;
      case "iconEstrelaPreenchida":
        break;
      default:
        this.itemModalReservar = item;
        this.modalReservar = true;
    }
  }

  // Função para abrir o modal de edição do item
  abrirModalEditar() {
    this.modalEditar = true;
  }

  // Função para abrir o modal de histórico do item
  abrirHistorico() {
    this.modalHistorico = true;
  }

  // Função para abrir e fechar o modal de anexos
  verAnexos() {
    this.modalAnexos = !this.modalAnexos;
  }

  removerItem(id: number) {
    this.modalConfirmarRemocao = true;
    localStorage.setItem('itemAtual', id.toString());
  }

  // Função para fechar os modais de reserva, edição, etc... do item
  fecharModaisItem(numero: number, event: any) {
    switch (numero) {
      case 1:
        this.modalReservar = false;
        if (event == "reservar") {
          this.feedbackReservaFeita = true;
          setTimeout(() => {
            this.feedbackReservaFeita = false;
          }, 4000);
        }
        if (event == "sacola") {
          this.feedbackColocadoSacola = true;
          setTimeout(() => {
            this.feedbackColocadoSacola = false;
          }, 4000);
        }
        if (event == "anexos") {
          this.modalAnexos = true;
          this.modalReservar = true;
        }
        break;
      case 2:
        this.modalAnexos = false;
        this.modalReservar = true;
        break;
      case 3:
        this.modalEditar = false;
        if (event == "editar") {
          this.feedbackEditarItem = true;
          setTimeout(() => {
            this.feedbackEditarItem = false;
          }, 4000);
        }
        if (event == "motivo") {
          this.modalMotivoEdicao = true;
        }
        break;
      case 4:
        this.modalMotivoEdicao = false;
        if (event == "editar") {
          this.feedbackEditarItem = true;
          setTimeout(() => {
            this.feedbackEditarItem = false;
          }, 4000);
        } else {
          this.modalEditar = true;
        }
        break;
      case 5:
        this.modalHistorico = false;
        break;
    }
  }

  // Função para fechar os modais de feedback sobre ações do item
  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackReservaFeita = false;
        break;
      case 2:
        this.feedbackColocadoSacola = false;
        break;
      case 3:
        this.feedbackEditarItem = false;
        break;
      case 4:
        this.feedbackRemoverItem = false;
        break;
    }
  }

  // Função para fechar os modais de confirmação de ações do item
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarRemocao = false;
        if (resposta) {
          this.feedbackRemoverItem = true;
          setTimeout(() => {
            this.feedbackRemoverItem = false;
          }, 4000);
          this.excluirItem();
        }
        localStorage.removeItem("itemAtual");
        break;
    }
  }

  excluirItem() {

    let idItem = parseInt(localStorage.getItem("itemAtual") || "0");
    this.produtoService.deleteProduto(idItem).subscribe(
      error => { console.log(error) }
    )

    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].id == idItem) {
        this.itens.splice(i, 1);
      }
    }
  }
}