import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-motivo-edicao',
  templateUrl: './modal-motivo-edicao.component.html',
  styleUrls: ['./modal-motivo-edicao.component.scss']
})
export class ModalMotivoEdicaoComponent implements OnInit {

  constructor() {
  }

  @Output() fecharModal = new EventEmitter<string>();

  @Input() item = { id: 0, nome: "", caracteristicas: "", quantidade: 0, descartavel: false, imagem: { dados: "", id: 0, nome: "", tipo: "" }, classificacao: { id: 0, classificacao: '' } };

  ngOnInit() {

  }

  fecharModalMotivo(event: string) {
    this.fecharModal.emit(event);
  }

  editarQuantidade() {
    this.fecharModal.emit('editar');
  }
}
