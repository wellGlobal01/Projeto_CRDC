///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const User = Cypress.env('usuario')
const password = Cypress.env('senha')

class PageHome {

 AbrirBrowser(){
    cy.visit(ambiente);
    cy.clearCookies()
 }

 PreencherCampos(){
  cy.get(preencher.Usuario()).type(User)
  cy.get(preencher.Senha()).type(password)
  cy.get(preencher.BotaoEntrar()).should('contain', 'Entrar').click()
  cy.wait(3000)
 }
 
 Menu_User(){
   cy.wait(5)
   cy.get(preencher.clicar_Perfil()).click()
   cy.wait(5)
   cy.get(preencher.CampoMenu()).contains("Credor").click()
   cy.wait(3000)
 } 

 Perfil_User(){
    //cy.contains('Participante - Paulistano')
    cy.wait(5)
 }

 Trocar_perfil(){
    cy.get(preencher.clicar_Perfil()).click()
    cy.wait(1000)
    cy.contains("Paulistano").click()
    cy.wait(3000)
 }

 Evidencia(){
    cy.screenshot()
 }

 Trocar_Perfil_ADM(){
   cy.get(preencher.clicar_Perfil()).click()
   cy.wait(5)
   cy.get(preencher.CampoMenu()).contains("Administrador").click()
   cy.wait(3000)
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

ValidarDoc_Generico_Privacidade(){
   cy.wait(3000)
   cy.get(preencher.btn_Generico_Politicas_Privacidade()).should('be.visible').click()
   cy.wait(3000)
   cy.request({
      method: 'GET',
      url: 'https://hom.escrituracao.crdc.com.br/privacy-terms-of-use.pdf'
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
    cy.wait(3000)
}

ValidarDoc_Generico_TermosUso(){
   cy.get(preencher.btn_Generico_Termos_de_uso()).should('be.visible').click()
   cy.wait(3000)
   cy.request({
      method: 'GET',
      url: 'https://hom.escrituracao.crdc.com.br/terms-of-use.pdf'
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
    cy.wait(3000)
}

Logar_novamente(){
   cy.wait(2000)
   cy.get(preencher.BotaoEntrar()).should('contain', 'Entrar').click()
   cy.wait(3000)
   cy.request({
      method: 'GET',
      url: 'https://api-hom.escrituracao.crdc.com.br/v1/auth/terms?type=privacy'
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
    cy.wait(3000)
 }
}export default PageHome
