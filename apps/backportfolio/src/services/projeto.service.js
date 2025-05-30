import Projeto from "../models/Projeto.js";

const CreateService =(body)=> Projeto.create(body); //cria um novo projeto, body porque são muitos atributos

const FindAllService = () => Projeto.find(); //busca todos os projetos, nao precisa de nenhum parametro do usuário

const FindByIdService = (_id) => Projeto.findById(_id); //busca um projeto pelo id

const UpdateService = (_id, body) => Projeto.findByIdAndUpdate(_id, body, {new: true}); //atualiza um projeto pelo id, body porque são muitos atributo

const DeleteService = (_id) => Projeto.findByIdAndDelete(_id); //deleta um projeto pelo id  

export default {CreateService, FindAllService, FindByIdService, UpdateService, DeleteService}; //exporta os serviços para serem usados no controller