package com.example.cine.presentation;

import com.example.cine.data.CompraRepository;
import com.example.cine.logic.Compra;
import com.example.cine.logic.Pelicula;
import com.example.cine.logic.Service;
import com.example.cine.logic.Tanda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/compras")
public class Compras {
    @Autowired
    Service service;

    @PostMapping
    public Compra create(@RequestBody Compra compra) throws Exception {
        Pelicula p=service.findById(compra.getTanda().getPelicula().getId());
        compra.getTanda().setPelicula(p.clone());
        return service.saveC(compra);
    }
    @GetMapping
    public List<Compra> findAll(){
        return service.findAllC();
    }
    @GetMapping("/{numT}")
    public Compra findById(@PathVariable String numT){
        try{
            return service.findByIdC(numT);
        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}