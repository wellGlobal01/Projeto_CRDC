import TelaCadastro from '../pageObjects/AutoCadastroPage'
const page = new TelaCadastro
import PageHome from '../pageObjects/Menu_Lateral_page'
const page2 = new PageHome

Given(/^que o sistema tenha disponibilizado os termos para o aceite$/, () => {
   page.AbrirBrowser();
});

Then(/^o sistema disponibiliza o download do documento genérico de Termo de Uso e o download do documento Política de Privacidade$/, () => {
   page2.ValidarDoc_Generico_Privacidade();
   page2.ValidarDoc_Generico_TermosUso()
});