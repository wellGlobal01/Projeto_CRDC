#language: pt
Funcionalidade: Auto Cadastro PJ Credor e Devedor
     Eu como CREDOR/DEVEDOR desejo realizar o auto cadastro 

  @Credor
  Cenario: Realizar auto cadastro com perfil CREDOR
    Dado que eu queira realizar o auto cadastro PJ, com um representante já existente tipo Credor
    Quando  o sistema solicitar o CPF em Representate legal
    Então Finalizo o cadastro

  @Devedor
  Cenario: Realizar auto cadastro com perfil DEVEDOR
    Dado que eu queira realizar o auto cadastro PJ, com um representante já existente tipo Devedor
    Quando  o sistema solicitar o CPF em Representate legal
    Então Finalizo o cadastro



