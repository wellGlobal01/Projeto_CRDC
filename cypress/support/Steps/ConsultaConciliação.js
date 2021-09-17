import PageConsultarConciliação from "../pageObjects/ConsultarConciliação";
const page = new PageConsultarConciliação();

Given(/^Que o cliente esteja na tela de Gestão de conciliação$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.menu();
});

Then(
  /^sitema deve exibir os filtros Data e Documento ou Nome do Participante$/,
  () => {
    page.ValidarFiltros();
  }
);

///validarcolunas
Given(  /^Que o cliente tenha realizado pesquisa desejada na tela de Gestão de conciliação$/,  () => {
    page.realizarfiltro();
});

When(/^O usuário clicar em filtrar$/, () => {
  page.clicaremFiltrar();
});

Then(/^Sitema deve exibir as colunas em grid ano mes, participante, qtd total de ativos, qtd ativos não conciliados, total e ações$/,
  () => {
    page.ValidarColuna();
});

///exportarcsv
Given(/^Que usuário tenha clicado na opção de exportação CSV$/, () => {
      page.opções();
    });
  
   
  Then(
    /^Sitema deve baixar o arquivo CSV$/,    () => {
      page.exportarcsv();


///filtrarporparticipante
Given(/^Que o cliente tenha realizado o filtro por Participante$/,  () => {
    page.filtrarporparticipante();
    
});

When(/^O usuário clicar em filtrar$/, () => {
    page.clicaremFiltrar();

});

Then(/^Sitema deve exibir o resultado da pesquisa em grid$/,  () => {
    page.retornodoparticipanteconsultado();
   
});




///filtrarpordata
Given(/^Que o cliente tenha realizado o filtro por data$/,  () => {
    page.filtropordata();
    
});

When(/^O usuário clicar em filtrar$/, () => {
    page.clicaremFiltrar();

});

Then(/^Sitema deve exibir o resultado da pesquisa em grid$/,  () => {
    page.retornodoparticipanteconsultado();
   
});

///filtradatamaior
Given(/^Que o cliente informe o mês maior que o atual$/,  () => {
    page.filtropordatamaior();
    
});

Then(/^Sitema não deve permitir que o usuário informe o mês maior que o atual$/,  () => {
    page.validarmsgdatamaior();
   
});





    });



