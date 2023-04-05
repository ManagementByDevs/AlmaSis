package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenhaPasso3 extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.esqueci_senha3);

        ImageView buttonPreview = findViewById(R.id.botaoVoltar3);
        Button buttonConfirm = findViewById(R.id.btnConfirmar);

        buttonPreview.setOnClickListener(v -> {
            finish();
            Intent intent = new Intent(this, EsqueciSenhaPasso2.class);
            startActivity(intent);
        });

        buttonConfirm.setOnClickListener(v -> {
            finish();
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        });
    }
}
