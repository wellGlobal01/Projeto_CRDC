class PreencherUser{

  Usuario = () => {return '[clearable=""] > .q-field > .q-field__inner > .q-field__control'}
  Senha = () => {return ':nth-child(3) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control'}
  BotaoEntrar = () => {return ':nth-child(4) > .q-btn > .q-btn__wrapper > .q-btn__content'}
  ValidarLogin = () => {return ':nth-child(6) > .q-item__section--main > :nth-child(1)'}
  Menu = () => {return ':nth-child(2) > .q-drawer > .q-drawer__content > .q-scrollarea > .scroll'}
  ValidarEmail = () => {':nth-child(6) > .q-item__section--main > .q-item__label--caption'}
  SubMenuCadastro = () => {return ':nth-child(1) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label'}
  SubMenuAgenda = () => {return '[href="/trading-schedule"] > .q-item__section--main'}
  SubMenu1ConsultaOperacao = () => {return '[href="/operations"] > .q-item__section--main'}
  ValidarNome = () => {return ':nth-child(6) > .q-item__section--main > :nth-child(1)'}
  clicar_Emitir = () => {return '[href="/emitter"] > .q-item__section--main'}
  clicar_Perfil = () => {return '.items-center > .text-center'}
  CampoMenu = () => {return '.q-menu'}
  MenuConsultaERelatorios = () => {return '[style=""] > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label'}
  clicar_Carregar_duplicatas = () => {return '.bg-primary > .q-btn__wrapper'}
  Emitir = () => {'.bg-primary > .q-btn__wrapper > .q-btn__content > .block'}
  btn_Generico_Politicas_Privacidade = () => {return '.q-mt-sm > .q-btn__wrapper'}
  btn_Generico_Termos_de_uso = () => {return ':nth-child(6) > .q-btn__wrapper'}
  btn_emitir = () => {return '.bg-primary > .q-btn__wrapper'}
  ValidarNotificacao = () => {return '.q-notification'}
  Validar_Duplicata_vencida= () => {return 'tbody > tr > :nth-child(1)'}
  Validar_mensagem_de_sucesso_emissão = () => {return '.q-notification__message'}
  Validar_mensagem_de_sucesso_emissão_duplicata = () => {return '.q-notification--bottom-enter-active > .q-notification__wrapper > .q-notification__content > .q-notification__message'}
  Validar_destinatário = () => {return 'tbody > tr > :nth-child(7)'}
  Validar_coluna_destinatário = () => {return 'thead > :nth-child(1) > :nth-child(7)'}
  Tabela_emissao = () => {return '.q-table__middle'}

  

}export default PreencherUser;