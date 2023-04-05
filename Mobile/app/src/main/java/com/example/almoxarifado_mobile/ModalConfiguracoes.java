package com.example.almoxarifado_mobile;

import android.app.Dialog;
import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.Switch;

public class ModalConfiguracoes extends Dialog {

    private Button saveButton, cancelButton;

    public ModalConfiguracoes(Context context) {
        super(context);
        init();
    }

    private void init() {
        setContentView(R.layout.modal_configuracoes);

        saveButton = findViewById(R.id.dialog_save_button);
        cancelButton = findViewById(R.id.dialog_cancel_button);

        Switch darkModeSwitch = findViewById(R.id.dark_mode_switch);

        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });

        cancelButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {dismiss();}
        });
    }

    public void setButtonText(String text) {
        saveButton.setText(text);
    }

}
