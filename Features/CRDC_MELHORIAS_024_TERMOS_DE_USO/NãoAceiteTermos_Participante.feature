#language: pt
Funcionalidade: Não aceite termos de uso
     
  Cenario: Não aceite dos termos perfil Participante
      Dado que o usuário tente realizar o login
      Quando o Sistema identificar que o mesmo não realizou o aceite dos termos   
      Então usuário é impedido de ingressar na aplicação

        
