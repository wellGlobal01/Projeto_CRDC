

import PageDuplicata from '../pageObjects/Emitir_duplicata_page'
const page = new PageDuplicata

Given(/^que o usuário selecione arquivo CNAB com especie de título 14$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

When(/^O usuario clicar em Carregar$/, () => {
 page.Menu_User();
})

Then(/^Sistema carrega arquivo possibilitando emissão de duplicata de serviço$/, () => {
  page.Finalizar_processo_emissão_CNAB();
});
 