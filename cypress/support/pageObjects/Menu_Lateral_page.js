///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")

class PageHome {

 AbrirBrowser(){
    cy.visit(ambiente);
    cy.clearCookies()
 }

 PreencherCampos(){
  cy.get(preencher.Usuario()).type('234.897.630-76')
  cy.get(preencher.Senha()).type('Abcd1234@')
  cy.get(preencher.BotaoEntrar()).should('contain', 'Entrar').click()
 }
 
 Menu_User(){
   cy.wait(5)
   cy.get(preencher.clicar_Perfil()).click()
   cy.wait(5)
   cy.get(preencher.CampoMenu()).contains("Credor").click()
   cy.wait(1000)
 } 

 Perfil_User(){
    //cy.contains('Participante - Paulistano')
    cy.wait(5)
 }

 Trocar_perfil(){
    cy.get(preencher.clicar_Perfil()).click()
    cy.wait(10)
    cy.contains("Paulistano").click()
    cy.wait(1000)
 }

 Evidencia(){
    cy.screenshot()
 }

 Trocar_Perfil_ADM(){
   cy.get(preencher.clicar_Perfil()).click()
   cy.wait(5)
   cy.get(preencher.CampoMenu()).contains("Administrador").click()
   cy.wait(1000)
 }

 ValidarSubMenusCamposCredor(){
   cy.get(preencher.SubMenuCadastro()).contains('Cadastros')
   cy.get(preencher.SubMenuAgenda()).contains('Agenda de Negociação')
   cy.get(preencher.SubMenu1ConsultaOperacao()).contains('Consultar Operações')
   
}

ValidarSubMenusCamposPaulistano(){
   cy.get(preencher.SubMenuCadastro()).contains('Cadastros')
   cy.get(preencher.SubMenuAgenda()).contains('Agenda de Negociação')
   cy.get(preencher.SubMenu1ConsultaOperacao()).contains('Consultar Operações')
   cy.wait(1000)
   
}

ValidarSubMenusCamposADM(){
   cy.get(preencher.SubMenuCadastro()).contains('Cadastros')
   cy.get(preencher.MenuConsultaERelatorios()).contains('Consultas e Relatórios')
   cy.screenshot()
}



}export default PageHome
