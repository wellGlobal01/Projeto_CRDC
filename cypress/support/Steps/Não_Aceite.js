import TelaCadastro from '../pageObjects/AutoCadastroPage'
const page = new TelaCadastro
import PageHome from '../pageObjects/Menu_Lateral_page'
const page2 = new PageHome

Given(/^que o usuário tente realizar o login$/, () => {
   page.AbrirBrowser();
   page2.PreencherCampos();
  
});

When(/^o Sistema identificar que o mesmo não realizou o aceite dos termos$/, () => {
    page.btn_Cancelar();
   
 });

Then(/^usuário é impedido de ingressar na aplicação$/, () => {
  page2.Logar_novamente();
});