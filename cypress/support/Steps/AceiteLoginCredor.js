
import PageHome from '../pageObjects/Menu_Lateral_page'
import TelaCadastro from '../pageObjects/AutoCadastroPage';
const cadastro = new TelaCadastro
const page = new PageHome

Given(/^que o usuário tenha feito login com sucesso$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^o sistema identificar que o usuário está acessando pela primeira vez a plataforma$/, () => {
 cadastro.ValidarPrimeiroLogin();
 
})

Then(/^deve ser disponibilizado a leitura e o aceite do documento de Termos de Uso específico do Credor e do documento de Política de Privacidade$/, () => {
    cadastro.ValidarPoliticasPrimeiroAcesso();
    cadastro.ValidarTermosDeUso();
    cadastro.clicarContinuar();
    cadastro.ValidarTermosDeUso();
    cadastro.clicarContinuar();
    cadastro.ValidarTermosDeUso();
    cadastro.clicarContinuar();
    cadastro.TempoEspera();
});
 