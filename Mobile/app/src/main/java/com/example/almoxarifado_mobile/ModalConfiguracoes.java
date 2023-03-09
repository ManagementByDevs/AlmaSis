package com.example.almoxarifado_mobile;

import android.app.Dialog;
import android.content.Context;
import android.view.View;
import android.widget.Button;
import android.widget.Switch;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class ModalConfiguracoes extends Dialog {

    private TextView mTitle;
    private TextView mMessage;
    private Button mButton;

    public ModalConfiguracoes(Context context) {
        super(context);
        init();
    }

    private void init() {
        setContentView(R.layout.modal_configuracoes);

        mButton = findViewById(R.id.dialog_save_button);

        Switch darkModeSwitch = findViewById(R.id.dark_mode_switch);
        boolean isDarkModeEnabled = darkModeSwitch.isChecked();

        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });
    }

    public void setTitle(String title) {
        mTitle.setText(title);
    }

    public void setMessage(String message) {
        mMessage.setText(message);
    }

    public void setButtonText(String text) {
        mButton.setText(text);
    }

}
