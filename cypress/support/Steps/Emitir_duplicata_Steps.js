

import PageDuplicata from '../pageObjects/Emitir_duplicata_page'
const page = new PageDuplicata

Given(/^que eu acesso o sistema com um usuário válido$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^realizo uma emissão de duplicata$/, () => {
 page.Menu_User();
})

Then(/^realizo uma validação para garantir a duplicata emitida$/, () => {
  page.Finalizar_emitir();
});
 