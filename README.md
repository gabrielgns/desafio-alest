# Desafio Alest

Projeto criado para responder o desafio do processo de seleção para o estágio na [Alest](https://alest.com.br/).

## Carros CRUD

Um CRUD básico de exposição de carros criado com o backend em Node.js com express, banco de dados Firestore da Google e frontend em React com styled-components.
Com protótipo feito por mim no Figma, e anotações e cronograma para organização no Notion.

### Notion

Anotações básicas para acompanhamento do progresso no [Notion](https://www.notion.so/Alest-5af67f681be84de2a71b527a70779e24).

### Figma

Protótipo das telas no [Figma](https://www.figma.com/file/WF9rijpo5Xvfargzb0hm3X/Desafio-Alest?node-id=0%3A1).

### Especificação

Documentação detalhada sobre o que deve ser feito no projeto [Google Docs](https://docs.google.com/document/d/1ff7xUfC5DO02jsUPP37aQjYt-eWSAfbb75ZeSGmzkzg/edit?ts=60469487#heading=h.ppzw0qtvnna).

### Executar

```
git clone https://github.com/gabrielgns/desafio-alest.git
```

**Entre no Repositório**

```
cd desafio-alest
```

**Entre na pasta do backend para roda-lo**

```
cd api
```

```
npm start
```

**Seu backend já está rodando na porta 8080 do seu localhost**
**Agora em outro terminal já dentro da pasta desafio-alest inicie o frontend**

```
yarn start
```

**Ele deve abrir na porta 3000 do seu localhost**

### Observações

Não consegui concluir 100% mas como recomendado no e-mail estou enviando a parte feita, teve uma queda geral da Claro NET, que é o provedor de internet que utilizo, na minha região no sábado e acabou me atrasando com relação ao prazo, por isso vou listar alguns pontos importantes para ficar de olho com relação a implementação.

- Ao adicionar um novo carro os dados são enviados para o backend, confirmamos isso ao olhar no Firestore, porém não é adicionado o carro na página inicial.
- Os carros que estão na home foram adicionados por mim na hora dos testes.
- Não é possível deletar ou editar um carro, mas os endpoints do backend estão funcionando perfeitamente, podemos conferir utilizando uma ferramenta como o Postman.
- Para voltar da tela de adicionar o carro basta clicar na "Logo" CRUD Carro.
- Onde tem usuário sería para uma implementação futura do login.
