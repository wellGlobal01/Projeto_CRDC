

import PageDuplicata from '../pageObjects/Emitir_duplicata_page'
const page = new PageDuplicata

Given(/^que eu acesso o sistema com um usuário válido$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^realizo uma emissão de duplicata com erros$/, () => {
 page.Menu_User();
})

When(/^o sistema identificar que a data está vencida$/, () => {
  page.Menu_User();
 })

Then(/^sistema deve apresentar a MSG Duplicatas não podem ser emitidas com data de vencimento menor que data atual$/, () => {
  page.Finalizar_emitir_Vencida();
});
 