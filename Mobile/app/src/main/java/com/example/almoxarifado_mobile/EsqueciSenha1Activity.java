package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenha1Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_senha1);

        ImageView buttonPreview = findViewById(R.id.botaoVoltar);
        ImageView buttonNext = findViewById(R.id.botaoProximo);

        buttonPreview.setOnClickListener(v -> {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        });

        buttonNext.setOnClickListener(v -> {
            Intent intent2 = new Intent(this, EsqueciSenha2Activity.class);
            startActivity(intent2);
        });
    }
}
