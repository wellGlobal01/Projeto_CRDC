#language: pt
Funcionalidade: Emitir duplicata
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Validar XML
    Dado DADO que o usuário solicite a emissao do XML
    Quando o sistema identificar que o arquivo foi modificado
    Então sitema deve apresentar a msg Assinatura digital do XML inválida