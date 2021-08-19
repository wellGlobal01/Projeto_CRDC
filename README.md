## Projeto Automação WEB - Cypress + Cucumber + Relatórios Dinâmicos


## ESTRUTURA DA ARQUITETURA
 > Pasta Cypress
Nesta pasta contem nossa estrutura principal do projeto como tambem nossas features de execuções.

 > Pasta Fixtures

 > Integration
Nesta pasta contêm arquivos {.features'} que são responsáveis pelos nossos cenários. A linguagem utilizada é o Gherkin. 
 
 >plugins 
Pasta referente aos arquivos de configurações, onde ficam anexos os modulos utilizado no projeto, neste caso estamos utilizando o cucumber preprocessor.

 >screenshots
 Pasta referente aos screenshots e evidências colhidas durante os testes

 >support
 Pasta referente a arquivos de suporte para desenvolvimento dos teste e seguindo o padrão Pageobjects
   
   >> Pasta Elementos
     Pasta referente aos elementos mapeados da tela

   >>PageObjects
     Arquivos referente as ações da tela

   >> Steps
     Arquivos referentes aos steps dos cenários (Ligação com os arquivos.features) 
   
   >> ArquivosCommand        
     Arquivos referente a commands de support

   >> Index.js
    Arquivos para configurações Cypress para controlar interações de tela
 
 >Videos
 Arquivos de evidências em formato VIDEO

 >Features
 Arquivos referente as cenários desenvolvidos na linguagem Gherkin

 >Mochawesome
 Arquivos referente ao nossos relatórios dinâmicos em HTML e JSON (Arquitetura gera Automaticamente) 

 >Node_Modules
 Arquivos de dependencias e modulos (não alterar)

 >Cypress.json
 Arquivo de configuração principal do nosso projeto, onde possue algumas especificações como URL a ser testada, tamano de tela etc..

 >package-lock.json
 Arquivo referente a versões instaladas de cada dependencia e modulos

 >package.json
 Arquivo de configuração referente a execuções e scripts com alguas versões especificas de dependências.

 >README.md 
  Arquivo referente a explicação do projeto


## INSTALAÇÃO

> Passo 1
 Acesse o site 'https://nodejs.org/en/' e realize a instalação do NODE.JS (obrigatório)

> Passo 2 
 Clone o projeto para sua máquina

> Passo 3
Abra o terminal e digite o seguinte comando :
  
  >> npm install --save-dev cypress cypress-cucumber-preprocessor

> Passo 4
Digite o seguinte comando para trabalhar com upload de arquivos

 >> npm install --save-dev cypress-file-upload

> Passo 5
Digite o seguinte comando para trabalhar com relatórios dinâmicos

 >> npm install mochawesome -D

> Passo 6 - Execução
Para executar o projeto temos 2 formas.
  1 - npx cypress open (Abrir a IDE Cypress para selecionar o cenário a ser executado em HEADLESS)
  2 - npm run test:chrome (Executar projeto de forma rapida e gerar os relatórios automáticos)


## DICA PARA DESENVOLVER OS TESTES

> Passo 1
Na pasta <feature> Desenvolva um arquivo em formato Gherkin referente aos cenários propostos

> Passo 2
Na pasta <steps> Crie um novo arquivo .js e desenvolva seus steps de acordo com os arquivos <Feature>

> Passo 3
Na pasta <ELEMENTOS> crie um arquivo e mapeie todos os elementos contidos na tela 

> Passo 4
Na pasta <pageobjects> crie um arquivo e desenvolva todas as suas ações de tela e não se esqueça de importar os arquivos da pasta <ELEMENTOS>

> Passo 5
Na no seu terminal , rode os comandos de execução <nxp cypress open> ou <npm run test:chrome> e veja a magica acontecer.




