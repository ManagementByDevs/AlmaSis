package com.example.almoxarifado_mobile;

import android.app.Dialog;
import android.content.Context;
import android.widget.CheckBox;
import android.widget.CompoundButton;

public class ModalFiltro extends Dialog {

    Boolean[] listaFiltros;

    public ModalFiltro(Context context, Boolean[] listaFiltros, OnArrayChangedListener listener) {
        super(context);
        this.listaFiltros = listaFiltros;
        init();
    }

    private void init() {
        setContentView(R.layout.filtro_home);
        CheckBox checkBox1 = (CheckBox) findViewById(R.id.checkbox1);
        checkBox1.setChecked(listaFiltros[0]);
//        checkBox1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
//
//            @Override
//            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
//                if (isChecked) {
//                    filtrosAtivos[posicaoCheckbox] = true;
//                } else {
//                    filtrosAtivos[posicaoCheckbox] = false;
//                }
//            }
//        });
    }

    public interface OnArrayChangedListener {
        void onArrayChanged(Boolean[] newArray);
    }
}
