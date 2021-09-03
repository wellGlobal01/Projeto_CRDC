///reference types = "Cypress" />

import DS from "../Elementos/DS";
import ElementosHome from "../Elementos/ElementosHome";

const ambiente = Cypress.config("baseUrl");
const elementos = new DS();
const home = new ElementosHome();

class PageEmiteDS {
  AbrirBrowser() {
    cy.visit(ambiente);
    cy.wait(10);
  }

  PreencherCampos() {
    cy.get(home.Usuario()).type("21993948830");
    cy.wait(1000);
    cy.get(home.Senha()).type("Abcd1234@");
    cy.wait(1000);
    cy.get(home.BotaoEntrar()).should("contain", "Entrar").click();
    cy.wait(1000);
  }

  AcessarMenuDs() {
    cy.get(elementos.MenuDS()).click();
    cy.wait(1000);
  }

  PrencherDuplicata() {
    cy.get(elementos.DtaVenc()).type("30/09/2021");
    cy.wait(1000);
    cy.get(elementos.CPF_CNPJDevedor()).type("33946496000140");
    cy.get(elementos.NomeDevedor()).type("Matarazzo");
    cy.get(elementos.ValorNFSe()).type("20000");
    cy.get(elementos.Cidade()).click();
    cy.contains("São Paulo").click();
    cy.get(elementos.NumeroNFEs()).type("26634");
    cy.get(elementos.CódigoVerifNFSe()).type("5R56U4KM");
    cy.get(elementos.IM_PrestServ()).type("52805832");
  }

  EmiteDuplicata() {
    cy.get(elementos.BtnConf()).click();
    cy.wait(1000);
    cy.get(elementos.MensagemSucesso()).should("be.visible");
    cy.wait(1000);
  }
}

export default PageEmiteDS;
