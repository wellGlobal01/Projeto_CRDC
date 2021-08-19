

import PageHome from '../pageObjects/Menu_Lateral_page'
const page = new PageHome

Given(/^que eu acesso o sistema com um usuário válido$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
});

And(/^realizo uma validação no menu apresentado$/, () => {
 page.Menu_User();
 page.ValidarSubMenusCamposCredor();
 page.Evidencia();
});

When(/^troco para o perfil especifico$/, () => {
    page.Trocar_perfil();
    page.Perfil_User();
    page.ValidarSubMenusCamposPaulistano();
    page.Evidencia();
    page.Trocar_Perfil_ADM();
    page.ValidarSubMenusCamposADM();
});

Then(/^realizo as ultimas validações$/, () => {
    page.Evidencia();
   
});  