package com.wb.wbbackend.repositorios;

import com.wb.wbbackend.entidades.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioServico extends JpaRepository<Servico, Long> {
}