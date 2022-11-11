package com.example.demo.services;

import com.example.demo.models.ProductoModel;
import com.example.demo.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository productoRepository;

    public ArrayList<ProductoModel> obtenerProducto(){
        return (ArrayList<ProductoModel>) productoRepository.findAll();
  }
    public ProductoModel guardarProducto(ProductoModel producto){

        return productoRepository.save(producto);
    }

    public Optional<ProductoModel> obtenerPorId(Long id){

        return productoRepository.findById(id);
    }

    public ArrayList<ProductoModel> obtenerPorCategoria(String categoria){
        return  productoRepository.findByCategoria(categoria);
    }

    public ArrayList<ProductoModel> obtenerPorNombre(String nombre){
        return  productoRepository.findByNombre(nombre);
    }



    public boolean eliminarProducto(Long id){
         try{
             productoRepository.deleteById(id);
             return true;
          } catch(Exception err){
                return false;
         }

    }


}
