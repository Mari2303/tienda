
package com.tienda.backend.repository;

import com.tienda.backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Long> {}