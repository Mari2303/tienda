package com.tienda.backend.controller;

import com.tienda.backend.model.*;
import com.tienda.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/envios")
public class EntregasController {
    @Autowired
    private EntregasService entregasService;

    @GetMapping
    public List<Entregas> listarEnvios() {
        return entregasService.listarEntregas();
    }
}
