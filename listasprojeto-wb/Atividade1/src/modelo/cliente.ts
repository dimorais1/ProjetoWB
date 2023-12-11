import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public setProdutosConsumidos(produtos: Produto[]): void {
        this.produtosConsumidos = produtos;
    }
    public setServicosConsumidos(servicos: Servico[]): void {
        this.servicosConsumidos = servicos;
    }
    public get getQtdServicosEProdutos(): number {
        return this.getProdutosConsumidos.length + this.getServicosConsumidos.length
    }
    public get getGenero(): string {
        return this.genero
    }
    public get getTotalGasto(): number {
        let total: number = 0;
        this.produtosConsumidos.forEach(produto => {
            total += produto.valor
        });
        this.servicosConsumidos.forEach(servico => {
            total += servico.valor
        });
        return total
    }
}