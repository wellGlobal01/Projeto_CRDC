///reference types = "Cypress" />

import ConsultaConciliação from "../Elementos/ConsultaConciliação";

import ElementosHome from "../Elementos/ElementosHome";

const ambiente = Cypress.config("baseUrl");
const home = new ElementosHome();
const elementosconcil = new ConsultaConciliação();
class ConsultarConciliação {
  AbrirBrowser() {
    cy.visit(ambiente);
    cy.wait(10);
  }

  PreencherCampos() {
    cy.get(home.Usuario()).type("485.945.630-00");
    cy.wait(1000);
    cy.get(home.Senha()).type("Abcd1234@");
    cy.wait(1000);
    cy.get(home.BotaoEntrar()).should("contain", "Entrar").click();
    cy.wait(1000);
  }

  ValidarFiltros() {
    cy.get(elementosconcil.ColunaAnoMes()).should("be.visible");
    cy.wait(1000);
    cy.get(elementosconcil.DocNomepartic()).should("be.visible");
    cy.wait(1000);
  }

  menu() {
    cy.get(elementosconcil.menuconsultaserelatorios()).click();
    cy.wait(1000);
    cy.get(elementosconcil.Consultaconciliaçao()).click();
    cy.wait(1000);
  }

  realizarfiltro() {
    cy.get(elementosconcil.Data()).type("09/2021");
    cy.wait(1000);
  }


filtropordata () {
  cy.get(elementosconcil.campoparticipante()).clear()
  cy.get(elementosconcil.Data()).clear()
  cy.get(elementosconcil.Data()).type("07/2021");
  cy.wait(1000);
}


filtropordatamaior () {
  cy.get(elementosconcil.Data()).clear()
  cy.get(elementosconcil.Data()).type("11/2021");
  cy.wait(2000);
}


validarmsgdatamaior () {
cy.get(elementosconcil.btnFiltrar()).click()
  cy.get(elementosconcil.msgdatamaior()).should("be.visible")
  cy.wait(2000);
}


filtropordatamaior () {
  cy.get(elementosconcil.Data()).clear()
  cy.get(elementosconcil.Data()).type("11/2021");
  cy.wait(1000);
}

  clicaremFiltrar() {
    cy.wait(1000);
    cy.get(elementosconcil.btnFiltrar()).click();
    cy.wait(1000);
  }
  ValidarColuna() {
    cy.get(elementosconcil.colunaParticipante()).should("be.visible");
    cy.wait(1000);
    cy.get(elementosconcil.colunaaçoes()).should("be.visible");
    cy.wait(1000);
    cy.get(elementosconcil.colunaqtdnaoconc()).should("be.visible");
    cy.wait(1000);
    cy.get(elementosconcil.colunaqtdtotaldeativos()).should("be.visible");
    cy.wait(1000);
    cy.get(elementosconcil.ColunaAnoMes()).should("be.visible");
    cy.wait(1000);
  }

  opções() {
    cy.get(elementosconcil.clicarnasopções()).click();
    cy.wait(1000);
  }

  exportarcsv() {
    cy.wait(1000);
    cy.get(elementosconcil.baixarcsv()).click();
    cy.wait(5000);
  }

  filtrarporparticipante() {
    cy.wait(2000);
    cy.get(elementosconcil.campoparticipante()).type ('Paulistano');
    cy.wait(1000);
  }


  retornodoparticipanteconsultado() {
    cy.wait(1000);
    cy.get(elementosconcil.retornoparticipante()).contains("Paulistano");
    cy.wait(1000);
  }
}
export default ConsultarConciliação;
