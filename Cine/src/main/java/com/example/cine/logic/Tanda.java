package com.example.cine.logic;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Tanda {
    private String id;
    private Pelicula pelicula;
    private String date;
    private String hour;
    private int room;
    public  Tanda(String id, Pelicula pelicula, String date, String hour, int room) {
        this.id = id;
        this.pelicula = pelicula;
        this.date = date;
        this.hour = hour;
        this.room = room;
    }



    public Tanda(){
        this.id="0";
        this.pelicula=new Pelicula();
        this.date=" ";
        this.hour="0";
        this.room=0;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public Pelicula getPelicula() {
        return pelicula;
    }
    public void setPelicula(Pelicula pelicula) {
        this.pelicula = pelicula;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getHour() {
        return hour;
    }
    public void setHour(String hour) {
        this.hour = hour;
    }
    public int getRoom() {
        return room;
    }
    public void setRoom(int room) {
        this.room = room;
    }
    public Tanda clone(){
        return new Tanda(id, pelicula, date, hour, room);
    }
}
