
package com.tienda.backend.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "vendedor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", nullable = false,  length = 100)
    private String nombre;

    @Column(name = "tienda", nullable = false, length = 100)
    private String tienda;

    // Relación con OrdenDeCompra (Un vendedor tiene muchas órdenes)
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL)
    private List<OrdenDeCompra> ordenesDeCompra;


    public Vendedor(Long id, String nombre, String tienda) {
        this.id = id;
        this.nombre = nombre;
        this.tienda = tienda;
    }

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

    public String getTienda() {
        return tienda;
    }

    public void setTienda(String tienda) {
        this.tienda = tienda;
    }

    public List<OrdenDeCompra> getOrdenesDeCompra() {
        return ordenesDeCompra;
    }

}
