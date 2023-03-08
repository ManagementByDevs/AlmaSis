package com.example.almoxarifado_mobile.entities;

public class Imagem {

    private Long id;
    private String nome;
    private String tipo;
    private byte[] dados;

    public Imagem(Long id, String nome, String tipo, byte[] dados) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.dados = dados;
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

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public byte[] getDados() {
        return dados;
    }

    public void setDados(byte[] dados) {
        this.dados = dados;
    }
}
