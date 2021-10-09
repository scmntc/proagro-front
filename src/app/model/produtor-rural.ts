export class ProdutorRural {
  id?: number;
  deletado: boolean = false;
  nome: string = "";
  email: string = "";
  cpf: string = "";

  static formatarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
