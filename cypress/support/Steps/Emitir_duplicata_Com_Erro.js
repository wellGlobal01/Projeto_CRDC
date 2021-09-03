

import PageDuplicata from '../pageObjects/Emitir_duplicata_page'
const page = new PageDuplicata

Given(/^que eu acesso o sistema com um usuário válido$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^realizo uma emissão de duplicata com erros$/, () => {
 page.Menu_User();
})

Then(/^realizo uma validação para garantir que a duplicata não foi emitida$/, () => {
  page.Finalizar_emitir();
});
 