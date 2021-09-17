#language: pt
Funcionalidade: Consulta Conciliação

Cenario: Validar  filtros
Dado Que o cliente esteja na tela de Gestão de conciliação
Então sitema deve exibir os filtros Data e Documento ou Nome do Participante


Cenario: Validar  colunas
Dado Que o cliente tenha realizado pesquisa desejada na tela de Gestão de conciliação
Quando O usuário clicar em filtrar
Então Sitema deve exibir as colunas em grid ano mes, participante, qtd total de ativos, qtd ativos não conciliados, total e ações

Cenario: Exportar CSV
Dado Que usuário tenha clicado na opção de exportação CSV
Então Sitema deve baixar o arquivo CSV

Cenario: Filtrar por Participantes
Dado Que o cliente tenha realizado o filtro por Participante
Quando O usuário clicar em filtrar
Então Sitema deve exibir o resultado da pesquisa em grid

Cenario: Filtrar por Mês ano
Dado Que o cliente tenha realizado o filtro por data
Quando O usuário clicar em filtrar
Então Sitema deve exibir o resultado da pesquisa em grid

Cenario: Filtrar por Mês maior que atual
Dado Que o cliente informe o mês maior que o atual
Então Sitema não deve permitir que o usuário informe o mês maior que o atual