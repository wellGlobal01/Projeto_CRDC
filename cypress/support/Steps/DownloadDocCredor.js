import TelaCadastro from '../pageObjects/AutoCadastroPage'
const page = new TelaCadastro
import PageHome from '../pageObjects/Menu_Lateral_page'
const page2 = new PageHome

Given(/^que o user iniciou o login e o sistema tenha disponibilizado os termos para o aceite$/, () => {
   page.AbrirBrowser();
   page2.PreencherCampos();
  
});

Then(/^o sistema apresenta o download dos documentos de Termo de Uso e Política de Privacidade$/, () => {
    page.ValidarImpressao();
    page.ValidarImpressaoTermosDeUso();
});