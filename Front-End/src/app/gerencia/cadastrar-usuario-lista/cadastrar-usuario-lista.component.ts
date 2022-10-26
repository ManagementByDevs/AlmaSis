import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario-lista',
  templateUrl: './cadastrar-usuario-lista.component.html',
  styleUrls: ['./cadastrar-usuario-lista.component.scss']
})
export class CadastrarUsuarioListaComponent implements OnInit {

  constructor() { }

  @Input() listaCadastros: any = [];

  modalConfirmarRecusa = false;
  modalConfirmarAceite = false;

  feedbackRecusaCadastro = false;
  feedbackAceiteCadastro = false;

  ngOnInit(): void {
  }

  // Função para abrir os modais de confirmação
  abrirModaisConfirmacao(numero: number) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = true;
        break;
      case 2:
        this.modalConfirmarAceite = true;
        break;
    }
  }

  // Função ativada quando os modais de confirmação são fechados
  fecharModaisConfirmacao(numero: number, resposta: boolean) {
    switch (numero) {
      case 1:
        this.modalConfirmarRecusa = false;
        if (resposta) {
          // Recusar usuário
          this.abrirModaisFeedback(1);
        }
        break;
      case 2:
        this.modalConfirmarAceite = false;
        if (resposta) {
          // Aceitar usuário
          this.abrirModaisFeedback(2);
        }
    }
  }

  // Função para abrir os modais de feedback após a confirmação de recusa ou aceitação
  abrirModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackRecusaCadastro = true;
        setTimeout(() => {
          this.feedbackRecusaCadastro = false;
        }, 4000);
        break;
      case 2:
        this.feedbackAceiteCadastro = true;
        setTimeout(() => {
          this.feedbackAceiteCadastro = false;
        }, 4000);
    }
  }

  // Função para fechar os modais de feedback após confirmações
  fecharModaisFeedback(numero: number) {
    switch (numero) {
      case 1:
        this.feedbackRecusaCadastro = false;
        break;
      case 2:
        this.feedbackAceiteCadastro = false;
        break;
    }
  }

}
