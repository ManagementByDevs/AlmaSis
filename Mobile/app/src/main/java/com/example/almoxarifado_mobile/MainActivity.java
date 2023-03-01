package com.example.almoxarifado_mobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;

public class MainActivity extends AppCompatActivity {

    private boolean senhaVisivel = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void login(View view) {
        Intent switchActivityIntent = new Intent(this, HomeActivity.class);
        startActivity(switchActivityIntent);
    }

    public void cadastro(View view) {
        Intent switchActivityIntent = new Intent(this, CadastroActivity.class);
        startActivity(switchActivityIntent);
    }

    public void esqueciSenha(View view) {
        Intent switchActivityIntent = new Intent(this, EsqueciSenha1Activity.class);
        startActivity(switchActivityIntent);
    }

    public void mudarSenha(View view) {
        EditText input = findViewById(R.id.inputSenha);
        ImageButton imageButton = findViewById(R.id.botaoOlho);

        if (senhaVisivel) {
            senhaVisivel = false;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_aberto));
        } else {
            senhaVisivel = true;
            input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_NORMAL);
            input.setSelection(input.length());
            imageButton.setImageDrawable(getDrawable(R.drawable.olho_fechado));
        }
    }
}