
class consultaConciliação${

   menuconsultaserelatorios = () => {return ':nth-child(11) > .q-expansion-item__container > div.q-item'}
   Consultaconciliaçao= () => {return '[href="/report/conciliations"]'}
   Data= () => {return '[debounce="600"] > .q-field > .q-field__inner > .q-field__control'}
   DocNomepartic = () => {return 'div[name="participant"] > .q-field > .q-field__inner > .q-field__control'}
   btnLimpar = () => {return '.col-12 > [type="button"] > .q-btn__wrapper'}
   btnFiltrar = () => {return '.bg-primary > .q-btn__wrapper > .q-btn__content > .block'}
   ColunaAnoMes = () => {return '.sortable'}
   colunaParticipante = () => {return 'tr > :nth-child(2)'}
   colunaqtdtotaldeativos = () => {return 'tr > :nth-child(3)'}
   colunaqtdnaoconc = () => {return 'tr > :nth-child(4)'}
   colunatotal=()=> {return 'tr > :nth-child(5)'}
   colunaaçoes =()=>{return 'tr > :nth-child(6)'}
   clicarnasopções=()=>{return ':nth-child(1) > .q-td > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons'}
   baixarcsv=()=>{return '.q-menu > .q-list > .q-item'}
   campoparticipante=()=>{return 'div[name="participant"] > .q-field > .q-field__inner > .q-field__control'}
   retornoparticipante=()=>{return 'tbody > tr > :nth-child(2)'}
   msgdatamaior=()=>{return '.q-field__messages > div'}
     
  

}export default consultaConciliação$;