package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenhaPasso1 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.esqueci_senha1);

        ImageView buttonPreview = findViewById(R.id.botaoVoltar);
        ImageView buttonNext = findViewById(R.id.botaoProximo);

        buttonPreview.setOnClickListener(v -> {
            finish();
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        });

        buttonNext.setOnClickListener(v -> {
            String email = ((EditText) findViewById(R.id.inputRecuperarEmail)).toString();
            if(!email.equals("")) {
                Intent intent2 = new Intent(this, EsqueciSenhaPasso2.class);
                startActivity(intent2);
            }
        });
    }
}
