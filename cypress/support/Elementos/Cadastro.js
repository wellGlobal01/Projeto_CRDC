class Cadastro{

    btn_Cadastro = () => {return '.self-center > :nth-child(1) > .q-btn__wrapper'}
    TXTPerfilCredor = () => {return '.col-12 > :nth-child(2)'}
    TXTPerfilDevedor = () => {return '.col-12 > :nth-child(4)'}
    btn_Credor = () => {return ':nth-child(3) > .q-btn__wrapper'}
    btn_Devedor = () => {return ':nth-child(4) > .q-btn__wrapper'}
    RadioBtnPJ = () => {return ':nth-child(2) > .q-radio > .q-radio__inner > .q-radio__bg'}
    GerarCPF = () => {return '[mask="##.###.###/####-##"] > .q-field > .q-field__inner > .q-field__control'}
    ValidarCampo = ()=> {return '.q-form > .q-space'}
    CampoCPF = () => {return '[mask="##.###-###"] > .q-field > .q-field__inner > .q-field__control'}
    CampoCEP = () => {return 'div[name="number"] > .q-field > .q-field__inner > .q-field__control'}
    CampoRazaoSocial = () => {return 'div[name="tradeName"] > .q-field > .q-field__inner > .q-field__control'}
    CampoEmail = () => {return ':nth-child(9) > div[maxlength="255"] > .q-field > .q-field__inner > .q-field__control'}
    CampoConfirmaEmail = () => {return 'div[name="confirmEmail"] > .q-field > .q-field__inner > .q-field__control'}
    BotaoContinuar = () => {return '.q-btn--standard > .q-btn__wrapper'}
    PreencherRepresentante = () => {return '.q-field__control'}
    ValidarDocumento = () => {return '.q-field__messages > .text-green'}
    TituloPoliticaPrivacidade = () => {return '.q-stepper__step-inner > .full-width > :nth-child(1) > .text-primary'}
    ValidarTermo = () => {return '.q-stepper__step-inner > .full-width > :nth-child(2)'}
    CheckBoxLi = () => {return '.q-checkbox__svg'}
    ValidarTermosDeUso = () => {return '.q-stepper__step-inner > .full-width > :nth-child(1) > .text-primary'}
    ValidarDocUso = () => {return '.q-stepper__step-inner > .full-width > :nth-child(2)'}
    ValidarBtnImprimir = () => {return ':nth-child(3) > .q-btn__wrapper > .q-btn__content > .block'}
    btn_Concluir = () => {return '.q-btn--standard > .q-btn__wrapper'}
    ValidarMensagemSucess = () => {return '.q-notification__message'}

}
export default Cadastro;