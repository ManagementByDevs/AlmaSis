import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

    constructor() { }

    @Input() reserva = { id: 0, data_retirada: "", data_devolucao: "", status: "", usuario_email: "" }

    modalRetirada = false;
    modalDevolucao = false;

    feedbackRetiradaConfirmada = false;

    ngOnInit() {
    }

    // Função para abrir / fechar o modal de detalhes (pode ser devolução ou retirada)
    mudarModalDetalhes(event: string) {
        if(this.reserva.status == "AGUARDANDO_RETIRADA") {
            this.modalRetirada = !this.modalRetirada;
            if(event == "retiradaFeita") {
                this.abrirModaisFeedback(1);
            }
        } else {
            this.modalDevolucao = !this.modalDevolucao;
        }
    }

    // Função para abrir os modais de feedback
    abrirModaisFeedback(event: number) {
        switch(event) {
            case 1:
                this.feedbackRetiradaConfirmada = true;
                setTimeout(() => {
                    this.feedbackRetiradaConfirmada = false;
                }, 4000);
                break;
        }
    }

    // Função para fechar os modais de feedback
    fecharModaisFeedback(event: number) {
        switch(event) {
            case 1:
                this.feedbackRetiradaConfirmada = false;
                break;
        }
    }

}