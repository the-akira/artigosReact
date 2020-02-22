# Instalação

Primeiramente é necessário termos o gerenciador de pacotes Javascript **[NPM](https://www.npmjs.com/)** em nossa máquina, sendo assim faremos o download de [NodeJS](https://nodejs.org/en/) que nos fornecerá acesso ao NPM.

Uma vez instalados, você pode verificar suas respectivas versões através dos comandos

```
node -v
npm -v
```

### Create React App

Para facilitar a vida dos desenvolvedores o Facebook criou o **[Create React App](https://github.com/facebook/create-react-app)**, um ambiente pré-configurado com tudo o que você precisa para criar um aplicativo React. Ele criará um servidor de desenvolvimento ativo, usará o Webpack para compilar automaticamente os arquivos React, JSX e ES6, e usará o ESLint para testar e avisar sobre erros no código.

Para instalar o **create-react-app** em sua máquina, você pode digitar o seguinte comando:

```
npm install -g create-react-app 
```

Agora já estamos aptos a criar aplicações React, vamos criar uma chamada de **projeto**, para esta tarefa executaremos o seguinte comando:

```
npx create-react-app projeto 
```

**create-react-app** irá preparar nosso projeto instalando os pacotes necessários para o funcionamento de nossa aplicação. Agora que instalação foi finalizada, vamos navegar até o diretório principal de nosso projeto:

```
cd projeto
```

E finalmente vamos executar nossa aplicação:

```
npm start
```

Podemos navegar até o endereço `http://localhost:3000` para ver nossa aplicação funcionando! 

Já temos um ambiente de desenvolvimento configurado, podemos agora iniciar nossos estudos sobre os conceitos fundamentais de React, porém antes iremos remover os respectivos arquivos de nosso **projeto**:

- ~~src/App.test.js~~
- ~~src/index.css~~
- ~~src/logo.svg~~
- ~~src/serviceWorker.js~~
- ~~src/setupTests.js~~

O diretório `src` contará apenas com os arquivos

**App.js**

```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
```

**App.css**

```css
.App {
  text-align: center;
}
```

**index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Nossa aplicação já se encontra configurada, agora podemos estudar os conceitos fundamentais de React!
