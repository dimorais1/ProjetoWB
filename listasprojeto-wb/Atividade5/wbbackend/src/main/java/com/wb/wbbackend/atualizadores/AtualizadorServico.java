package com.wb.wbbackend.atualizadores;

import com.wb.wbbackend.entidades.Servico;
import com.wb.wbbackend.verificadores.VerificadorStringNula;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AtualizadorServico implements Atualizador<Servico> {
	@Autowired
	private VerificadorStringNula verificadorString;

	@Override
	public void atualizar(Servico alvo, Servico atualizacao) {
		if (!verificadorString.verificar(atualizacao.getNome())) {
			alvo.setNome(atualizacao.getNome());
		}
		if (!verificadorString.verificar(atualizacao.getValor())) {
			alvo.setValor(atualizacao.getValor());
		}
	}
}