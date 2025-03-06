
package com.tienda.backend.service;

import com.tienda.backend.model.*;
import com.tienda.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class VendedorService {
    @Autowired
    private VendedorRepository vendedorRepository;

    public List<Vendedor> listarVendedores() {
        return vendedorRepository.findAll();
    }
}
