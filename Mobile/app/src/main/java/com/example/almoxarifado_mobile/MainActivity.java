package com.example.almoxarifado_mobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;

import com.example.almoxarifado_mobile.service.UsuarioService;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

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
//        String nome = ((EditText) findViewById(R.id.inputNome)).getText().toString();
//        String senha = ((EditText) findViewById(R.id.inputSenha)).getText().toString();
//        fazerLogin(nome, senha);
    }

    public void cadastro(View view) {
        Intent switchActivityIntent = new Intent(this, Cadastro.class);
        startActivity(switchActivityIntent);
    }

    public void esqueciSenha(View view) {
        Intent switchActivityIntent = new Intent(this, EsqueciSenhaPasso1.class);
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

    public void fazerLogin(String nome, String senha) {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://localhost:8080/alma_sis/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        UsuarioService service = retrofit.create(UsuarioService.class);
        Call<Object> call = service.getUsuarios(nome, senha);
        call.enqueue(new Callback<Object>() {
            @Override
            public void onResponse(Call<Object> call, Response<Object> response) {
                System.out.println(response);
            }

            @Override
            public void onFailure(Call<Object> call, Throwable t) {
                System.out.println(t.getMessage());
            }
        });
    }
}