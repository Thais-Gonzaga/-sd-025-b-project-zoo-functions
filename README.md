
# Boas-vindas ao repositório do projeto Zoo Functions!
	
Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.
	
# Termos e acordos
	
Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.
	
# Entregáveis
	
<details>
	<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.
	
Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
	
</details>
	
<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Sabendo das suas habilidades com `ES6`, `Higher Order Functions` e testes, a prefeitura da cidade te deu uma importante missão: organizar as informações do zoológico! 🐘
  
  Você vai ser responsável por desenvolver funções que buscam informações sobre os animais do zoológico como: espécie e local de origem. Além disso, você também vai buscar dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico. 🧑‍🌾

  E não para por aí! 🤩

  Você já aprendeu sobre a importância de ter uma mentalidade orientada a testes, não é mesmo? E também já sabe como a implementação de testes contribui para a escrita de códigos mais confiáveis e com boa performance. 
  
  A sequência dos requisitos desse projeto foi disposta de forma a te proporcionar a experiência de entender na prática como o desenvolvimento orientado a testes ajuda a garantir um código de qualidade. Para isso, você vai implementar testes para funções já existentes, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta! 🚀 

<br />

</details>
	
<details>
<summary><strong>🗓 Data de Entrega</strong></summary><br />

- Este projeto é individual
	
- São `4` dias de projeto
	
- Data para entrega final do projeto: `dd/mm/yyyy - 14:00h`
	
	
</details><br />
	
# Orientações
	
<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git clone git@github.com:tryber/sd-0x-project-zoo-functions.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd sd-0x-project-zoo-functions`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Crie uma branch a partir da branch `main`

	* Verifique se você está na branch `main`
	  * Exemplo: `git branch`
	* Se não estiver, mude para a branch `main`
	  * Exemplo: `git checkout main`
	* Agora, crie uma branch para qual você vai submeter os `commits` do seu projeto:
		* Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
		* Exemplo: `git checkout -b luiza-zoo-functions-project`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
	* Verifique que as mudanças ainda não estão no _stage_
	  * Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)

	* Adicione o novo arquivo ao _stage_ do Git
	  * Exemplo: `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
	  *  `git status` (deve aparecer listado os arquivos do diretório `src` em verde)

	* Faça o `commit` inicial
	  * Exemplo: `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
	*  `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

	* Usando o exemplo anterior: `git push -u origin luiza-zoo-functions-project`

6. Crie um novo `Pull Request`  _(PR)_
	* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-zoo-functions/pulls)
	* Clique no botão verde _"New pull request"_
	* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
	* Coloque um título para o seu _Pull Request_
    * Exemplo: _"Cria tela de busca"_
	* Clique no botão verde _"Create pull request"_
	* Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
	*  **Não se preocupe em preencher mais nada por enquanto!**
	* Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-zoo-functions/pulls) e confira que o seu _Pull Request_ está criado.
	
</details>
	
<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />
	
* Faça `commits` das alterações que você fizer no código regularmente;
	
* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;
	
* Os comandos que você utilizará com mais frequência são:
	
1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
	
2. `git add` _(para adicionar arquivos ao stage do Git)_;
	
3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
	
4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;
	
5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.
	
</details>
	
<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o _'Code Review'_ dos seus colegas, faça o seguinte:
	
- Vá até a página **DO SEU** _Pull Request_, adicione a label de _'code-review'_ e marque seus colegas:
	
- No menu à direita, clique no _link_ **'Labels'** e escolha a _label_ **code-review**;
	
- No menu à direita, clique no _link_ **'Assignees'** e escolha **o seu usuário**;
	
- No menu à direita, clique no _link_ **'Reviewers'** e digite `students`, selecione o time `tryber/students-sd-0x`.
	
Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).
	
⚠️ **Lembre-se que garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠️
	
</details>
	
<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.
	
</details>
	
<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Para garantir a qualidade do código, vamos utilizar neste projeto o `ESLint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! 

Para poder rodar o `ESLint` certifique-se de ter executado o comando `npm install` dentro do projeto.

Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️
	
</details>
	
<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para que os testes sejam executados localmente, verifique se a versão do node na sua máquina é a `16`:

```bash
node -v
```

Caso a versão seja diferente, você pode utilizar o `nvm` para trocar de versão com o seguinte comando:

```bash
nvm use 16
```

Caso você não tenha o `nvm` instalado na sua máquina, você pode consultar o [conteúdo para instalação do nvm](https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/60b99b90-bcd4-4189-9198-3389f7f742f3/instalacao-do-node-para-linux/156d871d-97f2-4169-b766-85e4e56812ac?use_case=side_bar) 

Todos os requisitos do projeto serão testados **automaticamente** por meio do `Jest`.
	
Para testar todas funções no terminal, basta executar o comando abaixo:
	
```bash
npm test
```

Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test nome-do-arquivo
```

