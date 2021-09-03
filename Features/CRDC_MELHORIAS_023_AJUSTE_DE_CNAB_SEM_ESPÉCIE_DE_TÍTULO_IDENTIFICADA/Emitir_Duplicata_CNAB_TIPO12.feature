#language: pt
Funcionalidade: Emitir duplicata
     Eu como CREDOR desejo emitir uma duplicata. 


  Cenario: Emitir uma duplicata valida CNAB título 14
    Dado que o usuário selecione arquivo CNAB com especie de título 12
    Quando O usuario clicar em Carregar
    Então Sistema carrega arquivo possibilitando emissão de duplicata de serviço
