#language: pt
Funcionalidade: Emissão de duplicatas
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Emitir duplicata com erro TIPO XML
    Dado que eu acesso o sistema com um usuário válido
    Quando o sistema identificar que a data está vencida
    Então sistema deve apresentar a MSG Duplicatas não podem ser emitidas com data de vencimento menor que data atual 

