
import PageDuplicata from '../pageObjects/Emitir_duplicata_page'
const page = new PageDuplicata

Given(/^que o usuário emita um arquivo CTE$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^o sistema identificar o remetende no arquivo$/, () => {
 page.Menu_User();
})

Then(/^sitema deve gravar o mesmo como Destinatário$/, () => {
  page.Valida_campo_destinatário();
});
 