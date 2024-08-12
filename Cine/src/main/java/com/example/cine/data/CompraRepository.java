package com.example.cine.data;



import com.example.cine.logic.Compra;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component("compraRepository")
public class CompraRepository {
    List<Compra> list;
    public CompraRepository(){
        list=new ArrayList<>();
    }
    public Compra findById(String id) throws Exception{
        Compra r = list.stream()
                .filter( e-> e.getNumeroTiquete().equals(id))
                .findFirst().get();
        return r.clone();
    }
    public Compra save(Compra c){
        Compra aux=c.clone();
        list.add(aux);
        return aux;
    }
    public List<Compra> findAll(){
        return list;
    }

}