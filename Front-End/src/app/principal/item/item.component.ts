import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProdutoService } from 'src/app/service/produtoService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private produtoService: ProdutoService) {
    this.tipoUser = parseInt(localStorage.getItem("usuario") || "");
  }

  tipoUser: number = 0;

  ngOnInit() {
    if (this.item.imagem) {
      this.imagemUrl = "data:image/png;base64," + this.item.imagem.dados;
    } else {
      this.imagemUrl = "https://static.weg.net/medias/images/h97/h6f/RW_02.png?cimgnr=UbfLe";
    }

    if (this.item.classificacao == null) {
      this.item.classificacao = { id: 0, classificacao: "Nenhuma" };
    }
  }

  // <!-- --------------- ITEM EM SI EM BLOCO ---------------- -->

  // Input para definir se o item está sendo visualizado em bloco ou em lista
  @Input() visualizacaoItem: string = "emLista";

  // Input com o objeto do item recebido da lista
  @Input() item = { id: 0, nome: "", caracteristicas: "", quantidade: 0, descartavel: false, imagem: { dados: "", id: 0, nome: "", tipo: "" }, classificacao: { id: 0, classificacao: '' }, anexos: [{ descricao: "", anexo: "" }], localizacoes: [{ id: 0 }] };

  @Output() excluirItemLista = new EventEmitter<number>();

  modalReservar: boolean = false;
  modalEditar: boolean = false;
  modalConfirmarRemocao: boolean = false;

  modalAnexos: boolean = false;
  modalHistorico: boolean = false;
  modalMotivoEdicao: boolean = false;
  modalAdicionarSacola: boolean = false;

  feedbackReservaFeita = false;
  feedbackColocadoSacola = false;
  feedbackEditarItem = false;

  favorito: boolean = false;
  imagemUrl: any;

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
  abrirModalReserva() {
    document.documentElement.style.overflow = "hidden"
    this.modalReservar = true;
  }

  // Função para deixar o item nos favoritos
  favoritos() {
    this.favorito = !this.favorito;
  }

  // Função para abrir o modal de edição do item
  abrirModalEditar() {
    document.documentElement.style.overflow = "hidden"
    this.modalEditar = true;
  }

  // Função para abrir o modal de histórico do item
  abrirHistorico() {
    document.documentElement.style.overflow = "hidden"
    this.modalHistorico = true;
  }

  abrirAdicionarSacola() {
    this.modalAdicionarSacola = true;
  }

  // Função para abrir e fechar o modal de anexos
  verAnexos() {
    this.modalAnexos = !this.modalAnexos;
  }

  removerItem() {
    this.modalConfirmarRemocao = true;
  }

  // Função para fechar os modais de reserva, edição, etc... do item
  fecharModaisItem(numero: number, event: any) {
    switch (numero) {
      case 1:
        document.documentElement.style.overflow = "visible"
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
          document.documentElement.style.overflow = "hidden"
          this.modalAnexos = true;
          this.modalReservar = true;
        }

        if (event == "addSacola") {
          document.documentElement.style.overflow = "hidden"
          this.modalAdicionarSacola = true;
          this.modalReservar  = true; 
        }
        break;
      case 2:
        this.modalAnexos = false;
        this.modalReservar = true;
        break;
      case 3:
        document.documentElement.style.overflow = "visible"
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
        document.documentElement.style.overflow = "visible"
        break;
      case 6:
        this.modalAdicionarSacola = false;
        this.modalReservar = true;
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
    }
  }

  // Função para fechar os modais de confirmação de ações do item
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarRemocao = false;
        if (resposta) {
          this.excluirItem();
        }
        break;
    }
  }

  excluirItem() {
    this.produtoService.deleteProduto(this.item.id).subscribe(
      data => { this.excluirItemLista.emit(this.item.id); },
      error => { console.log(error) }
    )
  }
}