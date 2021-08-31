#language: pt
Funcionalidade: Emitir duplicata
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Emitir uma duplicata valida
    Dado que eu acesso o sistema com um usuário válido
    Quando realizo uma emissão de duplicata
    Então realizo uma validação para garantir a duplicata emitida 
