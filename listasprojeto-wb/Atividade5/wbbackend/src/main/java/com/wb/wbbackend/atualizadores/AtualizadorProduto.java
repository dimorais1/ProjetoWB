package com.wb.wbbackend.atualizadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.verificadores.VerificadorStringNula;

@Component
public class AtualizadorProduto implements Atualizador<Produto> {
	@Autowired
	private VerificadorStringNula verificadorString;

	@Override
	public void atualizar(Produto alvo, Produto atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getValor())) {
			alvo.setValor(atualizacao.getValor());
		}
	}
}