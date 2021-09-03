#language: pt
Funcionalidade: Menu lateral
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Emitir duplicata com erro
    Dado que eu acesso o sistema com um usuário válido
    Quando realizo uma emissão de duplicata com erros
    Então realizo uma validação para garantir que a duplicata não foi emitida 
