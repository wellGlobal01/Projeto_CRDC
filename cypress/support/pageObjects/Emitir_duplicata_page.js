///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
import 'cypress-file-upload'
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const Fileinput = '.q-uploader__input'
const fixtureFile= '35210660835162000171550010003257971036064938.xml'
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
   cy.wait(2000)
   cy.reload(true)
   //cy.get(Fileinput).should('be.visible')
   cy.wait(6000)
   cy.get(Fileinput).attachFile(fixtureFile);
   cy.wait(5000)
   //cy.contains('Carregar').click()
   cy.get(preencher.clicar_Carregar_duplicatas()).click({force:true})
   
 } 

 Finalizar_emitir(){ 
  cy.wait(1000)
  cy.get(preencher.btn_emitir()).click()
  cy.wait(1000)
  cy.get(preencher.ValidarNotificacao()).should('be.visible')
  cy.wait(4000)
 }

 Finalizar_emitir_com_erro(){
  cy.wait(1000)
  cy.get(preencher.btn_emitir()).click()
  cy.wait(1000)
  cy.get(preencher.ValidarNotificacao()).should('be.visible').contains('Processo com inconsistências')
  cy.wait(3000)
 }


 Finalizar_emitir_Vencida(){
  cy.wait(3000)
  cy.get(preencher.btn_emitir()).click()
  cy.wait(2000)
  cy.get(preencher.Validar_Duplicata_vencida()).contains('Duplicatas não podem ser emitidas com data de vencimento menor que data atual').should('be.visible')
  cy.wait(2000)
  cy.get(preencher.ValidarNotificacao()).should('be.visible').contains('Processo com inconsistências')
  cy.wait(3000)
 }
}
export default PageDuplicata
