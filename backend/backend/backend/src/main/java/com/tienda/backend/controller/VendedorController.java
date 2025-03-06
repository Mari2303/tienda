
package com.tienda.backend.controller;

import com.tienda.backend.model.*;
import com.tienda.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/vendedores")
public class VendedorController {
    @Autowired
    private VendedorService vendedorService;

    @GetMapping
    public List<Vendedor> listarVendedores() {
        return vendedorService.listarVendedores();
    }
}