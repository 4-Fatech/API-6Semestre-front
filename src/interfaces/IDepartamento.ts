
interface IUsuario {
    id_usuario: number,
    nome_usuario: string,
    email: string,
    matricula_empresa: string,
    senha: string,
    tipo_usuario: string,
    delete_at: null,
    create_at: string,
    update_at: string,
    deleted: boolean,
    desativado: boolean
}
interface IRegistroDepartamento {
    nome_departamento?: string;
    id_departamento?: number;
    delete_at: null,
    create_at: string,
    update_at: string,
    deleted: boolean,
    desativado: boolean
    responsavel_id: IUsuario
}

export default interface IDepartamento {
    registro: IRegistroDepartamento[]
}