class configurações${

    menu_configParticipante = () => {return '[href="/wallet-participants/config"]'}
    menu_configCredor = () => {return '[href="/config"]'}
    btnPix = () => {return ':nth-child(1) > .q-radio > .q-radio__inner > .q-radio__bg'}
    btnContaBancaria = () => {return ':nth-child(2) > .q-radio > .q-radio__inner > .q-radio__bg'}
    btnNenhum = () => {return ':nth-child(3) > .q-radio > .q-radio__inner > .q-radio__bg'}
    selecTipoDados  = () => {return ':nth-child(3) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control'}
    codBanco  = () => {return 'div[maxlength="5"] > .q-field > .q-field__inner > .q-field__control'}
    codAg = () => {return ':nth-child(2) > div[maxlength="255"] > .q-field > .q-field__inner > .q-field__control'}
    Nconta = () => {return ':nth-child(3) > div[maxlength="255"] > .q-field > .q-field__inner > .q-field__control'}
    btnConfirmar = () => {return '.bg-primary > .q-btn__wrapper'}
    btnCancelar = () => {return '.q-gutter-sm > [type="button"] > .q-btn__wrapper'}
    campoparaCPF = () => {return '[mask="###.###.###-##"] > .q-field > .q-field__inner > .q-field__control'}
    campoparaCNPJ = () => {return '[mask="##.###.###/####-##"] > .q-field > .q-field__inner > .q-field__control'}
    campoparaTelefone = () => {return '[mask="(##)####-#####"] > .q-field > .q-field__inner > .q-field__control'}
    campoparaEmail = () => {return 'div[maxlength="255"] > .q-field > .q-field__inner > .q-field__control'}
    campoparaChaveAleatoria = () => {return 'div[maxlength="255"] > .q-field > .q-field__inner > .q-field__control'}
    textoPix = () => {return ':nth-child(1) > .q-radio > .q-radio__label'}
    textoContaBancaria = () => {return ':nth-child(2) > .q-radio > .q-radio__label'}
    textoNenhum= () => {return ':nth-child(3) > .q-radio > .q-radio__label'}
    CPFselecionado= () => {return '.q-manual-focusable--focused > .q-item__section'}
    Msgsucesso= () => {return '.q-notification'}
    btnperfil= () => {return '.q-btn__content > .items-center'}
    selecTipoDadosPartic= () => {return '//*[@id="q-app"]/div/div[3]/main/div/div/div[2]/div/form/div[3]/div/div[2]/div/div[3]/div/label[2]/div/div[1]/div[1]/div'}
    AgPartic= () => {return ':nth-child(2) > div[maxlength="10"] > .q-field > .q-field__inner > .q-field__control'}
    ContaPartic= () => {return ':nth-child(3) > div[maxlength="10"] > .q-field > .q-field__inner > .q-field__control'}

      
  
    

  
  
  }export default configurações$;