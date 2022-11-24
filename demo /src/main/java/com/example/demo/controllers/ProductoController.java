package com.example.demo.controllers;



import com.example.demo.models.ProductoModel;
import com.example.demo.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping()
    public ArrayList<ProductoModel> obtenerProducto(){
        return productoService.obtenerProducto();
    }

    @PostMapping()
    public ProductoModel guardarProducto  (@RequestBody ProductoModel producto){
        return this.productoService.guardarProducto(producto);
    }

    @GetMapping(path="/{id}")
    public Optional<ProductoModel> obtenerProductoPorId(@PathVariable("id") Long id){
        return this.productoService.obtenerPorId(id);
    }



    @GetMapping(path="/categorias/{categoria}")
    public ArrayList<ProductoModel> obtenerProductos(@PathVariable("categoria") String categoria) {
        return this.productoService.obtenerPorCategoria(categoria);
    }


    @GetMapping("/query")
    public ArrayList<ProductoModel> obtenerProductosN(@RequestParam("nombre") String nombre) {
        return this.productoService.obtenerPorNombre(nombre);
    }



    @DeleteMapping(path="/{id}")
    public String eliminarPorId(@PathVariable("id")Long id){
        boolean ok = this.productoService.eliminarProducto(id);
        if (ok){
            return "Se elimino el producto con id" +  id;
        }else {
            return "No pudo eliminar el producto con id" +  id;
        }
    }

}
