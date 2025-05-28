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

