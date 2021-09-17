#language: pt
Funcionalidade: Emitir duplicata
Eu como CREDOR desejo emitir uma duplicata.


Cenario: Validar coluna Origem
Dado Que o usuário tenha acessado o menu Consultar Operações
Quando Realizar uma consulta
Então Sistema deve apresentar a coluna Origem em grid
