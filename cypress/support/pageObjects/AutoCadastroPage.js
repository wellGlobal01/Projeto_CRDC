///reference types = "Cypress" />

import Cadastro from "../Elementos/Cadastro";
const cadastro = new Cadastro
const ambiente = Cypress.config("baseUrl")
var CNPJ = require("cpf_cnpj").CNPJ;

class TelaCadastro {

 AbrirBrowser(){
    cy.visit(ambiente);
    cy.clearCookies()
 }

 btn_cadastro(){
     cy.get(cadastro.btn_Cadastro()).should('be.visible').click();
     cy.wait(3000)
 } 

 TempoEspera(){
    cy.wait(4000)
 }
 
 RealizarCadastroCredor(){
     cy.get(cadastro.TXTPerfilCredor()).should('be.visible')
     cy.wait(3000)
     cy.get(cadastro.TXTPerfilDevedor()).should('be.visible')
     //cy.scrollTo('center')
     cy.get(cadastro.btn_Credor()).should('be.visible').click()
     cy.wait(3000)
     cy.get(cadastro.RadioBtnPJ()).should('be.visible').click()
     cy.wait(3000)
     cy.get(cadastro.GerarCPF()).should('be.visible').type(CNPJ.generate() , {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.ValidarCampo()).should('be.visible').click()
     cy.wait(3000)
     cy.get(cadastro.CampoCPF()).should('be.visible').type('04385040', {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.ValidarCampo()).should('be.visible').click()
     cy.wait(3000)
     cy.get(cadastro.CampoCEP()).should('be.visible').type('4555', {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.CampoRazaoSocial()).should('be.visible').type('Empresa Credor', {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.CampoEmail()).should('be.visible').type('testes@testes.com', {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.CampoConfirmaEmail()).should('be.visible').type('testes@testes.com', {delay : 2000})
     cy.wait(3000)
     cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
 }     
 RealizarCadastroDevedor(){
    cy.get(cadastro.TXTPerfilCredor()).should('be.visible')
    cy.wait(3000)
    cy.get(cadastro.TXTPerfilDevedor()).should('be.visible')
    cy.wait(3000)
    //cy.scrollTo('center')
    cy.get(cadastro.btn_Devedor()).should('be.visible').click()
    cy.wait(3000)
    cy.get(cadastro.RadioBtnPJ()).should('be.visible').click()
    cy.wait(3000)
    cy.get(cadastro.GerarCPF()).should('be.visible').type(CNPJ.generate())
    cy.wait(3000)
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.wait(3000)
    cy.get(cadastro.CampoCPF()).should('be.visible').type('04385040', {delay : 2000})
    cy.wait(3000)
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.wait(3000)
    cy.get(cadastro.CampoCEP()).should('be.visible').type('4555', {delay : 2000})
    cy.wait(3000)
    cy.get(cadastro.CampoRazaoSocial()).should('be.visible').type('Empresa Devedor', {delay : 2000})
    cy.wait(3000)
    cy.get(cadastro.CampoEmail()).should('be.visible').type('testes@testes.com', {delay : 2000})
    cy.wait(3000)
    cy.get(cadastro.CampoConfirmaEmail()).should('be.visible').type('testes@testes.com', {delay : 2000})
    cy.wait(3000)
    cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
}     
 
 SolicitarRepresentante() {
    cy.wait(2000)
    cy.get ('[mask="###.###.###-##"] > :nth-child(1)').should('be.visible')
    cy.wait(2000)
    cy.get(cadastro.PreencherRepresentante()).type('21993948830',{delay : 2000} )
    cy.wait(3000)
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.wait(3000)
    cy.get(cadastro.ValidarDocumento()).should('be.visible')
    cy.wait(3000)
    cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
 }

 ValidarPoliticas(){
     cy.get(cadastro.TituloPoliticaPrivacidade()).should('be.visible').contains('Política de Privacidade')
     cy.wait(2000)
     cy.get(cadastro.ValidarTermo()).should('be.visible')
     cy.wait(3000)
     cy.get (cadastro.CheckBoxLi()).should('be.visible').click()
     cy.wait(2000)
     cy.get(cadastro.BotaoContinuar()).should('be.visible').click()

 }

 ValidarTermosDeUso(){
     cy.get(cadastro.ValidarTermosDeUso()).should('be.visible').contains('Termos de Uso')
     cy.wait(3000)
     cy.get(cadastro.ValidarDocUso()).should('be.visible')
     cy.wait(2000)
     cy.get(cadastro.CheckBoxLi()).should('be.visible').click()
     cy.wait(3000)
     cy.get(cadastro.ValidarBtnImprimir()).should('be.visible')
     
 }

 ConcluirCadastro(){
     cy.get(cadastro.btn_Concluir()).should('be.visible').click()
     cy.wait(3000)
 }

 ValidarMensagemInclusão(){
  cy.wait(3000) 
    cy.get(cadastro.ValidarMensagemSucess()).should('be.visible').contains('Inclusão realizada com sucesso.')
 }
 
 ValidarPrimeiroLogin(){
     cy.wait(2000)
     cy.get(cadastro.ValidarPrimeiroAcesso()).should('be.visible')
 }


 ValidarPoliticasPrimeiroAcesso(){
   cy.wait(3000)
    cy.get(cadastro.TituloPoliticaPrivacidade()).should('be.visible').contains('Política de Privacidade')
    cy.wait(2000)
    cy.get(cadastro.ValidarTermo()).should('be.visible')
    cy.wait(3000)
    cy.get (cadastro.CheckBoxLi()).should('be.visible').click()
    cy.wait(2000)
    cy.get(cadastro.BotaoContinuarPrimeiroAcesso()).should('be.visible').click()
   }

   clicarContinuar(){
    cy.get(cadastro.BotaoContinuarPrimeiroAcesso()).should('be.visible').click()
    cy.wait(3000)
   }

  ValidarImpressao(){
    cy.wait(3000)
    cy.get(cadastro.TituloPoliticaPrivacidade()).should('be.visible').contains('Política de Privacidade')
    cy.wait(2000)
    cy.get(cadastro.ValidarTermo()).should('be.visible')
    cy.wait(3000)
    cy.get (cadastro.CheckBoxLi()).should('be.visible').click()
    cy.wait(2000)
    cy.get(cadastro.btn_imprimir()).should('be.visible').click()
    cy.request({
        method: 'GET',
        url: 'https://hom.escrituracao.crdc.com.br/privacy-terms-of-use.pdf'
      }).then((response) => {
        expect(response.status).to.equal(200);
      })
    cy.wait(1000)  
    cy.get(cadastro.BotaoContinuarPrimeiroAcesso()).should('be.visible').click() ;
  }


  ValidarImpressaoTermosDeUso(){
    cy.get(cadastro.ValidarTermosDeUso()).should('be.visible').contains('Termos de Uso')
    cy.wait(2000)
    cy.get(cadastro.ValidarDocUso()).should('be.visible')
    cy.wait(2000)
    cy.get(cadastro.CheckBoxLi()).should('be.visible').click()
    cy.wait(3000).
    cy.get(cadastro.ValidarBtnImprimir()).should('be.visible').click()
    cy.wait(2000)
    cy.request({
        method: 'GET',
        url: 'https://hom.escrituracao.crdc.com.br/creditor-terms-of-use.pdf'
      }).then((response) => {
        expect(response.status).to.equal(200);
      })
    cy.get(cadastro.BotaoContinuarPrimeiroAcesso()).should('be.visible').click() 
    cy.wait(3000)
}

btn_Cancelar(){
  cy.wait(3000)
  cy.get(cadastro.btn_Cancelar()).should('be.visible').click()
  cy.wait(2000)
}
} 
export default TelaCadastro
