#language: pt
Funcionalidade: Dados para liquidação


@Credor
Cenario: Validação opções de Dados
Dado Que o usuário queira informar os dados de Pix
Quando Acessar a tela de configurações
Então Sistema deve apresentar as opções Pix, Conta Bancária

@teste
Cenario: Realizar cadastro_Tipo_Doc CPF
Dado que o usuário selecione o tipo de Dado CPF em pix
Quando Informar o cpf no campo e clicar em Confirmar
Então o sistema deve salvar o CPF

@testeCNPJ
Cenario: Realizar cadastro_Tipo_Doc  CNPJ
Dado que o usuário selecione o tipo de Dado CNPJ em pix
Quando Informar o CNPJ no campo e clicar em Confirmar
Então Sistema deve salvar O CNPJ

@testechave
Cenario: Realizar cadastro_Tipo_chave aleatória
Dado Que o usuário selecione o tipo de Dado Chave Aleatória em pix
Quando Informar a chave no campo e clicar em Confirmar
Então O sistema deve salvar dados de chave aleatoria


@testeTel
Cenario: Realizar cadastro_Tipo_telefone
Dado Que o usuário selecione o tipo de Dado telefone em pix
Quando Informar o número do tefone no campo e clicar em Confirmar
Então Sistema deve salvar o telefone

@testeMail
Cenario: Realizar cadastro_Tipo_e-mail
Dado Que o usuário selecione o tipo de Dado e-mail em pix
Quando Informar o e-mail no campo e clicar em Confirmar
Então Sistema deve salvar o e-mail

@testeContaBancaria
Cenario: Realizar cadastro conta bancária
Dado Que o usuário selecione o tipo de Dado conta bancária
Quando Informar os dados da conta e clicar em Confirmar
Então Sistema deve salvar dados da conta bancária