# Components e Props

Os **Components** permitem que possamos dividir nossa Interface do Usuário em partes independentes e reutilizáveis, fazendo com que possamos tratá-las isoladamente. **Componentes** são como funções que recebem dados(**props**) e retornam elementos HTML, eles também pode possuir **state**, que veremos com maiores detalhes em breve.

Outra definição seria que os **Components** são microentidades independentes e auto-sustentáveis que descrevem uma parte da sua Interface do Usuário. A interface do usuário de uma aplicação pode ser dividida em components menores, onde cada component tem seu próprio código, estrutura e API.

![img](https://i.imgur.com/8ewnLfR.png)

Existem dois tipos de Components: **Function components** e **Class components**

## Function components

- **Function components** são funções básicas do JavaScript. Normalmente, são *arrow functions*, mas também podem ser criadas com a palavra-chave `function` regular.
- Chamados no passado de componentes "limitados" ou "*stateless*", pois eles simplesmente aceitavam dados e os exibiam de alguma forma, essa realidade mudou quando introduziram a *feature* **Hooks** no React, que hoje permite Functional Components terem **state**.
- Eles são os principais responsáveis pela renderização da **Interface do Usuário**.
- Não há a presença do método `render()` em Functional Components.
- Functional Components podem aceitar e usar **props**.

Lembrando que ao criar um component React, o nome do component deve começar com uma letra maiúscula. Para entendermos melhor, vejamos alguns exemplos de Functional Components:

### Quote Component

Definimos um component de nome **Quote** utilizando a tradicional palavra-chave `function`, veja que estamos recebendo **props**, espeficiamente duas: **texto** e **autor** e estamos retornando ambos em nosso **JSX**.

```javascript
function Quote(props) {
  const texto = props.texto
  const autor = props.autor
  return ( 
    <div>
      <p><b>Texto:</b> { texto }</p>
      <small><b>Autor:</b> { autor }</small>
    </div>
  )
}
```

### Operacoes Component

Definimos um component de nome **Operacoes** utilizando uma *arrow function*, observe que também estamos recebendo especificamente duas funções: **multiplicacao()** e **adicao()** e um objeto de nome **valores** como **props** e estamos utilizando eles em nossas expressões **{}**.

```javascript
const Operacoes = (props) => {
  return (
    <div>
      <p>{ props.multiplicacao(props.valores.x, props.valores.y) }</p>
      <p>{ props.adicao(props.valores.x, props.valores.y) }</p>
    </div>
  )
}
```

### Quadrado Component

Definimos um component de nome **Quadrado** utilizando uma *arrow function*, este que recebe um array de números como **props** e os eleva ao quadrado.

```javascript
const Quadrado = (props) => {
  return props.valores.map(valor => <p>{ valor ** 2 }</p>)
}
```

Logo vamos utilizá-los em nossa aplicação, porém antes vamos fazer um estudo sobre os **Class components**.

## Class components

- Os **Class components** usam a classe ES6 e estendem a classe **Component** no React.
- Conhecidos também como componentes "inteligentes" ou "*stateful*", pois tendem a implementar lógica e **state**.
- Os métodos de *Lifecyle* de React podem ser implementados dentro dos Class components(por exemplo: `componentDidMount`).
- Podemos passar **props** para os Class components e conseguimos acessá-los com `this.props`

Vejamos um exemplo de Class components:

### Linguagens Component

Através do uso da palavra-chave `class`, característica especial da especificação ES6, declaramos uma classe chamada **Linguagens** e estamos estendendo `Component`, que nos fornece propriedades especiais. O único método que você deve definir obrigatoriamente em uma subclasse `Component` é chamado `render()`. Nesse component estamos basicamente definindo um array de linguages de programação e apresentando-as em nossa Interface de Usuário através do método **map()** que nos permite mapear cada elemento do array em um `<li>`.

```javascript
import React, { Component } from 'react'

class Linguagens extends Component {
  render () {
    const linguagens = ['Javascript', 'Python', 'C++']
    return (
      <nav>
        <h1>Linguagens de Programação</h1>
        <ul>
           { linguagens.map(linguagem => <li>{ linguagem }</li>) }
        </ul>
      </nav>
    )
  }
}
```

## Renderizando nossos Components

Desde então estamos trabalhando com o arquivo `App.js`, que por sua vez possui um component `App`, ele é o component root, o principal de nossa aplicação, e é através dele que vamos renderizar nossos components. Porém, antes de tudo, vamos criar um arquivo `.js` para component, dentro da pasta `src`, vamos criar então os arquivos:

#### Linguagens.js

```javascript
import React, { Component } from 'react'

class Linguagens extends Component {
  render () {
    return (
      <nav>
        <h1>Linguagens de Programação</h1>
        <ul>
           { this.props.linguagens.map(linguagem => <li>{ linguagem }</li>) }
        </ul>
      </nav>
    )
  }
}

export default Linguagens
```

#### Quadrado.js

```javascript
import React from 'react'

const Quadrado = (props) => {
  return props.valores.map(valor => <p>{ valor ** 2 }</p>)
}

export default Quadrado
```

#### Quote.js

```javascript
import React from 'react'

export function Quote(props) {
  const texto = props.texto
  const autor = props.autor
  return ( 
    <div>
      <p><b>Texto:</b> { texto }</p>
      <small><b>Autor:</b> { autor }</small>
    </div>
  )
}
```

#### Operacoes.js

```javascript
import React from 'react'

export const Operacoes = (props) => {
  return (
    <div>
      <p>{ props.multiplicacao(props.valores.x, props.valores.y) }</p>
      <p>{ props.adicao(props.valores.x, props.valores.y) }</p>
    </div>
  )
}
```

Agora vamos importar nossos components no arquivo `App.js` para que possamos renderizá-los, vamos então editá-lo da seguinte maneira:

```javascript
import React from 'react'
import Linguagens from './Linguagens'
import Quadrado from './Quadrado'
import { Quote } from './Quote'
import { Operacoes } from './Operacoes'
import './App.css'

const App = () => {
  function multiplicacao(x, y) {
    return x * y
  }
  const adicao = (x, y) => {
    return x + y
  }
  return (
    <div className="App">
        <Linguagens linguagens={['Javascript', 'Python', 'C++']} />
        <hr />
        <Quote 
        texto="Tell me and I forget. Teach me and I remember. Involve me and I learn"
        autor="Benjamin Franklin" 
        />
        <Quote 
        texto="Getting information off the Internet is like taking a drink from a fire hydrant"
        autor="Mitchell Kapor" 
        />
        <hr />
        <Operacoes 
        multiplicacao={multiplicacao}
        adicao={adicao} 
        valores={{x: 3, y: 99}}
        />
        <hr />
        <Quadrado valores={[5,10,15,20]} />
        <hr />
    </div>
  );
};

export default App;
```

No topo de nosso arquivo, estamos importando os components, veja que importamos de duas maneiras diferentes, **Linguagens** e **Quadrado** não envolvemos em **{}**, isso porque exportamos eles no modo **default**, o que nos permite importá-los com qualquer nome desejado, porém optei por não alterar seus nomes, embora pudesse. Já os components **Quote** e **Operacoes** que não foram exportamos no modo **default**, foi necessário o uso de **{}** com o nome exato do component.

Feitas as importações, vamos para nosso component root `App`, nele estamos definindo duas funções `multiplicacao()` e `adicao()` que serão passamos como **props** para o component `Operacoes`.

Finalmente em nosso **JSX**, estamos retornando nossos components para serem renderizados e apresentados na Interface do Usuário:

#### Linguagens

No component Linguagens estamos passando o array linguagens como **props**

```javascript
<Linguagens linguagens={['Javascript', 'Python', 'C++']} />
```

#### Quote

Estamos renderizando dois components Quote, cada um recebendo seus **props** exclusivos

```javascript
<Quote 
texto="Tell me and I forget. Teach me and I remember. Involve me and I learn"
autor="Benjamin Franklin" 
/>
<Quote 
texto="Getting information off the Internet is like taking a drink from a fire hydrant"
autor="Mitchell Kapor" 
/>
``` 

#### Operacoes

O component Operacoes está recebendo nossas duas funções como **props** e também um objeto de nome **valores**, que estamos utilizando como argumento em nossas funções.

```javascript
<Operacoes 
multiplicacao={multiplicacao}
adicao={adicao} 
valores={{x: 3, y: 99}}
/>
```

#### Quadrado

Por fim, nosso component Quadrado recebe um array de números que serão elevados ao quadrado e apresentados na Interface de Usuário.

```javascript
<Quadrado valores={[5,10,15,20]} />
```
