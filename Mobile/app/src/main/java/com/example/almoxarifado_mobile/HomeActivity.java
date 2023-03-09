package com.example.almoxarifado_mobile;


import android.content.Context;

import android.app.Dialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.almoxarifado_mobile.entities.Produto;
import com.example.almoxarifado_mobile.listeners.ProdutoListener;
import com.example.almoxarifado_mobile.service.ProdutoService;
import com.example.almoxarifado_mobile.utils.ProdutoAdapter;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class HomeActivity extends AppCompatActivity implements ProdutoListener{

    private RecyclerView recyclerView;
    private RecyclerView.LayoutManager layoutManager;
    private ProdutoAdapter adapter;
    private ArrayList<Produto> listaProdutos = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        ImageView button = findViewById(R.id.imagemUserFooter);

        button.setOnClickListener(v -> {
           modalConfiguracoes(this);
        });

//        buscarItens();
        cadastroAutomatico();
        setRecyclerView();
    }

    public void cadastroAutomatico() {
        listaProdutos.add(new Produto(Long.parseLong("1"), 10, "Abraçadeira", "Pequenas", true, true, null, null, null));
    }

    public void produto(View view) {
        Intent switchActivityIntent = new Intent(this, ProdutoActivity.class);
        startActivity(switchActivityIntent);
    }

    private void setRecyclerView() {
        recyclerView = findViewById(R.id.lista);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        adapter = new ProdutoAdapter(listaProdutos, this);
        recyclerView.setAdapter(adapter);
    }

    public void modalConfiguracoes(Context context) {
        ModalConfiguracoes modal = new ModalConfiguracoes(context);
        modal.show();
    }

    public void abrirFiltro() {
        Dialog dialog = new Dialog(this);

    }

    private void buscarItens() {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://localhost:8080/alma_sis/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ProdutoService service = retrofit.create(ProdutoService.class);
        Call<List<Produto>> call = service.getAll();
        call.enqueue(new Callback<List<Produto>>() {
            @Override
            public void onResponse(Call<List<Produto>> call, Response<List<Produto>> response) {
                System.out.println(response);
            }

            @Override
            public void onFailure(Call<List<Produto>> call, Throwable t) {
                System.out.println(t.getMessage());
            }
        });
    }

    public void abrirReservas(View view) {
        Intent intent = new Intent(this, ReservasActivity.class);
        startActivity(intent);
    }

    @Override
    public void onProductClick(Produto product) {
        Intent switchActivityIntent = new Intent(this, ProdutoActivity.class);
        startActivity(switchActivityIntent);
    }
}