Por exemplo:

```bash
npm test getSpeciesByIds
```

## Cobertura de testes

Nesse projeto você precisará implementar testes para duas funções já criadas: `handlerElephants` e `getOpeningHours`.

Essa cobertura avalia a eficácia dos testes implementados de acordo com os requisitos, determinando se cobrem o que foi pedido ou não.

**Observação:**
- É importante destacar que a função `getOpeningHours` possui uma lógica específica para validar os horários 12am e 12pm. Portanto, para uma total cobertura, seus testes devem verificar também, como a função se comporta ao receber estes horários.

⚠️ **Serão testadas apenas as duas funções pedidas e não toda a aplicação!**

Conforme você for realizando os testes do projeto, a porcentagem da cobertura total irá aumentar. Para cada requisito de teste, será avaliada uma porcentagem de cobertura.

Para executar e acompanhar a implementação da sua cobertura de testes, rode o comando abaixo:

```bash
npm run test:coverage
```

Ao executar o comando você vai ter um resultado similar a este:

![Cobertura de Testes](img/cobertura.png)

Neste projeto iremos focar na cobertura de *statements* (ou seja, as instruções em JavaScript). Será avaliada a porcentagem de cobertura das instruções das funções, conforme destacado na figura abaixo:

![Cobertura de instruções](img/cobertura_stmts.png)

Além disso, a tabela também vai mostrar quais linhas ainda não cobertas por testes. Ou seja, quando não existe caso de teste que execute aquela instrução.

Verifique com `npm test` se todos os itens da cobertura dos testes estão passando corretamente.

⚠️ **Atenção**: cuidado com eventuais falso-positivos!

Ao rodar o comando de cobertura de teste, a pasta `coverage` será criada, com um arquivo `index.html`. Este arquivo apresenta um relatório da análise de cobertura. Neste relatório é possível visualizar quais linhas **não** estão sendo cobertas pelos testes.

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>
	
<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

Na pasta raiz do projeto, temos as pastas `src`, `test`, `evaluator` e `data`.

A pasta `src` é composta por arquivos referentes a cada uma das funções que você irá implementar, a pasta `data` contém o arquivo `zoo_data.js`, que armazena os dados que você vai utilizar para retornar as informações sobre o zoológico.

Este projeto possui também alguns requisitos para a implementação de testes. A pasta `test`, contém os arquivos em que você implementará os testes unitários correspondentes a cada função, o nome do arquivo é o nome da função alvo acrescido do sufixo `.test.js`.

**Por exemplo:** o arquivo `src/getOpeningHours.js` conterá a implementação da função `getOpeningHours` e o arquivo `test/getOpeningHours.test.js` deve conter os testes que você vai desenvolver referentes a ela.

A pasta `evaluator` possui os testes automatizados que avaliarão o seu projeto; os conteúdos desta pasta não devem ser alterados.

<details>
  <summary>
    O arquivo <code>zoo_data.js</code> contém um <strong>objeto</strong> no seguinte formato:
  </summary> <br />

```javascript
{
	species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        }
      ],
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    }
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
}
```

<details>
  <summary>
  O array <code>species</code> guarda as informações de cada espécie do zoológico
  </summary> <br />

  | Chave | Descrição |
  | ------------ | ----------|
  | `id`         | é o identificador da espécie |
  | `name`       | é o nome da espécie, por exemplo, `lions` |
  | `popularity` | é o popularidade daquela espécie |
  | `location`   | é a região que a espécie do animal veio, pode ter os seguintes valores: <br> - `NE`: nordeste; <br> - `NW`: noroeste; <br> - `SE`: sudeste; <br> - `SW`: sudoeste. |
  | `availability` | é a disponibilidade de visitação dos animais dessa espécie |
  | `residents`    | são as informações dos animais daquela espécie que residem no zoológico, onde: <br> - `name`: é o nome do animal, por exemplo `'Zena'`; <br> - `sex`: é o sexo do animal, por exemplo: `'female'` (fêmea); <br> - `age`: é a idade do animal. |

</details>

<details>
  <summary>
  O array <code>employees</code> é onde ficam as informações de cada pessoa colaboradora
  </summary> <br />

  | Chave | Descrição |
  | ----------- | ------ |
  | `id`        | é o identificador dessa pessoa |
  | `firstName` | é o primeiro nome dessa pessoa |
  | `lastName` | é o último nome dessa pessoa |
  | `managers` | são os `ids` das lideranças dessa pessoa |
  | `responsibleFor` | são os `ids` das espécies que essa pessoa é responsável |

