
package com.tienda.backend.model;
import jakarta.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "orden_de_compra")
public class OrdenDeCompra {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

    @Column(name = "cantidad", nullable = false, length = 100)
    private int cantidad;

    @Column(name = "fecha_compra", nullable = false, length = 100)
    private Date fechaCompra;


    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "vendedor_id", nullable = false)
    private Vendedor vendedor;

    @ManyToOne
    @JoinColumn(name = "metodo_pago_id", nullable = false)
    private MetodoDePago metodoDePago;

    @ManyToOne
    @JoinColumn(name = "entrega_id", nullable = false)
    private Entregas entregas;

    public OrdenDeCompra(Long id, int cantidad, Date fechaCompra, Cliente cliente, Producto producto, Vendedor vendedor, MetodoDePago metodoDePago, Entregas entregas) {
        this.id = id;
        this.cantidad = cantidad;
        this.fechaCompra = fechaCompra;
        this.cliente = cliente;
        this.producto = producto;
        this.vendedor = vendedor;
        this.metodoDePago = metodoDePago;
        this.entregas = entregas;
    }

    public OrdenDeCompra() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Vendedor getVendedor() {
        return vendedor;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }

    public MetodoDePago getMetodoDePago() {
        return metodoDePago;
    }

    public void setMetodoDePago(MetodoDePago metodoDePago) {
        this.metodoDePago = metodoDePago;
    }

    public Entregas getEntregas() {
        return entregas;
    }

    public void setEntregas(Entregas entregas) {
        this.entregas = entregas;
    }

    

}