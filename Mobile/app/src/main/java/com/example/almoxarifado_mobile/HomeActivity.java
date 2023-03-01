package com.example.almoxarifado_mobile;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.almoxarifado_mobile.utils.ProdutoAdapter;

public class HomeActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private RecyclerView.LayoutManager layoutManager;
    private ProdutoAdapter adapter;
    String[] lista = {"aaaaaa", "bbbbbbb", "ccccccccccc", "dddddddddddddd", "eeeeeeeeeeee", "ffffffffffff", "ggggggggggg"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        buscarItens();
        setRecyclerView();
    }

    private void setRecyclerView() {
        recyclerView = (RecyclerView) findViewById(R.id.lista);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        adapter = new ProdutoAdapter(lista);
        recyclerView.setAdapter(adapter);
    }

    private void buscarItens() {

    }
}
