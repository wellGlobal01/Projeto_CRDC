#language: pt
Funcionalidade: Dados para liquidação

@participante
Cenario: Validação opções de Dados
Dado Que o usuário queira informar os dados de Pix
Quando Acessar a tela de configurações Perfil Participante
Então Sistema deve apresentar as opções Pix, Conta Bancária

@teste
Cenario: Realizar cadastro_Tipo_Doc CNPJ
Dado que o usuário selecione o tipo de Dado CNPJ em pix Perfil Participante
Então o sistema deve salvar o CNPJ

@testechave
Cenario: Realizar cadastro_Tipo_chave aleatória
Dado Que o usuário selecione o tipo de Dado Chave Aleatória em pix Perfil Participante
Quando Informar a chave no campo e clicar em Confirmar
Então O sistema deve salvar dados de chave aleatoria

@testeTel
Cenario: Realizar cadastro_Tipo_telefone
Dado Que o usuário selecione o tipo de Dado telefone em pix Perfil Participante
Quando Informar o número do tefone no campo e clicar em Confirmar
Então Sistema deve salvar o telefone

@testeMail
Cenario: Realizar cadastro_Tipo_e-mail
Dado Que o usuário selecione o tipo de Dado e-mail em pix Perfil Participante
Quando Informar o e-mail no campo e clicar em Confirmar
Então Sistema deve salvar o e-mail

@testeContaBancaria
Cenario: Realizar cadastro conta bancária
Dado Que o usuário selecione o tipo de Dado conta bancária Perfil Participante
Quando Informar os dados da conta e clicar em Confirmar
Então Sistema deve salvar dados da conta bancária

