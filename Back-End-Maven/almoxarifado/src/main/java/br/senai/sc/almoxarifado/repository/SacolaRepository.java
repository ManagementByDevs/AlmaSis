package br.senai.sc.almoxarifado.repository;

import br.senai.sc.almoxarifado.model.entities.Sacola;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SacolaRepository extends JpaRepository<Sacola, Long> {
}
