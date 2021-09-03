import PageConfDadosLiquidacao from "../pageObjects/Dados_Liquidação_page";
const page = new PageConfDadosLiquidacao

Given(/^Que o usuário queira informar os dados de Pix$/, () => {
  page.AbrirBrowser();
});

When(/^Acessar a tela de configurações$/, () => {
  page.PreencherCampos();
  page.AcessarMenuCredor();

});

When(/^Acessar a tela de configurações Perfil Participante$/, () => {
  page.PreencherCampos();
   page.TrocarPerfilPix();
   page.AcessarMenuPartic();
});


Then(/^Sistema deve apresentar as opções Pix, Conta Bancária$/, () => {
    page.ConfigurarDadosLiquidacao();
});




//2
Given(/^que o usuário selecione o tipo de Dado CPF em pix$/, () => {
    page.AbrirBrowser();
    page.PreencherCampos();
    page.AcessarMenuCredor();
    page.selecionarCPF();
});

Given(/^que o usuário selecione o tipo de Dado CNPJ em pix Perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilPix();
  page.AcessarMenuPartic();
  page.selecionarCNPJParticipante();
});
  
When(/^Informar o cpf no campo e clicar em Confirmar$/, () => {
    page.PreencherCPF();
});

Then(/^o sistema deve salvar o CNPJ$/, () => {
  page.confirmar();
});

  
Then(/^o sistema deve salvar o CPF$/, () => {
      page.confirmar();
});



///3

Given(/^que o usuário selecione o tipo de Dado CNPJ em pix$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.AcessarMenuCredor();
  page.selecionarCNPJ();
});

Given(/^que o usuário selecione o tipo de Dado CNPJ em pix perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilPix();
  page.AcessarMenuPartic();
  page.selecionarCNPJ();
});
When(/^Informar o CNPJ no campo e clicar em Confirmar$/, () => {
  page.PreencherCNPJ();
});


Then(/^Sistema deve salvar O CNPJ$/, () => {
    page.confirmar();
});




///4
Given(/^Que o usuário selecione o tipo de Dado Chave Aleatória em pix$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.AcessarMenuCredor();
  page.selecionarChaveAleatória();
});

Given(/^Que o usuário selecione o tipo de Dado Chave Aleatória em pix Perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilPix();
  page.AcessarMenuPartic();
  page.selecionarChaveAleatória();
});

When(/^Informar a chave no campo e clicar em Confirmar$/, () => {
  page.PreencherChaveAleatória();
});

Then(/^O sistema deve salvar dados de chave aleatoria$/, () => {
    page.confirmar();
});
  



///5
Given(/^Que o usuário selecione o tipo de Dado conta bancária$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.AcessarMenuCredor();
  page.SelecionarContaBancaria();
});

Given(/^Que o usuário selecione o tipo de Dado conta bancária Perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilContaB();
  page.AcessarMenuPartic();
  page.SelecionarContaBancariaParticipante();
});



When(/^Informar os dados da conta e clicar em Confirmar$/, () => {
  page.PreencherDadosBancoParticipante();
});

Then(/^Sistema deve salvar dados da conta bancária$/, () => {
    page.confirmar();
});



///6
Given(/^Que o usuário selecione o tipo de Dado telefone em pix$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.AcessarMenuCredor();
  page.selecionarTelefone();
});

Given(/^Que o usuário selecione o tipo de Dado telefone em pix Perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilPix();
  page.AcessarMenuPartic();
  page.selecionarTelefone();
});

When(/^Informar o número do tefone no campo e clicar em Confirmar$/, () => {
  page.PreencherTelefone();
});

Then(/^Sistema deve salvar o telefone$/, () => {
    page.confirmar();
});



///7
Given(/^Que o usuário selecione o tipo de Dado e-mail em pix$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.AcessarMenuCredor();
  page.selecionarMail();
});
7
Given(/^Que o usuário selecione o tipo de Dado e-mail em pix Perfil Participante$/, () => {
  page.AbrirBrowser();
  page.PreencherCampos();
  page.TrocarPerfilPix();
  page.AcessarMenuPartic();
  page.selecionarMail();
});

When(/^Informar o e-mail no campo e clicar em Confirmar$/, () => {
  page.PreencherMail();
});

Then(/^Sistema deve salvar o e-mail$/, () => {
    page.confirmar();
});
  