package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenha3Activity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_senha3);

        ImageView buttonPreview = findViewById(R.id.botaoVoltar3);
        Button buttonConfirm = findViewById(R.id.btnConfirmar);

        buttonPreview.setOnClickListener(v -> {
            Intent intent = new Intent(this, EsqueciSenha2Activity.class);
            startActivity(intent);
        });

        buttonConfirm.setOnClickListener(v -> {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        });
    }
}
