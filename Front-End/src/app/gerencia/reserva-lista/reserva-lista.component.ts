import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-reserva-lista',
    templateUrl: './reserva-lista.component.html',
    styleUrls: ['./reserva-lista.component.scss']
})
export class ReservaListaComponent implements OnInit {
    constructor() { }

    @Input() listaReservas: any = [];

    modalRetirada = false;
    modalDevolucao = false;

    feedbackRetiradaConfirmada = false;
    feedbackReservaCancelada = false;
    feedbackDevolucaoConfirmada = false;
    feedbackAtrasoDevolucao = false;

    ngOnInit() {
    }

    // Função para abrir / fechar o modal de detalhes (pode ser devolução ou retirada)
    mudarModalDetalhes(event: string, reserva: any) {
        if (reserva.status == "AGUARDANDO_RETIRADA") {
            localStorage.setItem("RESERVA", JSON.stringify(reserva));
            this.modalRetirada = !this.modalRetirada;
            if (event == "retiradaFeita") {
                this.abrirModaisFeedback(1);
            }
            if (event == "reservaCancelada") {
                this.abrirModaisFeedback(2);
            }
        } else {
            this.modalDevolucao = !this.modalDevolucao;
            if (event == "baixa") {
                this.abrirModaisFeedback(3);
            }
            if (event == "atraso") {
                this.abrirModaisFeedback(4);
            }
            localStorage.removeItem("RESERVA");
        }
    }

    // Função para abrir os modais de feedback
    abrirModaisFeedback(event: number) {
        switch (event) {
            case 1:
                this.feedbackRetiradaConfirmada = true;
                setTimeout(() => {
                    this.feedbackRetiradaConfirmada = false;
                }, 4000);
                break;
            case 2:
                this.feedbackReservaCancelada = true;
                setTimeout(() => {
                    this.feedbackReservaCancelada = false;
                }, 4000);
                break;
            case 3:
                this.feedbackDevolucaoConfirmada = true;
                setTimeout(() => {
                    this.feedbackDevolucaoConfirmada = false;
                }, 4000);
                break;
            case 4:
                this.feedbackAtrasoDevolucao = true;
                setTimeout(() => {
                    this.feedbackAtrasoDevolucao = false;
                }, 4000);
        }
    }

    // Função para fechar os modais de feedback
    fecharModaisFeedback(event: number) {
        switch (event) {
            case 1:
                this.feedbackRetiradaConfirmada = false;
                break;
            case 2:
                this.feedbackReservaCancelada = false;
                break;
            case 3:
                this.feedbackDevolucaoConfirmada = false;
                break;
            case 4:
                this.feedbackAtrasoDevolucao = false;
                break;
        }
    }

    // Função para pegar a reserva que será aberta no modal
    getReserva() {
        return JSON.parse(localStorage.getItem("RESERVA") || '{}');
    }

}