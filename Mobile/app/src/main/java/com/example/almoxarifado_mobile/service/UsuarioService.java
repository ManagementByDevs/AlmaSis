package com.example.almoxarifado_mobile.service;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface UsuarioService {

    @GET("/usuario/login")
    Call<Object> getUsuarios(@Query("nome") String nome, @Query("senha") String senha);
}
