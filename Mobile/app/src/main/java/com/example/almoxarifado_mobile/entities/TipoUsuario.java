package com.example.almoxarifado_mobile.entities;

public enum TipoUsuario {

    PROFESSOR("PROFESSOR"),
    ATENDENTE1("ATENDENTE1"),
    ATENDENTE2("ATENDENTE2"),
    SUPERVISOR("SUPERVISOR"),
    PENDENTE("PENDENTE");

    String nome;

    TipoUsuario(String nome) {
        this.nome = nome;
    }
}
