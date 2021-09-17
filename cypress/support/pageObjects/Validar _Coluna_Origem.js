///reference types = 'Cypress' />

import PreencherUser from "../Elementos/ElementosHome";
import elementos from "../Elementos/ConsultaOperações"
import ConsultarOperaçoes$ from "../Elementos/ConsultaOperações";

const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const User = Cypress.env('usuario')
const password = Cypress.env('senha')
const Elementos = new ConsultarOperaçoes$

class ConsultarOperações {

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
 
 AcessarMenu(){
   cy.wait(5)
   cy.get (Elementos.MenuOper()).click()
   cy.wait(5)

 } 

 RealizarFiltros(){
    cy.wait(5)
    cy.get (Elementos.DtaDe()).clear();
    cy.get (Elementos.DtaDe()).type('01/08/2021');
    cy.wait(5)
    cy.get(Elementos.BtnFiltrar()).click()
 
  
  } 
 
  ValidarColuna(){
    cy.wait(5)
    cy.get (Elementos.ColunaOrigem()).should("be.visible")
    cy.wait(5)
 
  } 

}export default ConsultarOperações
