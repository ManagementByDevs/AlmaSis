package com.example.almoxarifado_mobile.entities;

public class Localizacao {

    private Long id;
    private String  nome;
    private Long idPai;

    public Localizacao(Long id, String nome, Long idPai) {
        this.id = id;
        this.nome = nome;
        this.idPai = idPai;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getIdPai() {
        return idPai;
    }

    public void setIdPai(Long idPai) {
        this.idPai = idPai;
    }
}
