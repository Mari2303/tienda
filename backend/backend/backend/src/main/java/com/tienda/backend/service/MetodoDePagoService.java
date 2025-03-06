

package com.tienda.backend.service;

import com.tienda.backend.model.MetodoDePago;
import com.tienda.backend.repository.MetodoDePagoRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class MetodoDePagoService {
    @Autowired
    private MetodoDePagoRepository metodoDePagoRepository;

    public List<MetodoDePago> listarMetodosDePago() {
        return metodoDePagoRepository.findAll();
    }
}