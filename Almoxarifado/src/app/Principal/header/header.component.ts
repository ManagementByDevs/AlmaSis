import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  abrirUser() {
    if(this.user == 0) {
      this.user = 1;
    } else {
      this.user = 0;
    }
  }

  navegar(rota: String) {
    this.router.navigate([rota]);
  }

}
