///reference types = "Cypress" />

import Cadastro from "../Elementos/Cadastro";
import Configurações from "../Elementos/Configurações";
import ElementosHome from "../Elementos/ElementosHome";

const ambiente = Cypress.config("baseUrl");
const elementos = new Configurações();
const cadastro = new Cadastro();
const home = new ElementosHome();

class PageConfDadosLiquidacao {
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

  AcessarMenuCredor() {
   cy.get(elementos.menu_configCredor()).click();

  }

  AcessarMenuPartic() {
    cy.get(elementos.menu_configParticipante()).click();
 
   }



  ConfigurarDadosLiquidacao() {
    cy.get(elementos.textoContaBancaria()).should("be.visible");
    cy.wait(1000);
    cy.get(elementos.textoPix()).should("be.visible");
    cy.wait(1000);
  }

  selecionarCPF() {
    cy.get(elementos.btnPix()).click();
    cy.wait(1000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("CPF").click();
    cy.wait(1000);
  }

  selecionarCNPJParticipante() {
    //cy.get(elementos.btnPix()).click();
    cy.wait(5000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("CNPJ").click();
    cy.wait(1000);
  }


  PreencherCPF() {
    cy.get(elementos.campoparaCPF()).type("21993948830");
    cy.wait(1000);
  }

  confirmar() {
    cy.get(elementos.btnConfirmar()).click();
    cy.wait(1000);
    cy.get(elementos.Msgsucesso()).should("be.visible");
    cy.wait(1000);
  }

  selecionarCNPJ() {
    cy.get(elementos.btnPix()).click();
    cy.wait(1000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("CNPJ").click();
    cy.wait(1000);
  }

  PreencherCNPJ() {
    cy.get(elementos.campoparaCNPJ()).type("01235159000158");
    cy.wait(2000);
  }

  

  SelecionarContaBancaria() {
    cy.get(elementos.btnContaBancaria()).click({force:true});
      cy.wait(1000);
  }

  SelecionarContaBancariaParticipante() {
    cy.get(elementos.btnContaBancaria()).click({force:true});
    cy.wait(1000);
  }



  PreencherDadosBanco() {
    cy.get(elementos.codBanco()).type("341");
    cy.wait(1000);
    cy.get(elementos.codAg()).type("3351");
    cy.wait(1000);
    cy.get(elementos.Nconta()).type("37890-55");
  }

  PreencherDadosBancoParticipante() {
    cy.get(elementos.codBanco()).type("341");
    cy.wait(1000);
    cy.get(elementos.AgPartic()).type("3351");
    cy.wait(1000);
    cy.get(elementos.ContaPartic()).type("37890-55");
  }



  selecionarChaveAleatória() {
   /// cy.get(elementos.btnPix()).click();
    cy.wait(1000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("Chave Aleatória").click();
    cy.wait(1000);
  }

  PreencherChaveAleatória() {
    cy.get(elementos.campoparaChaveAleatoria()).type("00020101021226770014BR.GOV.BCB.PIX2555api.itau/pix/qr/v2/6ffba185-12ea-4047-9c21-64bad6d23b345204000053039865802BR5922MAGALU PAGAMENTOS LTDA6009SAO PAULO62070503***630491D6");
    cy.wait(1000);
  }



  selecionarTelefone() {
    ///cy.get(elementos.btnPix()).click();
    cy.wait(1000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("Telefone").click();
    cy.wait(1000);
  }

  PreencherTelefone() {
    cy.get(elementos.campoparaTelefone()).type("11994529455");
    cy.wait(1000);
  }


  selecionarMail() {
    ///cy.get(elementos.btnPix()).click();
    cy.wait(1000);
    cy.get(elementos.selecTipoDados()).click();
    cy.contains("Email").click();
    cy.wait(1000);
  }

  PreencherMail() {
    cy.get(elementos.campoparaEmail()).type("jurema.ssantos@gmail.com");
    cy.wait(1000);
  }

  
  TrocarPerfilContaB() {
   cy.wait(1000)
   cy.get(home.clicar_Perfil()).click()
   cy.wait(1000)
   cy.get(home.CampoMenu()).contains("Paulistano").click()
   cy.wait(1000)
  }


  TrocarPerfilPix() {
    cy.wait(1000)
    cy.get(home.clicar_Perfil()).click()
    cy.wait(1000)
    cy.get(home.CampoMenu()).contains("Teste Participante").click()
    cy.wait(1000)
   }
}

export default PageConfDadosLiquidacao;
