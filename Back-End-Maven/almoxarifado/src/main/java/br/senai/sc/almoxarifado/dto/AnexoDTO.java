package br.senai.sc.almoxarifado.dto;

import lombok.Getter;

@Getter
public class AnexoDTO {

    private String nome;
    private String tipo;
    private byte[] dados;
}
