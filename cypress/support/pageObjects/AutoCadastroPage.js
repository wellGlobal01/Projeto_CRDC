///reference types = "Cypress" />

import Cadastro from "../Elementos/Cadastro";
const cadastro = new Cadastro
const ambiente = Cypress.config("baseUrl")
var CNPJ = require("cpf_cnpj").CNPJ;

class TelaCadastro {

 AbrirBrowser(){
    cy.visit(ambiente);
 }

 btn_cadastro(){
     cy.get(cadastro.btn_Cadastro()).should('be.visible').click();
     cy.wait(1000)
 } 

 TempoEspera(){
    cy.wait(1000)
 }
 
 RealizarCadastroCredor(){
     cy.get(cadastro.TXTPerfilCredor()).should('be.visible')
     cy.get(cadastro.TXTPerfilDevedor()).should('be.visible')
     cy.scrollTo('center')
     cy.get(cadastro.btn_Credor()).should('be.visible').click()
     cy.get(cadastro.RadioBtnPJ()).should('be.visible').click()
     cy.get(cadastro.GerarCPF()).should('be.visible').type(CNPJ.generate())
     cy.get(cadastro.ValidarCampo()).should('be.visible').click()
     cy.get(cadastro.CampoCPF()).should('be.visible').type('04385040')
     cy.get(cadastro.ValidarCampo()).should('be.visible').click()
     cy.get(cadastro.CampoCEP()).should('be.visible').type('4555')
     cy.get(cadastro.CampoRazaoSocial()).should('be.visible').type('Empresa Credor')
     cy.get(cadastro.CampoEmail()).should('be.visible').type('testes@testes.com')
     cy.get(cadastro.CampoConfirmaEmail()).should('be.visible').type('testes@testes.com')
     cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
 }     
 RealizarCadastroDevedor(){
    cy.get(cadastro.TXTPerfilCredor()).should('be.visible')
    cy.get(cadastro.TXTPerfilDevedor()).should('be.visible')
    cy.scrollTo('center')
    cy.get(cadastro.btn_Devedor()).should('be.visible').click()
    cy.get(cadastro.RadioBtnPJ()).should('be.visible').click()
    cy.get(cadastro.GerarCPF()).should('be.visible').type(CNPJ.generate())
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.get(cadastro.CampoCPF()).should('be.visible').type('04385040')
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.get(cadastro.CampoCEP()).should('be.visible').type('4555')
    cy.get(cadastro.CampoRazaoSocial()).should('be.visible').type('Empresa Devedor')
    cy.get(cadastro.CampoEmail()).should('be.visible').type('testes@testes.com')
    cy.get(cadastro.CampoConfirmaEmail()).should('be.visible').type('testes@testes.com')
    cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
}     
 
 SolicitarRepresentante() {
    cy.get ('[mask="###.###.###-##"] > :nth-child(1)').should('be.visible')
    cy.wait(1000)
    cy.get(cadastro.PreencherRepresentante()).type('21993948830')
    cy.get(cadastro.ValidarCampo()).should('be.visible').click()
    cy.get(cadastro.ValidarDocumento()).should('be.visible').contains('Documento encontrado. Clique em continuar.')
    cy.get(cadastro.BotaoContinuar()).should('be.visible').click()
 }

 ValidarPoliticas(){
     cy.get(cadastro.TituloPoliticaPrivacidade()).should('be.visible').contains('Política de Privacidade')
     cy.wait(2000)
     cy.get(cadastro.ValidarTermo()).should('be.visible')
     cy.get (cadastro.CheckBoxLi()).should('be.visible').click()
     cy.get(cadastro.BotaoContinuar()).should('be.visible').click()

 }

 ValidarTermosDeUso(){
     cy.get(cadastro.ValidarTermosDeUso()).should('be.visible').contains('Termos de Uso')
     cy.get(cadastro.ValidarDocUso()).should('be.visible')
     cy.wait(2000)
     cy.get(cadastro.CheckBoxLi()).should('be.visible').click()
     cy.get(cadastro.ValidarBtnImprimir()).should('be.visible')
     
 }

 ConcluirCadastro(){
     cy.get(cadastro.btn_Concluir()).should('be.visible').click()
 }

 ValidarMensagemInclusão(){
     cy.get(cadastro.ValidarMensagemSucess()).should('be.visible').contains('Inclusão realizada com sucesso.')
 }

} 
export default TelaCadastro
