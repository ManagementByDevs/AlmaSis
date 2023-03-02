package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenha2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_senha2);

        ImageView button = findViewById(R.id.botaoVoltar2);
        ImageView buttonNext = findViewById(R.id.botaoProximo2);

        button.setOnClickListener(v -> {
            Intent intent = new Intent(this, EsqueciSenha1Activity.class);
            startActivity(intent);
        });

        buttonNext.setOnClickListener(v -> {
            Intent intent2 = new Intent(this, EsqueciSenha3Activity.class);
            startActivity(intent2);
        });
    }
}
