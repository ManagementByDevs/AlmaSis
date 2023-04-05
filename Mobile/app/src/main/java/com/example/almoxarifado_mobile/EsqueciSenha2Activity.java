package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.text.InputFilter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class EsqueciSenha2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_senha2);

        // Aceitar apenas um caractere no input do código de verificação

        EditText input1 = findViewById(R.id.inputCodigo1);
        EditText input2 = findViewById(R.id.inputCodigo2);
        EditText input3 = findViewById(R.id.inputCodigo3);
        EditText input4 = findViewById(R.id.inputCodigo4);
        EditText input5 = findViewById(R.id.inputCodigo5);
        EditText input6 = findViewById(R.id.inputCodigo6);

        InputFilter[] inputFilters = new InputFilter[1];
        inputFilters[0] = new InputFilter.LengthFilter(1);

        input1.setFilters(inputFilters);
        input2.setFilters(inputFilters);
        input3.setFilters(inputFilters);
        input4.setFilters(inputFilters);
        input5.setFilters(inputFilters);
        input6.setFilters(inputFilters);

        ImageView button = findViewById(R.id.botaoVoltar2);
        ImageView buttonNext = findViewById(R.id.botaoProximo2);

        button.setOnClickListener(v -> {
            finish();
            Intent intent = new Intent(this, EsqueciSenha1Activity.class);
            startActivity(intent);
        });

        buttonNext.setOnClickListener(v -> {
            Intent intent2 = new Intent(this, EsqueciSenha3Activity.class);
            startActivity(intent2);
        });

        ativarInputsCodigo();

        new CountDownTimer(300000, 1000) {

            public void onTick(long millisUntilFinished) {
                long segundosFaltantes = millisUntilFinished / 1000;
                TextView textoTimer = findViewById(R.id.timer);
                textoTimer.setText(formatarTempoTimer(segundosFaltantes));
            }

            public void onFinish() {
                TextView textoTimer = findViewById(R.id.timer);
                textoTimer.setText("Código Esgotado!");
            }
        }.start();
    }

    private String formatarTempoTimer(Long tempoTimer) {
        String textoFinal = "";
        if(tempoTimer / 60 > 0) {
            textoFinal += tempoTimer / 60;
            textoFinal += "m ";
        }
        if(tempoTimer % 60 > 0) {
            textoFinal += tempoTimer % 60;
            textoFinal += "s ";
        }
        textoFinal += "restantes";
        return textoFinal;
    }

    private void ativarInputsCodigo() {
        
    }
}
