import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-anexos-item',
  templateUrl: './anexos-item.component.html',
  styleUrls: ['./anexos-item.component.scss']
})
export class AnexosItemComponent implements OnInit {

  // Input para receber as características do item
  @Input() item: any = null;

  // Output para fechar o modal e abrir novamente o modal de reserva
  @Output() fecharModal = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  fecharModalAnexos() {
    this.fecharModal.emit();
  }


  base64ToArrayBuffer(base64: any) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }

  baixarAnexo(index: number) {
    const file = this.item.anexos[index];
    const blob = new Blob([this.base64ToArrayBuffer(file.dados)]);
    const fileName = `${file.nome}`;

    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

}
