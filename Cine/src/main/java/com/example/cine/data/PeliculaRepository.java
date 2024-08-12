package com.example.cine.data;

import com.example.cine.logic.Pelicula;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("PeliculaRepository")
public class PeliculaRepository {
    List<Pelicula> list;

    public Pelicula findById(String id) throws Exception{
        Pelicula r = list.stream()
                .filter( e-> e.getId().equals(id))
                .findFirst().get();
        return r.clone();
    }
    public List<Pelicula> findAll(){
        return list;
    }

    public PeliculaRepository() {
        list = new ArrayList<Pelicula>();
        list.add(new Pelicula("batman","THE BATMAN","2D DOB", "02:55","Accion","MAY12",3000,2500));
        list.add(new Pelicula("morbius","MORBIUS","2D DOB", "01:45","Accion","TP",3500,2500));
        list.add(new Pelicula("jujutsu","JUJUTSU KAISEN 0","2D SUB","01:45","Animadas","MAY12",2000,1500));
        list.add(new Pelicula("tiposmalos","LOS TIPOS MALOS","2D DOB", "01:40","Animadas","TP",2500,2000));
        list.add(new Pelicula("sonic2","SONIC 2","2D DOB", "02:05","Animadas","TP",3000,2500));
        list.add(new Pelicula("animales3","ANIMALES FANTASTICOS 3","2D DOB", "02:20","Aventura","TP",3000,2500));
    }

}