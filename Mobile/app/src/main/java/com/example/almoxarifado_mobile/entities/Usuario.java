package com.example.almoxarifado_mobile.entities;

import java.util.Set;

public class Usuario {

    private String emailUsuario;
    private String senhaUsuario;
    private String nomeUsuario;
    private TipoUsuario tipoUsuario;
    private Boolean visibilidade;
    private Set<Produto> produtosFavoritados;
}
