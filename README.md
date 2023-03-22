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




