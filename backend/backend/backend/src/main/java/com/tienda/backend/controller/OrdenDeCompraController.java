package com.tienda.backend.controller;

import com.tienda.backend.model.*;
import com.tienda.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/ordenesDeCompra")
@CrossOrigin(origins = "http://localhost:5500")
public class OrdenDeCompraController {
    @Autowired
    private OrdenDeCompraService ordenDeCompraService;

    @GetMapping
    public List<OrdenDeCompra> listarOrdenesDeCompra() {
        return ordenDeCompraService.listarOrdenesDeCompra();
    }
}
