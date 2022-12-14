import { Component, HostListener, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.css']
})
export class HomeProfessorComponent implements OnInit {

  constructor(private service: UsersService) {
    this.listaItens = service.itens;
  }

  numeroPaginas = 6;

  listaItens;
  emBloco = 0;

  paginaAtual = 1;

  modalOrdernar: boolean = false;
  modalFiltrar: boolean = false;

  ngOnInit() {
  }

  mostrarEmBloco() {
    this.emBloco = 0;
  }

  mostrarEmLista() {
    this.emBloco = 1;
  }
  abrirModal(abrir: boolean) {
    if (abrir) {
      this.modalOrdernar = true;
      document.documentElement.style.overflow = 'hidden';
    } else {
      this.modalOrdernar = false;
      document.documentElement.style.overflow = 'auto';
    }

  }

  ordernar() {
    this.abrirModal(true);
  }

  fecharModalOrdenar() {
    this.abrirModal(false);
  }

  cancelarOrdenar() {
    this.abrirModal(false);
  }

  realizarOrdenacao() {
    this.abrirModal(false);
  }

  voltarPagina() {
    this.paginaAtual--;
  }

  irPagina(numero) {
    this.paginaAtual = numero;
  }

  proximoPagina() {
    this.paginaAtual++;
  }

  filtrar() {
    this.modalFiltrar = !this.modalFiltrar;
  }

  fecharModalFiltro() {
    this.modalFiltrar = false;
  }
}
