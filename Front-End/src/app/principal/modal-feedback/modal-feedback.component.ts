import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss']
})
export class ModalFeedback implements OnInit {

  @Input() tipoFeedback: number = 0;

  @Output() fecharModal = new EventEmitter();

  constructor() {
  }

  ngOnInit() { }

  retornaTextoFeedback() {
    switch (this.tipoFeedback) {
      case 1:
        return "Reserva efetuada com sucesso!";
      case 2:
        return "Item adicionado à sacola!";
      case 3:
        return "Item editado com sucesso!";
      case 4:
        return "Item removido com sucesso!";
      case 5:
        return "Sacola excluída com sucesso!";
      case 6:
        return "Reserva finalizada com sucesso!";
      case 7:
        return "Reserva confirmada com sucesso!";
      case 8:
        return "Cadastro recusado com sucesso!";
      case 9:
        return "Cadastro aceito com sucesso!";
      case 10:
        return "Usuário atualizado com sucesso!";
      case 11:
        return "Usuário excluído com sucesso!";
      case 12:
        return "Retirada confirmada com sucesso!";
      case 13:
        return "Reserva cancelada com sucesso!";
      case 14:
        return "Devolução feita com sucesso!";
      case 15:
        return "Ocorrência feita com sucesso!";
      case 16:
        return "Localização criada com sucesso!";
      case 17:
        return "Item cadastrado com sucesso!";
      case 18:
        return "Localização excluída com sucesso!";
      case 19:
        return "Filtros salvos com sucesso!";
      case 20:
        return "Localizações excluídas!"
    }
    return "";
  }

  fecharModalFeedback() {
    this.fecharModal.emit();
  }
}