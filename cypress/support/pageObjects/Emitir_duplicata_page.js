///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
import 'cypress-file-upload'
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const Fileinput = '.q-uploader__input'
const fixtureFile= '35210566079609000106550060002905911146267253.xml'
class PageDuplicata {

 AbrirBrowser(){
    cy.visit(ambiente);
    cy.wait(10)
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
   cy.wait(5)
   cy.get(preencher.clicar_Emitir()).click()
   cy.wait(5000)
   cy.get(Fileinput).attachFile(fixtureFile);
   //cy.get(preencher.Emitir()).contains('Emitir').click()
   
 } 
Tempo(){
    cy.wait(1)
    cy.contains('Emitir').dblclick()
    cy.get('.bg-primary > .q-btn__wrapper').click()
    cy.wait(2000)
    cy.get('.column > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
    cy.wait(2000)
    cy.get('.bg-primary > .q-btn__wrapper').click()
}

}export default PageDuplicata
