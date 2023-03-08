package com.example.almoxarifado_mobile;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.almoxarifado_mobile.entities.Anexo;
import com.example.almoxarifado_mobile.entities.Classificacao;
import com.example.almoxarifado_mobile.entities.Imagem;
import com.example.almoxarifado_mobile.entities.Localizacao;
import com.example.almoxarifado_mobile.entities.Produto;
import com.example.almoxarifado_mobile.entities.Reserva;
import com.example.almoxarifado_mobile.utils.ReservaAdapter;

import java.util.ArrayList;
import java.util.Date;

public class ReservasActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private RecyclerView.LayoutManager layoutManager;
    private ReservaAdapter adapter;
    ArrayList<Reserva> lista = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reservas);


        ArrayList<Produto> listaProdutos = new ArrayList<>();

        ArrayList<Localizacao> localizacoes = new ArrayList<>();
        Localizacao localizacao = new Localizacao(Long.parseLong("0"), "P1", null);
        localizacoes.add(localizacao);

        ArrayList<Anexo> anexos = new ArrayList<>();
        Anexo anexo = new Anexo(Long.parseLong("0"), "Anexo 1", "type/png", null);
        anexos.add(anexo);

        Imagem imagem = new Imagem(Long.parseLong("0"), "Imagem 1", "type/png", null);

        Classificacao classificacao = new Classificacao(Long.parseLong("0"), "Classificacao");

        Produto produto = new Produto(Long.parseLong("0"), 129, "Nome Produto 1", "Características", false, imagem, true, classificacao, localizacoes, anexos);
        listaProdutos.add(produto);

        Reserva reserva = new Reserva(new Date(), new Date(), listaProdutos);

        lista.add(reserva);
        lista.add(reserva);
        lista.add(reserva);

        setRecyclerView();
    }


    private void setRecyclerView() {
        recyclerView = findViewById(R.id.lista);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        adapter = new ReservaAdapter(lista);
        recyclerView.setAdapter(adapter);
    }

}
