package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.example.almoxarifado_mobile.HomeActivity;
import com.example.almoxarifado_mobile.R;
import com.example.almoxarifado_mobile.entities.Produto;

public class ProdutoActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_produto);

        Produto produto = (Produto) getIntent().getSerializableExtra("produto");
        System.out.println(produto.toString());

        TextView nomeProduto = (TextView) findViewById(R.id.nomeTxt);
        nomeProduto.setText(produto.getNome());



    }
}
