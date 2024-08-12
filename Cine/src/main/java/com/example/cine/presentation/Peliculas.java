package com.example.cine.presentation;

import com.example.cine.logic.Pelicula;
import com.example.cine.logic.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/peliculas")
public class Peliculas {
    @Autowired
    Service service;

    @GetMapping("/fechas")
    public List<String> fechas(){
        Date date=new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        List<String> dates=new ArrayList<String>();
        for(int i=0; i<3;i++){
            dates.add(sdf.format(date));
            date.setDate(date.getDate()+1);
        }
        return dates;
    }

    @GetMapping("/byFecha/{date}")
    public List<Pelicula> peliculasByFecha(@PathVariable String date){
        try{
            return service.findMovieByDate(date);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
