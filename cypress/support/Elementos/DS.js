class DS${

    DtaVenc = () => {return '[debounce="600"] > .q-field > .q-field__inner > .q-field__control'}
    CPF_CNPJDevedor = () => {return '[mask="###.###.###-######"] > .q-field > .q-field__inner > .q-field__control'}
    NomeDevedor = () => {return 'div[name="debtorName"] > .q-field > .q-field__inner > .q-field__control'}
    ValorNFSe = () => {return ':nth-child(7) > [lazy-rules=""] > .q-field > .q-field__inner > .q-field__control'}
    Cidade = () => {return '.col-sm-6 > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native'} 
    NumeroNFEs = () => {return 'div[name="assetNum"] > .q-field > .q-field__inner > .q-field__control'} 
    CódigoVerifNFSe = () => {return 'div[name="verificationCode"] > .q-field > .q-field__inner > .q-field__control'}
    IM_PrestServ = () => {return 'div[name="creditorMunicipalRegistration"] > .q-field > .q-field__inner > .q-field__control'}
    BtnConf = () => {return '.bg-primary > .q-btn__wrapper'}
    BtnCanc = () => {return '.q-gutter-sm > [type="button"] > .q-btn__wrapper'}
    MenuDS = () => {return '[href="/service-assets-emitter"]'}
    MensagemSucesso = () => {return '.q-notification'}
    

    }export default DS$;