</details>

<details>
  <summary>
  O objeto <code>hours</code> guarda as informações sobre o horários de funcionamento do zoológico
  </summary> <br />

  | Chave | Descrição|
  | ------ | ------ |
  | `Tuesday`<br> `Wednesday`<br> `Thursday`<br> `Friday`<br> `Saturday`<br> `Sunday`<br> `Monday` | são os dias da semana: <br> - `open`: é o horário que o zoológico abre; <br> - `close`: é o horário que o zoológico fecha. |

</details>

<details>
  <summary>
    O objeto <code>prices</code> é responsável por guardar as informações sobre o valor da entrada do zoológico
  </summary> <br />

  | Chave | Descrição |
  | -------- | ------ |
  | `adult`  | é o preço para adultos |
  | `senior` | é o preço para idosos |
  | `child`  | é o preço para crianças |

</details>

</details>

<br />

⚠️ **Apenas os arquivos indicados nos requisitos devem ser alterados, caso contrário, sua avaliação poderá ser comprometida.**

Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.
	
</details>

<details>
<summary><strong>🏪 O que você deve desenvolver </strong></summary><br />

Você deve complementar as funções criadas dentro da pasta `src` e deverá criar testes para as funções já prontas `handlerElephants` e `getOpeningHours`.
	
</details>
	
<details>
<summary><strong>⚛️ Dica</strong></summary><br />

Ao trabalhar com desenvolvimento, você vai se deparar com vários tipos de desafios, por isso é muito importante que os problemas sejam quebrados em partes menores, para que sejam resolvidos aos poucos. Isso vai te ajudar a encontrar uma solução de maneira mais fácil. Dessa forma, um bom jeito de começar a desenvolver um projeto é lembrar que as funções são compostas por pequenos blocos de lógica que têm um objetivo específico.

Não se esqueça de verificar o que cada parte do seu código retorna! Você pode fazer isso utilizando o `console.log`, que é um ótimo aliado na visualização do seu código! 😉

⚠️ **Atente-se para o retorno de cada parte do seu código**

</details>
	
<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. **Leva menos de 3 minutos!**
	
