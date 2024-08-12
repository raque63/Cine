package com.example.cine.logic;

import com.example.cine.data.CompraRepository;
import com.example.cine.data.PeliculaRepository;
import com.example.cine.data.TandaRepository;
import com.example.cine.presentation.Compras;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@org.springframework.stereotype.Service("Service")

public class Service {
    @Autowired
    private PeliculaRepository peliculas;
    @Autowired
    private TandaRepository tandas;
    @Autowired
    private CompraRepository compras;


    public Pelicula findById(String id) throws Exception {
        return peliculas.findById(id);
    }

    public List<Pelicula> findAll(){
        return peliculas.findAll();
    }
    public List<Tanda> findTandaByDate(String date){
        return tandas.findByFecha(date);
    }
    public List<Pelicula> findMovieByDate(String date) throws Exception {
        List<Tanda> tandas=findTandaByDate(date);
        List<Pelicula> movies=peliculas.findAll();
        List<Pelicula> aux=new ArrayList<>();
        Tanda clon;
        Pelicula movie;

        for(Pelicula p:movies){
            movie=p.clone();
            for(Tanda t: tandas){
                if(Objects.equals(t.getPelicula().getId(), movie.getId())){
                    clon=t.clone();
                    clon.setPelicula(null);
                    movie.getTandas().add(clon);
                }
            }
            if(!movie.getTandas().isEmpty()){
                aux.add(movie);
            }
        }

        return aux;
    }
    public Compra saveC(Compra c){
       return compras.save(c.clone());
    }
    public List<Compra> findAllC(){
        return compras.findAll();
    }

    public Compra findByIdC(String num) throws Exception {
        return compras.findById(num);
    }
}