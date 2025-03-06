package com.tienda.backend.service;
import com.tienda.backend.model.Entregas;
import com.tienda.backend.repository.EntregasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;





@Service
public class EntregasService {
    @Autowired
    private EntregasRepository entregasRepository;

    public List<Entregas> listarEntregas() {
        return entregasRepository.findAll();
    }
}