[Formulário de avaliação do projeto](https://bit.ly/2OfLJPn)
	
</details>
	
<details>
<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />
Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.
	
</details><br />

---

# Requisitos Obrigatórios

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Implemente a função `getSpeciesByIds`.

<details>
  <summary>
  Implemente a função <code>getSpeciesByIds</code> para buscar as espécies dos animais por meio de um <code>ID</code> e retorne um array contendo todos os animais dessa espécie. 
  </summary> <br />

- Faça com que a função `getSpeciesByIds` possa receber vários parâmetros;

- Retorne um array vazio se a função não receber um `id`;

- Retorne as seguintes informações do arquivo `data`:

  - Se a função receber apenas um `id`, retorne a espécie do animal referente a este `id`;

  - Se a função receber vários `ids`, retorne todas as espécies referente a esses `ids`.

**O que será testado:**

- A função `getSpeciesByIds`, caso não receba nenhum parâmetro, deve retornar um array vazio;

- A função `getSpeciesByIds`, caso receba como parâmetro um único `ID`, deve retornar um array com a espécie referente a esse `ID`;

- A função `getSpeciesByIds`, caso receba mais de um `ID`, deve retornar um array com as espécies referentes aos `IDs`.

</details>

---

## 2. Implemente a função `getAnimalsOlderThan`.

<details>
  <summary>
  Implemente a função <code>getAnimalsOlderThan</code> que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
  </summary> <br />

- Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
  - Os animais devem ter essa idade ou serem mais velhos.

- Retorne um valor booleano.

**O que será testado:**

- A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.

</details>

---

## 3. Implemente a função `getEmployeeByName`.

<details>
  <summary>
    Implemente a função <code>getEmployeeByName</code> que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.
  </summary> <br />

- Retorne um objeto vazio caso a função não receba parâmetros;

- Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome **ou** igual ao último nome no seguinte formato:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```

**O que será testado:**

- A função deve retornar um objeto vazio caso não receba parâmetros;

- A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro; 

- A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.
	

</details>

---

## 4. Implemente a função `getRelatedEmployees`.

<details>
  <summary>
    Implemente a função <code>getRelatedEmployees</code> para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.
  </summary> <br />

- Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:

1. A função `isManager` será responsável por verificar se uma pessoa colaboradora é gerente:
    - Deve retornar `true` se o `id` passado for de uma pessoa gerente;
    - Deve retornar `false` se o `id` passado não for de uma pessoa gerente.

2. A função `getRelatedEmployees` será responsável por retornar as pessoas lideradas pela gerência:
      - Utilize a função `isManager` para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

        - Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.

        Exemplo de output:

        ```javascript

        [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];

        ```

        - Caso a pessoa não seja gerente, dispare um erro com a mensagem: **'O id inserido não é de uma pessoa colaboradora gerente!'**.
  
        Para lançar o erro, você vai utilizar a função construtora **Error** da biblioteca padrão do JavaScript.

        Exemplo:

        ```javascript

        throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');

        ```

        Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

  **O que será testado:**

  - A função `isManager` deve retornar `true` se o `ID` passado for de uma pessoa gerente;

  - A função `isManager` deve retornar `false` se o `ID` passado não for de uma pessoa gerente;

  - A função `getRelatedEmployees`, caso o `ID` passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

  - A função `getRelatedEmployees`, caso o `ID` passado **não** for da pessoa gerente, deve disparar um erro com a mensagem: `'O id inserido não é de uma pessoa colaboradora gerente!'`.

</details>

---

## 5. Implemente a função `countAnimals`.

<details>
  <summary>
    Implemente a função <code>countAnimals</code> que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.
  </summary> <br />

- A função `countAnimals` é responsável por contar a quantidade de animais que residem no zoológico.
  
- Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

```javascript
  {
    lions: 4,
    // [...]
  }
```

- Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

  - ao receber o argumento `{ specie: 'penguins' }`, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

  - ao passar o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

**O que será testado:**

- A função `countAnimals`, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;

- A função `countAnimals`, caso receba como parâmetro um objeto com a chave `specie`, deve retornar a quantidade de animais daquela espécie;

- A função `countAnimals`, caso receba como parâmetro um objeto com as chaves `specie` e `sex`, deve retornar a quantidade de animais daquela espécie, no sexo selecionado.

</details>

---

## 6. Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`.

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 80% de cobertura
  </summary> <br />

Essa função retorna informações referentes aos elefantes conforme o argumento passado:

| Argumento | Informação |
| --------- | ---------- |
| `count` | retorna a quantidade de elefantes |
| `names` | retorna um array com a relação dos nomes de todos os elefantes |
| `averageAge` | retorna a média de idade dos elefantes |
| `location` | retorna a localização dos elefantes dentro do Zoológico |
| `popularity` | retorna a popularidade dos elefantes |
| `availability` | retorna um array com a relação de dias em que é possível visitar os elefantes |

> **De olho na dica 👀:** Antes de começar a escrever os testes, leia a função `handlerElephants` e procure entendê-la linha a linha

- Implemente os testes nos arquivos da pasta `test` que está na raiz do projeto;

- A função `handlerElephants` já está implementada, sendo necessário apenas criar os testes;

- A função é case sensitive;

- Use o comando `npm test handlerElephants` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura.

**A cobertura irá checar apenas as funções destacadas e não toda a aplicação!**

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja ao menos 80%

- Para o argumento `count` deve retornar o número inteiro `4`;

- Para o argumento `names` deve retornar um array de nomes que possui o nome `Jefferson`;

- Para o argumento `averageAge` deve retornar um número próximo a `10.5`;

</details>

</details>

---

## 7. Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`.

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter ao menos 90% de cobertura
  </summary> <br />

Essa função retorna informações referentes aos elefantes conforme o argumento passado:

| Argumento | Informação |
| --------- | ---------- |
| `count` | retorna a quantidade de elefantes |
| `names` | retorna um array com a relação dos nomes de todos os elefantes |
| `averageAge` | retorna a média de idade dos elefantes |
| `location` | retorna a localização dos elefantes dentro do Zoológico |
| `popularity` | retorna a popularidade dos elefantes |
| `availability` | retorna um array com a relação de dias em que é possível visitar os elefantes |

- A função é case sensitive;

- Use o comando `npm test handlerElephants` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura.

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja ao menos 90%.

- Para o argumento `count` deve retornar o número inteiro `4`;

- Para o argumento `names` deve retornar um array de nomes que possui o nome `Jefferson`;

- Para o argumento `averageAge` deve retornar um número próximo a `10.5`;

- Para o argumento `location` deve retornar a string `NW`;

- Para o argumento `popularity` deve retornar um número igual ou maior a 5;

- Para o argumento `availability` deve retornar um array de dias da semana que não contém `Monday`;

- Não passando argumentos a função deve retornar `undefined`;

</details>

</details>

---

## 8. Implemente a função `calculateEntry`.

<details>
  <summary>
    Calcule o valor <strong>total</strong> da entrada dos visitantes do zoológico. 
  </summary> <br />

O valor das entradas do zoológico é calculado a partir da faixa etária, onde:

  - `child`: são pessoas **menores** de 18 anos;

  - `adult`: são pessoas com idade **maior ou igual** a 18 anos **e menor** que 50 anos;

  - `senior`: são pessoas com idade **maior ou igual** a 50 anos.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de `countEntrants` e `calculateEntry`. 

As duas funções recebem um array no seguinte formato:

```javascript
const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
```

1. A função `countEntrants` será responsável por calcular a quantidade de visitantes por faixa etária: 

  Ela recebe um array e deve retornar um **objeto**. Para isso:

  - Realize a soma da quantidade de visitantes por faixa etária;

  - Retorne um objeto em um formato como esse: `{ child: 3, adult: 2, senior: 1 }`.

2. A função `calculateEntry` será responsável por somar o valor da entrada das pessoas no zoológico:

  Ela recebe um array e deve retornar a soma **total** dos valores do ingresso. Para isso:

  - Retorne `0` se nenhum parâmetro for passado ou seja um array vazio;

  - Utilize a função `countEntrants` para ter a quantidade total de pessoas por faixa etária;

  - Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: `187.94`.

> **De olho na dica 👀:** O valor a ser cobrado pela faixa de idades também consta no arquivo de dados.

**Exemplo de uso da função `calculateEntry`:**

```javascript
calculateEntry(entrants);
```

**Saída:**

```javascript
187.94
```

**O que será testado:**

- A função `countEntrants`:

  - Ao receber um array de visitantes, retorna um objeto com a contagem.

- A função `calculateEntry`:

  - Retorna 0 se nenhum argumento for passado;

  - Retorna 0 se um objeto vazio for passado;

  - Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;

  - Ao receber um array com 1 pessoa adulta retorna o valor correto;

  - Ao receber um array com 1 pessoa mais velha retorna o valor correto;

  - Ao receber um array com 1 criança retorna o valor correto;

  - Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto.

</details>

---

## 9. Implemente a função `getSchedule`.

<details>
  <summary>
   Implemente a função <code>getSchedule</code> que irá disponibilizar um cronograma com os horários de visita da semana disponíveis para cada espécie de animal.
  </summary> <br />

  As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.

  - Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: `[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

   Retorne todos os horários disponíveis para cada dia da semana caso a função:

    - não receba parâmetro;

    - o parâmetro passado para a função não seja um animal ou um dia;

  Para isso:

  - Crie um objeto e adicione todos os dias da semana como chave;

  - Os valores de cada dia da semana deve ser um objeto, possuindo as chaves `officeHour` e `exhibition`:

    - `officeHour` deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

    - `exhibition` deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

<details>
  <summary>
    O retorno deve ser parecido com esse:
  </summary> <br />

  ```javascript
  {
    Tuesday: { // Dia da semana
      officeHour: 'Open from 8am until 6pm', // n
      exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
    },
    // [...]
  }
  ```

</details>

> **De olho na dica 👀:** Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.

**O que será testado:**

- A função, caso receba o nome de um animal por parâmetro, deverá retornar um array com os dias em que ele estará em exibição;

- A função caso não receba parâmetros, deverá retornar os horários para cada dia e quais animais estarão disponíveis;

- A função, caso receba parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;

- A função, caso receba um único dia por parâmetro, deverá retornar os horários para aquele dia e quais animais estarão disponíveis.


</details>

---

## 10. Implemente a função `getOldestFromFirstSpecies`.

<details>
  <summary>
    Implemente a função <code>getOldestFromFirstSpecies</code> que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.
  </summary> <br />

- A função recebe um parâmetro `ID` referente à pessoa colaboradora e a partir desse `ID`:

  - A função deverá encontrar a pessoa colaboradora que possui o `ID` passado por parâmetro;

  - A função deverá encontrar a **primeira** espécie de animal que a pessoa colaboradora é responsável;

  - A função deverá encontrar o animal mais velho daquela espécie;

  - A função deverá retornar um array com as informações do animal mais velho daquela espécie.

**O que será testado:**

- Passado o id de uma pessoa colaboradora, a função `getOldestFromFirstSpecies` deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie.

</details>

---

## 11. Implemente a função `getEmployeesCoverage`.

<details>
  <summary>
    Implemente a função <code>getEmployeesCoverage</code> que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.
  </summary> <br />

- A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:

  - `name`: o nome **ou** sobrenome da pessoa a ser buscada;

  -  `id`: o id da pessoa a ser buscada.

- A função deve retornar um objeto no seguinte formato:

```javascript
{
	id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
	fullName: "Sharonda Spry", // nome completo: firstName + lastName
	species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
	locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

Para isso:

  - Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade `name`:
    - a propriedade `name` pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras. 

  - Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade `id`;

  - Retorne um array com as informações de **todas** as pessoas colaboradoras caso a função não receba parâmetro;

  - Lance um erro caso o `id` seja inválido.


**Exemplos de uso da função `getEmployeesCoverage`:**

  <details>
    <summary>
      Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora 
    </summary> <br />

**ENTRADA:**

```javascript
getEmployeesCoverage({ name:  'Sharonda' }); // name recebe o primeiro nome como parâmetro ou
getEmployeesCoverage({ name:  'Spry' }); // name recebe o último nome como parâmetro ou
getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro
```

**SAÍDA:**

```json
{
	"id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
	"fullName": "Sharonda Spry",
	"species": [ "otters", "frogs" ],
	"locations": [ "SE", "SW" ]
}
```

</details>

  <details>
    <summary>
      Caso a função não receba parâmetros, retorne um array com a informação de <strong>todas</strong> as pessoas colaboradoras
    </summary> <br />

**ENTRADA:**

```javascript
getEmployeesCoverage();
```

**SAÍDA:**

```javascript
[
	{
		"id":  "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
		"fullName":  "Nigel Nelson",
		"species": [ "lions", "tigers" ],
		"locations": [ "NE", "NW" ],
	},
	{
		"id":  "0e7b460e-acf4-4e17-bcb3-ee472265db83",
		"fullName":  "Burl Bethea",
		"species": [ "lions", "tigers", "bears", "penguins" ],
		"locations": [ "NE", "NW", "NW", "SE" ],
	},
	{
		"id":  "fdb2543b-5662-46a7-badc-93d960fdc0a8",
		"fullName":  "Ola Orloff",
		"species": [ "otters", "frogs", "snakes", "elephants" ],
		"locations": [ "SE", "SW", "SW", "NW" ],
	},
	//[...]
];
```

</details>

<details>
  <summary>
    Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro
  </summary> <br />

Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"Informações inválidas"**. Exemplo:

```javascript
throw new Error('Informações inválidas');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

</details> 

<br />

> **De olho na dica 👀:** Crie funções que dividam as tarefas em partes menores. Por exemplo, você pode criar uma função `getSpecies` encarregada somente por buscar o nome das espécies que a pessoa é responsável.

**O que será testado:**

- A função, caso o objeto passado por parâmetro tenha a propriedade `name`, deverá retornar somente a pessoa correspondente;

- A função poderá receber como parâmetro um objeto com a propriedade `name` recebendo o segundo nome como valor;

- A função, caso o objeto passado por parâmetro tenha a propriedade `id`, deverá retornar somente a pessoa correspondente;

- A função, caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;

- A função, caso não haja nenhuma pessoa com o `name` ou `id` especificados deverá lançar um `error`.

</details>

---

## 12. Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`.

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter ao menos 85% de cobertura
  </summary> <br />

Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

> **De olho na dica 👀:** Antes de começar a escrever os testes, leia a função `getOpeningHours` e procure entendê-la linha a linha.

- Implemente os testes nos arquivos da pasta `test` que está na raiz do projeto;

- A função `getOpeningHours` já está implementada, sendo necessário apenas criar os testes;

- Use o comando `npm test getOpeningHours` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura;

- O nome do dia da semana passado como argumento tem que ser em inglês;

- O horário precisa ter a seguinte formatação `'XX:XX-XM'`;

- As horas serão validadas na nomenclatura `'AM'` e `'PM'`;

- A função não faz diferenciação entre maiúsculas e minúsculas;

**A cobertura irá checar apenas as funções destacadas e não toda a aplicação!**

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja ao menos 85%.

- Teste não passando argumentos. Deverá retornar o objeto:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

- Para os argumentos `Monday` e `09:00-AM` deve retornar a string `'The zoo is closed'` (Já que o Zoo está sempre fechado na segunda);

- Para os argumentos `Tuesday` e `09:00-AM` deve retornar a string `'The zoo is open'`;

- Para os argumentos `Wednesday` e `09:00-PM` deve retornar a string `'The zoo is closed'`;

</details>

</details>

---

## 13. Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`.

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 95% de cobertura
  </summary> <br />

  Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

- Use o comando `npm test getOpeningHours` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura;

- O nome do dia da semana passado como argumento tem que ser em inglês;

- O horário precisa ter a seguinte formatação `'XX:XX-XM'`;

- As horas serão validadas na nomenclatura `'AM'` e `'PM'`;

- A função não faz diferenciação entre maiúsculas e minúsculas.

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja ao menos 95%.

- Teste não passando argumentos. Deverá retornar o objeto:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

- Para os argumentos `Monday` e `09:00-AM` deve retornar a string `'The zoo is closed'` (Já que o Zoo está sempre fechado na segunda);

- Para os argumentos `Tuesday` e `09:00-AM` deve retornar a string `'The zoo is open'`;

- Para os argumentos `Wednesday` e `09:00-PM` deve retornar a string `'The zoo is closed'`;

- Para os argumentos `Thu` e `09:00-AM` deve lançar uma exceção com a mensagem: `'The day must be valid. Example: Monday'`

- Para os argumentos `Friday` e `09:00-ZM` deve lançar uma exceção com a mensagem: `'The abbreviation must be \'AM\' or \'PM\''`;

- Para os argumentos `Saturday` e `C9:00-AM` deve lançar uma exceção com a mensagem: `'The hour should represent a number'`;

- Para os argumentos `Sunday` e `09:c0-AM` deve lançar uma exceção com a mensagem: `'The minutes should represent a number'`;

</details>

</details>

---

## 14. Implemente a função `getAnimalMap`.

<details>
  <summary>
    Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.
  </summary> <br />

- A função `getAnimalMap` é responsável por categorizar os animais por localização, além de filtrá-los por região, nome e sexo a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies:

```javascript
  {
    NE: [ /* dados aqui */],
    NW: [/* dados aqui */],
    SE: [/* dados aqui */],
    SW: [/* dados aqui */],
  }
```
  
   Os parâmetros da função podem ser:

   <details>
     <summary>
      <code>includeNames: true</code>, que retorna o nome dos animais no seguinte formato:
     </summary> <br />

```javascript
  NE: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
```
   </details>

<details>
  <summary>
    <code>sorted: true</code> que retorna o nome dos animais por ordem alfabética no seguinte formato:
  </summary> <br />

  ```javascript
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
  ],
  // [...]
```
</details>

<details>
  <summary>
    <code>sex: male</code> ou <code>sex: female</code> retorna o <strong>nome</strong> dos animais que são machos ou fêmeas no seguinte formato:
  </summary><br />

```javascript
  NE: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
```

⚠️ **Atenção:** Se o parâmetro for `{ sex: male }`, retorne apenas o nome dos animais machos e se o parâmetro for `{ sex: female }` retorne apenas o nome dos animais fêmeas.

</details>

<details>
  <summary>
  Caso a função não receba parâmetro, as espécies dos animais devem ser categorizadas por localização e deve retornar um objeto no seguinte formato:
  </summary> <br />

  ```javascript
  {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  }
  ```

</details>

Para isso:

  - Retorne a espécie de todos os animais categorizados por localização caso a função:

    - não receba parâmetro;

    - não receba o parâmetro `{includeNames: true}` e receba apenas o parâmetro `{sex: female}`;

    - não receba o parâmetro `{includeNames: true}` e receba apenas o parâmetro `{sex: female, sorted: true}`.

  - Retorne a espécie e o nome dos animais caso a função receba apenas o parâmetro `{includeNames: true}`;

  - Retorne a espécie e o nome dos animais em ordem alfabética caso a função receba o parâmetro `{includeNames: true, sorted: true}`;

  - Retorne a espécie e o nome dos animais filtrado por sexo:

    - Retorne a espécie e o nome dos animais fêmeas, caso o parâmetro da função seja `{includeNames: true, sex: female}`;

    - Retorne a espécie e o nome dos animais machos, caso o parâmetro da função seja `{includeNames: true, sex: male}`;

  - Retorne a espécie e o nome dos animais filtrado por sexo e por ordem alfabética:

    - Retorne a espécie e o nome dos animais fêmeas em ordem alfabética, caso o parâmetro da função seja `{includeNames: true, sex: female, sorted: true}`;

    - Retorne a espécie e o nome dos animais machos em ordem alfabética, caso o parâmetro da função seja `{includeNames: true, sex: male, sorted: true}`;
  
> **De olho na dica 👀:** Você não precisa diferenciar os filtros de sexo entre `female` ou `male`, apenas por `sex`.

**O que será testado:**

- A função, caso não receba parâmetros, deverá retornar animais categorizados por localização;

- A função, caso receba parâmetro sem a opção `includeNames` especificada, deverá retornar animais categorizados por localização;

- A função, caso receba parâmetro com a opção `includeNames: true` especificada, deverá retornar nomes de animais;

- A função, caso receba parâmetro com a opção `sorted: true` especificada, deverá retornar nomes de animais ordenados;

- A função, caso receba parâmetro com a opção `sex: 'female'` ou `sex: 'male'` especificada, deverá retornar somente nomes de animais macho/fêmea;

- A função, caso receba parâmetro com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sorted: true` especificada, deverá retornar somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

</details>

---

# Requisitos Bônus

## 15. Obtenha 100% de cobertura de testes na função `handlerElephants`.

<details>
  <summary>
    Implemente os testes da função <code>handlerElephants</code> para obter 100% de cobertura
  </summary> <br />

Essa função retorna informações referentes aos elefantes conforme o argumento passado:

| Argumento | Informação |
| --------- | ---------- |
| `count` | retorna a quantidade de elefantes |
| `names` | retorna um array com a relação dos nomes de todos os elefantes |
| `averageAge` | retorna a média de idade dos elefantes |
| `location` | retorna a localização dos elefantes dentro do Zoológico |
| `popularity` | retorna a popularidade dos elefantes |
| `availability` | retorna um array com a relação de dias em que é possível visitar os elefantes |

- A função é case sensitive;

- Use o comando `npm test handlerElephants` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura.

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.

<details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja 100%.

- Para o argumento `count` deve retornar o número inteiro `4`;

- Para o argumento `names` deve retornar um array de nomes que possui o nome `Jefferson`;

- Para o argumento `averageAge` deve retornar um número próximo a `10.5`;

- Para o argumento `location` deve retornar a string `NW`;

- Para o argumento `popularity` deve retornar um número igual ou maior a 5;

- Para o argumento `availability` deve retornar um array de dias da semana que não contém `Monday`;

- Não passando argumentos a função deve retornar `undefined`;

- Passando por argumento um objeto vazio (`{}`) deve retornar a string `'Parâmetro inválido, é necessário uma string'`;

- Passada uma string que não contempla uma funcionalidade deve retornar `null`.

</details>
</details>

---

## 16. Obtenha ao menos 100% de cobertura de testes na função `getOpeningHours`.

<details>
  <summary>
    Implemente os testes da função <code>getOpeningHours</code> para obter 100% de cobertura
  </summary> <br />

  Esta função recebe como argumentos um dia da semana e um horário, e retorna uma mensagem informando se o zoológico está aberto ou não naquela data e hora.

- Use o comando `npm test getOpeningHours` para verificar se seus testes estão passando;

- Use o comando `npm run test:coverage` para testar a cobertura;

- O nome do dia da semana passado como argumento tem que ser em inglês;

- O horário precisa ter a seguinte formatação `'XX:XX-XM'`;

- As horas serão validadas na nomenclatura `'AM'` e `'PM'`;

- A função não faz diferenciação entre maiúsculas e minúsculas.

⚠️ **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.


  <details>
  <summary>
    💡 <strong> Dicas do que você pode testar:</strong>
  </summary> <br />

⚠️ **Atenção:** Os tópicos abaixo são apenas sugestões, sinta-se livre para testar o que achar necessário desde que a cobertura da função atinja ao menos 100%.

- Teste não passando argumentos. Deverá retornar o objeto:

```javascript
{
	Tuesday: { open: 8, close: 6 },
	Wednesday: { open: 8, close: 6 },
	Thursday: { open: 10, close: 8 },
	Friday: { open: 10, close: 8 },
	Saturday: { open: 8, close: 10 },
	Sunday: { open: 8, close: 8 },
	Monday: { open: 0, close: 0 },
}
```

- Para os argumentos `Monday` e `09:00-AM` deve retornar a string `'The zoo is closed'` (Já que o Zoo está sempre fechado na segunda);

- Para os argumentos `Tuesday` e `09:00-AM` deve retornar a string `'The zoo is open'`;

- Para os argumentos `Wednesday` e `09:00-PM` deve retornar a string `'The zoo is closed'`;

- Para os argumentos `Thu` e `09:00-AM` deve lançar uma exceção com a mensagem: `'The day must be valid. Example: Monday'`

- Para os argumentos `Friday` e `09:00-ZM` deve lançar uma exceção com a mensagem: `'The abbreviation must be \'AM\' or \'PM\''`;

- Para os argumentos `Saturday` e `C9:00-AM` deve lançar uma exceção com a mensagem: `'The hour should represent a number'`;

- Para os argumentos `Sunday` e `09:c0-AM` deve lançar uma exceção com a mensagem: `'The minutes should represent a number'`;

- Para os argumentos `Monday` e `13:00-AM` deve lançar uma exceção com a mensagem: `'The hour must be between 0 and 12'`;

- Para os argumentos `Tuesday` e `09:60-AM` deve lançar uma exceção com a mensagem: `'The minutes must be between 0 and 59'`.

</details>

</details>
