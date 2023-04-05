package com.example.almoxarifado_mobile;

import android.app.Dialog;
import android.content.Context;

public class ModalClassificacoes extends Dialog {

    public ModalClassificacoes(Context context){
        super(context);
        init();
    }

    public void init(){
        setContentView(R.layout.modal_classificacoes);
    }

}
