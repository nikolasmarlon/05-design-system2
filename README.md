# 05-design-system2
 
- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] CheckBox
- [ ] Avatar
- [ ] MultStep

O projeto será dividido em vários pacotes (packages)
 criar a pasta packages e dentro a pasta tokens
    - no terminal dentro da pasta tokens rodar =>  npm init -y, que vai criar um arquivo packade.json
    - em seguida foi trocado o nome de "name": "tokens" para "name": "@ignite-ui/tokens", pois teremos varios pacotes e foi adicionado um nome de organização para serem publicados no NPM.
    - Criar uma pasta src dentro de tokens para criar os arquivos de tokens 
    - Criado dentro da pasta src o arquivo colors.ts e como se trata de um pacote, foi criado outro arquivo
    index.ts reexporta o que tem dentro de colors.ts para facilitar na hora de importar o pacote em outros arquivos.
    Ex: import { colors } from '@ignite-ui/tokens/colors'
        import { colors } from '@ignite-ui/tokens/'
        - Não precisa repetir colors no final da importação


    Próximo passo, instalar dentro de tokens como dependência de desenvolvimento typescript
    --- npm i -D typescript

    depois rodar 
    --- npx tsc --init, para criar o arquivo de tsconfig.json
    


    para converter o código typeScript para javaScript, basta rodar o no terminal ...
    --- npx tsc


--- Build do pacote com TSUP
# TSUP 
    -- é uma ferramenta que ajuda no processo de conversão do código num arquivo javascript que vai ser carregado por outras aplicações 
    

    instalar tsup como dependência de desenvolvimento dentro de tokens

    --- npm i tsup -D
    Depois de instalar vamos criar dois scripts dentro de package.json
    "build": "tsup src/index.ts --format esm,cjs --dts"
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"   Monitorar os arquivos durante o desenvolvimento 

    Vamos dentro do pacote e rodamos --- npm run build //oque vai gerar uma pasta dist dentro do pacote

    Já o script de dev fica monitorando as alterações 


## Monorepo
    É um conceito introduzido principalmento dentro do javaScript, que é a prática de colocar vários projetos dentro de um único repositório, não necessariamente significa um repositório do github, seria um espaço de tabalho com vários projetos dentro. estes projetos são dependentes entre si. 


# Criação do pacote react
    acessa o pacote e dar um --- npm init -y
    instalar o typeScript como dependência de dev. --- npm i typescript -D
    também instalar o tsUp  --- npm i tsup -D   //Para fazer o processo de build

    vamos em package.json do pacote react e trocar o nome do projeto

    criar uma pasta src e dentro um arquivo index.ts

### Para mostrar o processo de importação entre os pacotes 
    vamos na pasta root(design-system2) a pasta principal do projeto e dar um --- npm init -y //com isso teremos um package.json global independente dos pacotes entro do projeto
    Obs. o package.json global nao importa muito, pois ele nao será publicado no npm, vamos remover praticamente tudo e deixar somente os scripts dento do arquivo package.json global
    e fazer algumas configurações neste arquivo 
    ## a primeiria é "private": true //que diz que o pacote nao vai ser publicado
    ## depois adicionar "workspaces":[
    "packages/*"
    ], //Uma array mostrando onde estão os pacotes, informando a pasta onde estão e o /* é para falar que todas as pastas dentro da pasta packages são os repositórios do monorepo

    Depois vou deletar a pasta node_modules dentro de tokens e dento da pasta react.

    e dentro do pacote react vou falar que este pacote tem uma dependência de dev que é o outro pacote  "@nikolas-ui/tokens": "*",

    depoias vou na pasta principal do design-system2 e dou um --- npm i //o que vai criar um arquivo package-lock.json ... agora todas as dependências são gerenciadas de uma forma global e também temos uma única pasta node_modules 

    Para fazer uma importação de dentro do pacote tokens para o pacote react, precisamos no package.json dentro de tokens falar qual o script principal(main), mudar o main para  "main": "dist/index.js", além disto passar uma opção module informando o arquivo principal quando você usa EcmaScriptModules vamos adicionar "module": "./dist/index.mjs",

    e também adicionar "types": "./dist/index.d.ts", que vai ser usada pelo typescript para falar quais são as tipagens, que é o arquivo de definição de tipos

    por fim, fazer o mesmo processo no pacote do react

# Configuração do TypeScript
## Pacote ts-config
Vamos criar um pacote dento de packages chamado ts-config
dentro dela dar um --- npm init -y 
Não vamos precisar instalar nada dentro
Vamos mudar o nome dentro de package.json
O arquivo vai ficar assim 
{
  "name": "@nikolas-ui/ts-config",
  "version": "1.0.0",  
  "license": "MIT",
  "private": "true"
}
esse arquivo vai ser private true, pq nao quero publicar no NPM 

vamos criar dois arquivos de configuração do typescript, um chamado base.json e outro chamado react.json.


depois temos referenciar este pacote dentro dos outros pacotes em dev dependencies adiciona
"@nikolas-ui/ts-config": "*",


# EsLint-config

Vamos criar uma configuração para todos os pacotes do eslint
Acessar a pasta e dar um --- npm init -y que vai criar o package.json e dentro desse arquivo vamos mudar alguams informações
e retirar algumas coisas
adicionar nome do projeto "name": "@nikolas-ui/eslint-config",

arquivo vai ficar assim?
{
  "name": "@nikolas-ui/eslint-config",
  "license": "MIT",
  "private": "true",
  "main": "index.js"
}

esse arquivo vai ter o main sendo o index.js

E dentro do pacote vamos instalar duas dependências de dev.
--- npm i -D eslint @rocketseat/eslint-config  //Precisei rodar o comando duas vezes, pois a primeira nao instalou as dependências

Dentro do index.js temos que configurar o eslint

depois adicionar as dependências nos package.json do pacote react e tokens     "@nikolas-ui/eslint-config": "*",

Depois criar o arquivo de configuração do eslint dentro de react e dentro de tokens .eslint.json

depois criar um script dentro de tokens e react dentro de package.json dos dois pacotes

## Fazendo o pacote react 
para começar vamos instalar como dependência de Dev --- npm i -D react @types/react @types/react-dom
O react instalado como dependência somente de desenvilvimento é pq quem usar nosso pacote tem que estar com o react instalado em seu projeto, e também para nao duplicar a instalação do react no projeto do usuário


temos também que adicionar em package.json, no script build e no script dev, -- external react, ficando assim 
"build": "tsup src/index.ts --format esm,cjs --dts --external react",
"dev": "tsup src/index.tsx --format esm,cjs --dts --external react --watch",

Isso avisa para o tsup que vamos importar o react de uma aplicação externa


para implementar o componente, vamos mudar o nome do arquivo index.ts dentro do pacote react para index.tsx


### Vamos fazer uma configuração base de estilização 