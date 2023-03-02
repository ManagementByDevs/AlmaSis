package com.example.almoxarifado_mobile.service;

import com.example.almoxarifado_mobile.entities.Produto;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ProdutoService {

    @GET("/produto/page")
    Call<List<Produto>> getAll();
}
