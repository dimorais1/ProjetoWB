package com.wb.wbbackend.repositorios;

import com.wb.wbbackend.entidades.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioProduto extends JpaRepository<Produto, Long> {
}