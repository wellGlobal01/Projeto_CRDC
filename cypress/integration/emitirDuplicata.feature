#language: pt
Funcionalidade: Menu lateral
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Validar menu lateral
    Dado que eu acesso o sistema com um usuário válido
    Quando realizo uma emissão de duplicata
    Então realizo uma validação para garantir a duplicata emitida 
