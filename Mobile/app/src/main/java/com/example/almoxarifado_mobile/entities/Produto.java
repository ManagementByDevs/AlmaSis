package com.example.almoxarifado_mobile.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class Produto {

    private Long id;
    private Integer quantidade;
    private String nome;
    private String caracteristicas;
    private Boolean descartavel;
    private Imagem imagem;
    private Boolean visibilidade;

    private Classificacao classificacao;
    private ArrayList<Localizacao> localizacoes;
    private List<Anexo> anexos;

    public Produto(Long id, Integer quantidade, String nome, String caracteristicas, Boolean descartavel, Imagem imagem, Boolean visibilidade, Classificacao classificacao, ArrayList<Localizacao> localizacoes, List<Anexo> anexos) {
        this.id = id;
        this.quantidade = quantidade;
        this.nome = nome;
        this.caracteristicas = caracteristicas;
        this.descartavel = descartavel;
        this.imagem = imagem;
        this.visibilidade = visibilidade;
        this.classificacao = classificacao;
        this.localizacoes = localizacoes;
        this.anexos = anexos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Boolean getDescartavel() {
        return descartavel;
    }

    public void setDescartavel(Boolean descartavel) {
        this.descartavel = descartavel;
    }

    public Imagem getImagem() {
        return imagem;
    }

    public void setImagem(Imagem imagem) {
        this.imagem = imagem;
    }

    public Boolean getVisibilidade() {
        return visibilidade;
    }

    public void setVisibilidade(Boolean visibilidade) {
        this.visibilidade = visibilidade;
    }

    public Classificacao getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(Classificacao classificacao) {
        this.classificacao = classificacao;
    }

    public ArrayList<Localizacao> getLocalizacoes() {
        return localizacoes;
    }

    public void setLocalizacoes(ArrayList<Localizacao> localizacoes) {
        this.localizacoes = localizacoes;
    }

    public List<Anexo> getAnexos() {
        return anexos;
    }

    public void setAnexos(List<Anexo> anexos) {
        this.anexos = anexos;
    }
}
