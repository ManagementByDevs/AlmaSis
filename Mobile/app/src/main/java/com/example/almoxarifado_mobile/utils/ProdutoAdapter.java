package com.example.almoxarifado_mobile.utils;


import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.almoxarifado_mobile.R;
import com.example.almoxarifado_mobile.entities.Produto;

import java.util.ArrayList;

public class ProdutoAdapter extends RecyclerView.Adapter<ProdutoAdapter.ViewHolder> {

    private ArrayList<Produto> localDataSet;

    public static class ViewHolder extends RecyclerView.ViewHolder {

        private final TextView nomeProduto;
        private final TextView qtdProduto;
        private final TextView textoDescartavel;

        public ViewHolder(View view) {
            super(view);
            nomeProduto = (TextView) view.findViewById(R.id.nomeProduto);
            qtdProduto = (TextView) view.findViewById(R.id.qtdValor);
            textoDescartavel = (TextView) view.findViewById(R.id.textoDescartavel);
        }

        public TextView getNomeProduto() {
            return nomeProduto;
        }

        public TextView getQtdProduto() {
            return qtdProduto;
        }

        public TextView getTextoDescartavel() {
            return textoDescartavel;
        }
    }

    public ProdutoAdapter(ArrayList<Produto> dataSet) {
        localDataSet = dataSet;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.produto_lista, viewGroup, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder viewHolder, int position) {
        viewHolder.getNomeProduto().setText(localDataSet.get(position).getNome());
        viewHolder.getQtdProduto().setText((localDataSet.get(position).getQuantidade()).toString());

        if (localDataSet.get(position).getDescartavel()) {
            viewHolder.getTextoDescartavel().setText("Descartável");
        } else {
            viewHolder.getTextoDescartavel().setText("Não Descartável");
        }
    }

    @Override
    public int getItemCount() {
        return localDataSet.size();
    }
}
