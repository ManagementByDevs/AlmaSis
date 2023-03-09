package com.example.almoxarifado_mobile.entities;

import java.util.ArrayList;
import java.util.Date;

public class Reserva {
    private Date dataRetirada;
    private Date dataDevoluçao;
    private ArrayList<Produto> listaProdutos;

    public Reserva(Date dataRetirada, Date dataDevoluçao, ArrayList<Produto> listaProdutos) {
        this.dataRetirada = dataRetirada;
        this.dataDevoluçao = dataDevoluçao;
        this.listaProdutos = listaProdutos;
    }

    public Date getDataRetirada() {
        return dataRetirada;
    }

    public void setDataRetirada(Date dataRetirada) {
        this.dataRetirada = dataRetirada;
    }

    public Date getDataDevoluçao() {
        return dataDevoluçao;
    }

    public void setDataDevoluçao(Date dataDevoluçao) {
        this.dataDevoluçao = dataDevoluçao;
    }

    public ArrayList<Produto> getListaProdutos() {
        return listaProdutos;
    }

    public void setListaProdutos(ArrayList<Produto> listaProdutos) {
        this.listaProdutos = listaProdutos;
    }
}
