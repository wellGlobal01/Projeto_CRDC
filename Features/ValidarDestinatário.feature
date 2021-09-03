#language: pt
Funcionalidade: Emitir duplicata
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Validar gravação do campo Destinatário
   Dado que o usuário emita um arquivo CTE 
   Quando o sistema identificar o remetende no arquivo
   Então sitema deve gravar o mesmo como Destinatário
