import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../Principal/item/item.component';
import { SacolaComponent } from '../Principal/sacola/sacola.component';
import { ReservaComponent } from '../Principal/reserva/reserva.component';
import { HeaderComponent } from '../Principal/header/header.component';
import { MinhasReservasComponent } from '../Principal/minhas-reservas/minhas-reservas.component';
import { MinhaSacolaComponent } from '../Principal/minha-sacola/minha-sacola.component';
import { SacolasComponent } from '../Principal/sacolas/sacolas.component';
import { FiltroComponent } from '../Principal/filtro/filtro.component';
import { CalendarioComponent } from '../Principal/calendario/calendario.component';
import { ConfirmacaoExecucaoComponent } from './confirmacaoExecucao/confirmacaoExecucao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ItemComponent, SacolaComponent, ReservaComponent, HeaderComponent, MinhasReservasComponent, MinhaSacolaComponent, SacolasComponent, FiltroComponent, CalendarioComponent, ConfirmacaoExecucaoComponent],
  exports: [ItemComponent, CalendarioComponent, FiltroComponent, HeaderComponent, MinhaSacolaComponent, MinhasReservasComponent, ReservaComponent, SacolaComponent, SacolasComponent, ConfirmacaoExecucaoComponent]
})
export class PrincipalModule { }
