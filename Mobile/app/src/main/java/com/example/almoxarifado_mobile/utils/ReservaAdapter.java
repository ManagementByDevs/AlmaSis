package com.example.almoxarifado_mobile.utils;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.almoxarifado_mobile.R;
import com.example.almoxarifado_mobile.entities.Reserva;

import java.util.ArrayList;

public class ReservaAdapter extends RecyclerView.Adapter<ReservaAdapter.ViewHolder> {
    private ArrayList<Reserva> localDataSet;

    public static class ViewHolder extends RecyclerView.ViewHolder {
        private TextView dataRetirada;
        private TextView dataDevolucao;
        private TextView itensValue;

        public ViewHolder(View view) {
            super(view);
//            dataRetirada = (TextView) view.findViewById(R.id.dataRetirada);
//            dataDevolucao = (TextView) view.findViewById(R.id.dataDevolucao);
//            itensValue = (TextView) view.findViewById(R.id.itensValue);
        }

        public TextView getDataRetirada() {
            return dataRetirada;
        }

        public TextView getDataDevolucao() {
            return dataDevolucao;
        }

        public TextView getItensValue() {
            return itensValue;
        }
    }

    public ReservaAdapter(ArrayList<Reserva> dataSet) {
        localDataSet = dataSet;
    }

    @NonNull
    @Override
    public ReservaAdapter.ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.activity_reserva_item, viewGroup, false);
        return new ReservaAdapter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ReservaAdapter.ViewHolder viewHolder, int position) {
//        viewHolder.getDataDevolucao().setText(localDataSet.get(position).getDataDevoluçao().toString());
//        viewHolder.getDataRetirada().setText(localDataSet.get(position).getDataRetirada().toString());
//        viewHolder.getItensValue().setText(localDataSet.get(position).getListaProdutos().size());
    }

    @Override
    public int getItemCount() {
        return localDataSet.size();
    }
}
