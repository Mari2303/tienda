
package com.tienda.backend.service;

import com.tienda.backend.model.*;
import com.tienda.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class OrdenDeCompraService {
    @Autowired
    private OrdenDeCompraRepository ordenDeCompraRepository;

    public List<OrdenDeCompra> listarOrdenesDeCompra() {
        return ordenDeCompraRepository.findAll();
    }
}