# Elementos e JSX

## Introdução

JSX é uma sintaxe baseada em XML que nos permite escrever **elementos HTML** em JavaScript e inserí-los no DOM sem nenhum método como **createElement()** ou **appendChild()**.

É importante lembrar que você não precisa obrigatoriamente usar o JSX, mas o JSX facilita e agiliza muito a escrita de aplicativos React.

## Criando Elementos

Para compreendermos melhor a ideia de criação de elementos, vamos fazer algumas alterações em nosso arquivo `App.js`:

```javascript
import React from 'react';
import './App.css';

function App() {
  const h1 = <h1>Hello World</h1>
  return (
    <div className="App">
      { h1 }
    </div>
  );
}

export default App;
```

Perceba a seguinte síntaxe:

```javascript
const h1 = <h1>Hello World</h1>
```

Observe que estamos definindo um elemento `h1` com o texto Hello World, essa síntaxe específica não se trata de uma string ou HTML, mas sim **JSX**, que é uma extensão de sintaxe do JavaScript. Recomendamos usá-lo com o React para descrever a aparência da Interface de Usuário. O JSX pode lembrá-lo de uma linguagem de template, mas com ele vem com todo o poder do JavaScript. **JSX** produz "elementos" React.

No exemplo anterior, nós declaramos uma variável `h1` que cria um elemento React. 

Considere agora a seguinte síntaxe:

```javascript
<div className="App">
  { h1 }
  <h2>{ 2 + 2 }</h2>
</div>
``` 

Veja que estamos utilizando **chaves**(**{}**), dentro delas nós podemos colocar qualquer expressão JavaScript válida. Por exemplo, nosso elemento `h1` será apresentado em nossa Interface de Usuário e a expressão `2 + 2` será avaliada para `4`. Podemos também utilizar funções, para entendermos melhor, vamos novamente editar nosso arquivo `App.js`:

```javascript
import React from 'react';
import './App.css';

function App() {
  const livro = {
    titulo: '1984',
    autor: 'George Orwell'
  }
  function formatarLivro(livro){
    return `Título: ${livro.titulo} Autor: ${livro.autor}`
  }
  const elemento = (
    <h1>{ formatarLivro(livro) }</h1>
  )
  return (
    <div className="App">
      { elemento }
    </div>
  );
}

export default App;
```

Definimos um objeto chamado `livro`, uma função `formatarLivro` que nos retorna o título e o autor do livro e por fim criamos um `elemento h1`, dentro dele chamamos a função `formatarLivro()` passando o objeto **livro** como argumento. Por fim, injetamos o elemento criado por nós na Interface de Usuário através da expressão `{ elemento }`.

## JSX como Expressão

JSX também é uma expressão, após a compilação, as expressões JSX se tornam chamadas regulares de função JavaScript e avaliam como objetos JavaScript, novamente vamos alterar nosso arquivo `App.js` para ilustrarmos essa ideia:

```javascript
import React from 'react';
import './App.css';

function App() {
  function usuarioLogado(usuario){
    if(usuario){
      return <h1>{ usuario } logado</h1>
    }
    return <h1>Necessário fazer login com um usuário</h1>
  }
  return (
    <div className="App">
      { usuarioLogado('Alan Turing') }
      { usuarioLogado() }
    </div>
  );
}

export default App;
```

JSX nos permite utilizá-lo dentro das instruções `if` e `for loops`, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-lo das funções. Perceba que definimos uma função chamada de `usuarioLogado()` que recebe um **usuario** como argumento. O bloco `if` somente será executado se houver um usuario fornecido via argumento, caso não haja um usuário fornecido, o último **return** da função será executado. Posteriormente, dentro de nossa `div` estamos utilizando as expressões para invocar nossa função `usuarioLogado()`.

## Especificando Atributos com JSX

Podemos usar **chaves**(**{}**) para incorporar uma expressão JavaScript em um atributo, vamos alterar novamente o nosso arquivo `App.js` para vermos um exemplo:

```javascript
import React from 'react';
import './App.css';

function App() {
  const imagem = 'https://i.imgur.com/jgNrYhw.png'
  return (
    <div className="App">
      <img src={imagem} />
    </div>
  );
}

export default App;
```

Declaramos uma string chamada de `imagem`, posteriormente em nossa Interface de Usuário utilizamos a tag `img` com a nossa variável `imagem` sendo utilizada em uma **expressão** no atributo **src** que por sua vez nos apresentará a imagem em nossa tela.

## Inspecionando Elementos JSX

De forma a compreendermos os elementos React vamos utilizar o `console.log()` para imprimirmos no **console** de nosso navegador o objeto **Symbol(react.element)**, vamos então editar nosso arquivo `App.js` e criar um elemento parágrafo.

```javascript
import React from 'react';
import './App.css';

function App() {
  const elemento = <p>React</p>
  console.log(elemento)
  return (
    <div className="App">
      { elemento }
    </div>
  );
}

export default App;
```

Ao abrir nosso **console**, vamos nos deparar com o seguinte **objeto**:

```javascript
"$$typeof": Symbol(react.element)
​_owner: Object { tag: 0, key: null, index: 0, … }
​_self: null
​_source: Object { fileName: "/Documentos/Javascript/React/projeto/src/App.js", lineNumber: 5 }
​_store: Object { … }
​  key: null
​props: {…}
​​  children: "React"
​​  <prototype>: Object { … }
​ref: null
​type: "p"
​​<prototype>: Object { … }
```

Perceba que estamos lidando com um **objeto** especial do tipo **Symbol(react.element)** com diversas propriedades.

## JSX Representa Objetos

O **[Babel](https://babeljs.io/)** é um transcompilador JavaScript de código aberto e gratuito usado principalmente para converter o código ECMAScript 2015+(ES6 +) em uma versão compatível com versões anteriores do JavaScript que pode ser executada por mecanismos JavaScript mais antigos. Babel é uma ferramenta popular para usar os recursos mais recentes da linguagem de programação JavaScript.

Babel compila **JSX** para chamadas **React.createElement()**.

Vamos considerar o seguinte exemplo, onde criamos um elementos através de duas maneiras diferentes, editamos então o arquivo `App.js`:

```javascript
import React from 'react';
import './App.css';

function App() {
  const h1 = (
    <h1 className="classe">
      React!
    </h1>
  );
  const h2 = React.createElement(
    'h2',
    {className: 'classe'},
    'JS!'
  );
  return (
    <div className="App">
      { h1 }
      { h2 }
    </div>
  );
}

export default App;
```

Perceba que de ambas as formas é possível criar um elemento, porém é muito mais confortável utilizarmos a primeira opção. 

**Sobre os elementos React:** Você pode pensar neles como descrições do que deseja ver na tela. O React lê esses objetos e os utiliza para construir o DOM e mantê-lo atualizado.
