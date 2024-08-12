package com.example.cine.logic;

import java.util.ArrayList;
import java.util.List;

public class Pelicula {
    private String id;
    private String name;
    private String format;
    private String hour;
    private String type;
    private String restriction;
    private double price;
    private double specialPrice;
    private List<Tanda> tandas;

    public Pelicula(String id, String name, String format, String hour, String type,String restriction, double price, double specialPrice) {
        this.id = id;
        this.name=name;
        this.format=format;
        this.hour=hour;
        this.type=type;
        this.restriction=restriction;
        this.price=price;
        this.specialPrice=specialPrice;
        this.tandas=new ArrayList<>();
    }
    public Pelicula(){
        this.id = " ";
        this.name=" ";
        this.format=" ";
        this.hour=" ";
        this.type=" ";
        this.restriction=" ";
        this.price=0;
        this.specialPrice=0;
        this.tandas=new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

        public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Tanda> getTandas() {
        return tandas;
    }

    public void setTandas(List<Tanda> tandas) {
        this.tandas = tandas;
    }

    public String getRestriction() {
        return restriction;
    }

    public void setRestriction(String restriction) {
        this.restriction = restriction;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getSpecialPrice() {
        return specialPrice;
    }

    public void setSpecialPrice(double specialPrice) {
        this.specialPrice = specialPrice;
    }
    public Pelicula clone(){
        return new Pelicula(id,name, format, hour,type, restriction,price,specialPrice);
    }
}
