///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
import 'cypress-file-upload'
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const Fileinput = '.q-uploader__input'
const fixtureFile= '35210725126358000196550010002331001002489101.xml'
const user = Cypress.env('usuario')
const password = Cypress.env('senha')
class PageDuplicata {

 AbrirBrowser(){
    cy.visit(ambiente);
    cy.wait(10)
 }

 PreencherCampos(){
  cy.get(preencher.Usuario()).type(user)
  cy.wait(1000)
  cy.get(preencher.Senha()).type(password)
  cy.wait(1000)
  cy.get(preencher.BotaoEntrar()).should('contain', 'Entrar').click()
 }
 
 Menu_User(){

   cy.wait(1000)
   cy.get(preencher.clicar_Perfil()).click()
   cy.wait(1000)
   cy.get(preencher.CampoMenu()).contains("Credor").click()
   cy.wait(1000)
   cy.wait(5)
   cy.get(preencher.clicar_Emitir()).click()
   cy.wait(5000)
   cy.get(Fileinput).should('be.visible')
   cy.wait(1000)
   cy.get(Fileinput).attachFile(fixtureFile);
   cy.wait(1000)
   cy.get(preencher.clicar_Carregar_duplicatas()).click()
   cy.wait(10000)
   //cy.get(preencher.Emitir()).contains('Emitir').click()
   
 } 

 Finalizar_emitir(){ 
  cy.get(preencher.btn_emitir()).click()
  cy.wait(1000)
  cy.get(preencher.ValidarNotificacao()).should('be.visible')
  cy.wait(3000)
 }

}
export default PageDuplicata
