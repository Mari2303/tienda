package com.tienda.backend.controller;

import com.tienda.backend.model.*;
import com.tienda.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/api/metodos-de-pago")
public class MetodoDePagoController {
    @Autowired
    private MetodoDePagoService metodoDePagoService;

    @GetMapping
    public List<MetodoDePago> listarMetodosDePago() {
        return metodoDePagoService.listarMetodosDePago();
    }
}

