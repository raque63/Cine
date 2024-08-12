package com.example.cine.logic;

public class Compra {
    private String numeroTiquete;
    private String cedulaC;
    private String nombreC;
    private String numTarjeta;
    private Tanda tanda;
    private int canBoletos;
    private int canBoletosEspeciales;

    public Compra(String numeroTiquete,String cedulaC,String nombreC,String numTarjeta,Tanda tanda, int canBoletos,int canBoletosEspeciales){
        this.numeroTiquete = numeroTiquete;
        this.cedulaC = cedulaC;
        this.nombreC = nombreC;
        this.numTarjeta = numTarjeta;
        this.tanda = tanda;
        this.canBoletos = canBoletos;
        this.canBoletosEspeciales = canBoletosEspeciales;
    }

    public Compra(){
        this.numeroTiquete = " ";
        this.cedulaC = " ";
        this.nombreC = " ";
        this.numTarjeta = " ";
        this.tanda = new Tanda();
        this.canBoletos = 0;
        this.canBoletosEspeciales = 0;
    }

    public String getNumeroTiquete() {
        return numeroTiquete;
    }

    public void setNumeroTiquete(String numeroTiquete) {
        this.numeroTiquete = numeroTiquete;
    }

    public String getCedulaC() {
        return cedulaC;
    }

    public void setCedulaC(String cedulaC) {
        this.cedulaC = cedulaC;
    }

    public String getNombreC() {
        return nombreC;
    }

    public void setNombreC(String nombreC) {
        this.nombreC = nombreC;
    }

    public String getNumTarjeta() {
        return numTarjeta;
    }

    public void setNumTarjeta(String numTarjeta) {
        this.numTarjeta = numTarjeta;
    }

    public Tanda getTanda() {
        return tanda;
    }

    public void setTanda(Tanda tanda) {
        this.tanda = tanda;
    }

    public int getCanBoletos() {
        return canBoletos;
    }

    public void setCanBoletos(int canBoletos) {
        this.canBoletos = canBoletos;
    }

    public int getCanBoletosEspeciales() {
        return canBoletosEspeciales;
    }

    public void setCanBoletosEspeciales(int canBoletosEspeciales) {
        this.canBoletosEspeciales = canBoletosEspeciales;
    }

    public Compra clone(){
        return new Compra(numeroTiquete, cedulaC, nombreC, numTarjeta, tanda, canBoletos, canBoletosEspeciales);
    }
}
