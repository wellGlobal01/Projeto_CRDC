///reference types = "Cypress" />

import PreencherUser from "../Elementos/ElementosHome";
import 'cypress-file-upload'
const preencher = new PreencherUser
const ambiente = Cypress.config("baseUrl")
const Fileinput = '.q-uploader__input'
const fixtureCNAB12= 'requisicao12-24487501000102-1000979.txt'
const fixtureCNAB14 = 'requisicao14-24487501000102-1000978.txt'
const fixtureCNAB00 = 'requisicao00-24487501000102-1000979.txt'
const fixtureXML = '35210386447562002066570010000195041352890261.xml'
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
   cy.get(Fileinput).attachFile(fixtureCNAB14);
   cy.wait(5000)
   cy.contains('Carregar').click()
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
  cy.get(preencher.ValidarNotificacao()).should('be.visible').contains('Processo com inconsistências')
  cy.wait(2000)
  cy.get(preencher.Validar_Duplicata_vencida()).contains('Duplicatas não podem ser emitidas com data de vencimento menor que data atual').should('be.visible')
  cy.wait(3000)
 }

 Finalizar_emitir_Vencida_Frase_CNAB(){
  cy.wait(3000)
  cy.get(preencher.btn_emitir()).click()
  cy.wait(2000)
  cy.get(preencher.ValidarNotificacao()).should('be.visible').contains('Processo concluído com pendência')
  cy.wait(2000)
  cy.get(preencher.Validar_Duplicata_vencida()).contains('Duplicatas não podem ser emitidas com data de vencimento menor que data atual').should('be.visible')
  cy.wait(3000)
 }

 Finalizar_processo_emissão_CNAB(){ 
  cy.wait(3000)
  cy.get(preencher.btn_emitir()).click()
  cy.wait(2000)
  cy.get(preencher.Validar_mensagem_de_sucesso_emissão()).should('be.visible').contains('Duplicatas extraídas com sucesso')
  cy.get(preencher.Validar_mensagem_de_sucesso_emissão_duplicata()).contains('Duplicata(s) emitida(s) com sucesso.').should('be.visible')
  cy.wait(1000)
 }


 Valida_campo_destinatário(){
   cy.wait(4000)
   cy.get(preencher.Tabela_emissao()).scrollTo('bottomRight')
   cy.wait(1000)
   cy.get(preencher.Validar_coluna_destinatário()).should('be.visible')
   cy.wait(1000)
   cy.get(preencher.Validar_destinatário()).should('be.visible')
 }


}
export default PageDuplicata
