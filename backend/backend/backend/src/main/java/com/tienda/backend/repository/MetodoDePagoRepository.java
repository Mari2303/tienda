
package com.tienda.backend.repository;

import com.tienda.backend.model.MetodoDePago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetodoDePagoRepository extends JpaRepository<MetodoDePago, Long> {
}
