
import ConsultarOperações from '../pageObjects/Validar _Coluna_Origem';
const page = new ConsultarOperações


Given(/^Que o usuário tenha acessado o menu Consultar Operações$/, () => {
 page.AbrirBrowser();
 page.PreencherCampos();
 page.AcessarMenu();
 
 
 
});

When(/^Realizar uma consulta$/, () => {
 page.RealizarFiltros();
})

Then(/^Sistema deve apresentar a coluna Origem em grid$/, () => {
  page.ValidarColuna();
});
 