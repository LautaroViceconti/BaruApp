package com.example.demo.models;
import javax.persistence.*;

@Entity
@Table(name="producto")

public class ProductoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    Long id;

    private String nombre;
    private String color;
    private double precio;
    private String descripcion;
    private String categoria;
    private String imagen;
    private String imagengrupo;
    private boolean nuevo;
    private boolean bestSellers;
    private boolean miCarrito;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCategoria() { return categoria; }

    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getImagengrupo() {
        return imagengrupo;
    }

    public void setImagengrupo(String imagengrupo) {
        this.imagengrupo = imagengrupo;
    }

  public boolean isNuevo() {
    return nuevo;
  }

  public void setNuevo(boolean nuevo) {
    this.nuevo = nuevo;
  }

  public boolean isBestSellers() {
    return bestSellers;
  }

  public void setBestSellers(boolean bestSellers) {
    this.bestSellers = bestSellers;
  }

  public boolean isMiCarrito() {
    return miCarrito;
  }

  public void setMiCarrito(boolean miCarrito) {
    this.miCarrito = miCarrito;
  }
}
