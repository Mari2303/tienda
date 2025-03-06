



package com.tienda.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date;



@Entity
@Table(name = "orden_de_compra")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrdenDeCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente cliente;
    
    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;
    
    @ManyToOne
    @JoinColumn(name = "id_vendedor", nullable = false)
    private Vendedor vendedor;
    
    @ManyToOne
    @JoinColumn(name = "id_metodo_de_pago", nullable = false)
    private MetodoDePago metodoDePago;
    
    @ManyToOne
    @JoinColumn(name = "id_envio", nullable = false)
    private Entregas entregas;
    
    private int cantidad;
    private Date fechaCompra;
}

