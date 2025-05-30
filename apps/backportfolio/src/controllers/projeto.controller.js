import projetoService from "../services/projeto.service.js";

const CreateController = async (req, res) => {//req é a requisicao do usuário, res é a resposta que vamos dar
    try {
        const {title, image, description, link, content, slug} = req.body; //desestruturação do body da requisição
        if (!title || !image || !description || !link || !content || !slug) {
            return res.status(400).json({message: "Todos os campos são obrigatórios"}); //se algum campo estiver vazio, retorna erro
        }

        const createdProjeto = await projetoService.CreateService(req.body); //chama o serviço de criação de projeto, passando o body da requisição, o await sempre aparece quando a funçao é async
        if (!createdProjeto) {
            return res.status(500).json({message: "Erro ao criar projeto"}); //se nao conseguir criar o projeto, retorna erro
        }
        return res.status(201).json(createdProjeto); //se conseguir criar o projeto, retorna o projeto criado com status 201

    } catch (error) {
        return res.status(500).json({message: "Erro ao criar projeto", error: error.message}); //se der erro, retorna erro
    }
}

const DeleteController = async (req, res) => {//req é a requisicao do usuário, res é a resposta que vamos dar
    try {
        const {_id} = req.body; //desestruturação do body da requisição
        if (!_id) {
            return res.status(400).json({message: "O ID é obrigatório"}); //se algum campo estiver vazio, retorna erro
        }

        const deletedProjeto = await projetoService.DeleteService(_id); //chama o serviço de criação de projeto, passando o body da requisição, o await sempre aparece quando a funçao é async
        if (!deletedProjeto) {
            return res.status(500).json({message: "Erro ao deletar projeto"}); //se nao conseguir criar o projeto, retorna erro
        }
        return res.status(201).json(deletedProjeto); //se conseguir criar o projeto, retorna o projeto criado com status 201

    } catch (error) {
        return res.status(500).json({message: "Erro ao deletar projeto", error: error.message}); //se der erro, retorna erro
    }
}

const FindAllController = async (res) => {
    try {
        const findAllProjetos = await projetoService.FindAllService(); //chama o serviço de busca de todos os projetos
        return res.status(200).json(findAllProjetos); //retorna os projetos encontrados com status 200
    } catch (error) {
        return res.status(500).json({message: "Erro ao encontrar projetos", error: error.message}); //se der erro, retorna erro
        
    }
}

const FindyIdController = async (req, res) => {
    try {
        const {_id} = req.body; //desestruturação do body da requisição
        if (!_id){
            return res.status(400).json({message: "O ID é obrigatório"}); //se o id estiver vazio, retorna erro
        }
        const findIdProjeto = await projetoService.FindByIdService(_id); //chama o serviço de busca de um projeto pelo id, passando o id da requisição
        
        if (!findIdProjeto) {
            return res.status(404).json({message: "Projeto não encontrado"}); //se nao encontrar o projeto, retorna erro
        }
        return res.status(200).json(findIdProjeto); //se encontrar o projeto, retorna o projeto encontrado com status 200
    } catch (error) {
        return res.status(500).json({message: "Erro ao encontrar projeto", error: error.message}); //se der erro, retorna erro
    }
}

const UpdateController = async (req, res) => {
    try {
        const {_id} = req.body;
        return res.status(400).json({message: "O ID é obrigatório"}); //se o id estiver vazio, retorna erro

        const updateProjeto = await projetoService.UpdateService(_id, req.body); //chama o serviço de atualização de um projeto pelo id, passando o id e o body da requisição
        if (!updateProjeto){
            return res.status(404).json({message: "Projeto não encontrado"}); //se nao encontrar o projeto, retorna erro
        }
        return res.status(200).json(updateProjeto); //se conseguir atualizar o projeto, retorna o projeto atualizado com status 200
        
    } catch (error) {
        return res.status(500).json({message: "Erro ao atualizar projeto", error: error.message}); //se der erro, retorna erro
    }
    
}

export default {CreateController, DeleteController, FindAllController, FindyIdController, UpdateController}; //exporta os controllers para serem usados nas rotas



