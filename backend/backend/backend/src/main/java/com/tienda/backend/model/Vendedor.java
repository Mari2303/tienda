
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
    
    private String nombre;
    private String tienda;

    // Relación con OrdenDeCompra (Un vendedor tiene muchas órdenes)
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL)
    private List<OrdenDeCompra> ordenesDeCompra;
}
