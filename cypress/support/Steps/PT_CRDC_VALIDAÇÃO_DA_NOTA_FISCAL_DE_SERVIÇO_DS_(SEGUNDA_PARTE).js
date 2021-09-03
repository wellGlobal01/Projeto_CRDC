import PageEmiteDS from "../pageObjects/Emite_DS_page";
const page = new PageEmiteDS


Given(/^Que usuário informe os dados da Ds para a emissão$/, () => {
    page.AbrirBrowser();
  });
  
  When(/^A Dynamicca realizar as validações$/, () => {
   page.PreencherCampos();
   page.AcessarMenuDs();
   page.PrencherDuplicata();
  
  });
  
  When(/^Então sitema emite DS com sucesso$/, () => {
    page.EmiteDuplicata();
  
  });