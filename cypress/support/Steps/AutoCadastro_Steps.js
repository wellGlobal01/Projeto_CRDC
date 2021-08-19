import TelaCadastro from '../pageObjects/AutoCadastroPage'
const page = new TelaCadastro

Given(/^que eu queira realizar o auto cadastro PJ, com um representante já existente tipo Credor$/, () => {
   page.AbrirBrowser();
   page.btn_cadastro();
   page.RealizarCadastroCredor();
});

Given(/^que eu queira realizar o auto cadastro PJ, com um representante já existente tipo Devedor$/, () => {
   page.AbrirBrowser();
   page.btn_cadastro();
   page.RealizarCadastroDevedor();
});

When(/^o sistema solicitar o CPF em Representate legal$/, () => {
  page.SolicitarRepresentante();
});

Then(/^Finalizo o cadastro$/, () => {
 page.ValidarPoliticas();
 page.ValidarTermosDeUso();
 page.ConcluirCadastro();
 page.ValidarMensagemInclusão();
});  