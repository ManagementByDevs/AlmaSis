package com.example.almoxarifado_mobile;

import android.app.Dialog;
import android.content.Context;
import android.widget.CheckBox;
import android.widget.CompoundButton;

public class ModalFiltro extends Dialog {

    Boolean[] listaFiltros;
    OnArrayChangedListener listener;

    public ModalFiltro(Context context, Boolean[] listaFiltros, OnArrayChangedListener listener) {
        super(context);
        this.listaFiltros = listaFiltros;
        this.listener = listener;
        init();
    }

    private void init() {
        setContentView(R.layout.filtro_home);
        setCheckbox1();
        setCheckbox2();
        setCheckbox3();
        setCheckbox4();
    }

    private void setCheckbox1() {
        CheckBox checkBox = (CheckBox) findViewById(R.id.checkbox1);
        checkBox.setChecked(listaFiltros[0]);
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                listaFiltros[0] = isChecked;
                listener.onArrayChanged(listaFiltros);
            }
        });
    }

    private void setCheckbox2() {
        CheckBox checkBox = (CheckBox) findViewById(R.id.checkBox2);
        checkBox.setChecked(listaFiltros[1]);
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                listaFiltros[1] = isChecked;
                listener.onArrayChanged(listaFiltros);
            }
        });
    }

    private void setCheckbox3() {
        CheckBox checkBox = (CheckBox) findViewById(R.id.checkBox3);
        checkBox.setChecked(listaFiltros[2]);
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                listaFiltros[2] = isChecked;
                listener.onArrayChanged(listaFiltros);
            }
        });
    }

    private void setCheckbox4() {
        CheckBox checkBox = (CheckBox) findViewById(R.id.checkBox4);
        checkBox.setChecked(listaFiltros[3]);
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                listaFiltros[3] = isChecked;
                listener.onArrayChanged(listaFiltros);
            }
        });
    }

    public interface OnArrayChangedListener {
        void onArrayChanged(Boolean[] newArray);
    }
}
