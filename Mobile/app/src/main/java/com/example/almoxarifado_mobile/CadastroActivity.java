package com.example.almoxarifado_mobile;

import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;

public class CadastroActivity extends AppCompatActivity {

    private Boolean senhaVisivel1 = false;
    private Boolean senhaVisivel2 = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro);
    }

    public void mudarSenha(View view) {
        EditText input = findViewById(R.id.inputSenha1);
        ImageButton imageButton = findViewById(R.id.botaoOlho1);

        if (senhaVisivel1) {
            senhaVisivel1 = false;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_aberto));
        } else {
            senhaVisivel1 = true;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_NORMAL);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_fechado));
        }
    }

    public void mudarSenha2(View view) {
        EditText input = findViewById(R.id.inputSenha2);
        ImageButton imageButton = findViewById(R.id.botaoOlho2);

        if (senhaVisivel2) {
            senhaVisivel2 = false;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_aberto));
        } else {
            senhaVisivel2 = true;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_NORMAL);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_fechado));
        }
    }

    public void entrar(View view) {
        finish();
        Intent switchActivityIntent = new Intent(this, MainActivity.class);
        startActivity(switchActivityIntent);
    }

    public void cadastrar(View view) {

    }
}
