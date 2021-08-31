#language: pt
Funcionalidade: Emissão de duplicatas
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Emitir duplicata vencimento D-1 - XML
    Dado que eu acesso o sistema com um usuário válido
    Quando o sistema identificar que a data está vencida
    Então sistema deve apresentar a MSG Duplicatas não podem ser emitidas com data de vencimento menor que data atual 

Cenario: Emitir duplicata com erro D-1 - CNAB
    Dado que eu acesso o sistema com um usuário válido
    Quando o sistema identificar que a data está vencida
    Então sistema deve apresentar a MSG Duplicatas não podem ser emitidas com data de vencimento menor que data atual

Cenario: Emitir duplicata com erro baseada no campo “Dias p/ Vcto"
    Dado que eu acesso o sistema com um usuário válido
    Quando realizo uma emissão de duplicata com erros
    Então sistema deve apresentar a MSG Duplicatas não podem ser emitidas com data de vencimento menor que data atual 
