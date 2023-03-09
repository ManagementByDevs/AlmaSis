package com.example.almoxarifado_mobile.entities;

public class Classificacao {

    private Long id;
    private String classificacao;

    public Classificacao(Long id, String classificacao) {
        this.id = id;
        this.classificacao = classificacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }
}
