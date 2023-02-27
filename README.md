## Quarta prova dos Trainees B8One

A Quarta prova vai abordar diversos temas como conhecimento em React, Javascript, Html, Css, GraphQL, Localstorage, utilização de layouts baseados em Figma.

Você deve forkar o projeto e subir no seu github para a avaliaçao final, os commits, tudo, será considerado!

Resumidamente a prova consiste na aplicação de uma regionalização, utilizando uma API GraphQL, ao regionalizar, você receberá como devolutiva os dados e produtos de uma loja específica para o estado selecionado, o email e estado devem ser salvos no localStorage para futuras utilizações e o usuário no Local Storage para no recarregamento da página conseguir ter os dados para manter o usuário regionalizado.

Trabalhar bem os feedbacks para o usuário.

##### Backend Dicas

Utilizar o Apollo GraphQL ou o framework de preferência para conexão do frontend via client-side, utilizar os hooks do graphql para utilizar a query de storeRegionalization.

Para as pessoas que vão para a fase 4, será necessário utilizar a mutation de addItem para "adicionar" o item escolhido no carrinho.

##### Link da API

https://trainees-fourth-proof-igode.ondigitalocean.app/graphql

##### Imagem da API no GraphiQL

<img width="1155" alt="store-regionalization-query" src="https://user-images.githubusercontent.com/22692042/220747133-ad291a60-77d1-40b3-bfbb-5ee019956775.png">

###### *SOMENTE FASE 4

<img width="1153" alt="add-item-mutation" src="https://user-images.githubusercontent.com/22692042/220747153-8250b91e-d8a8-4151-822e-1ff0923771b7.png">

### Front-end

Ao implementar a interface abaixo, é necessário utilizar a stack React com CSS. Caso você se sinta a vontade, poderá utilizar Styled Components, Stitches, SCSS ou qualquer outro processador de CSS.

Importante se atentar ao implementar a interface com as dimensões propóstas, ou seja, seguir padrões de pixel perfect. Atente-se também as funcionalidades desenhadas no layout, como login, gráficos e menu.

A regionalização será dinâmica, ou seja, utilizará a API de GraphQL criada para fazer a integração.

O layout é responsivo, ou seja, possui telas Desktop e mobile, portanto é necessário a implementação de ambas resoluções.

##### Link do protótipo

Desktop: https://www.figma.com/proto/be9az7SuuqDt2kst2WTGTT/Prova-Trainee%27s-Fev-%2F-VTEX-IO?page-id=2%3A62&node-id=1558%3A31500&viewport=788%2C-825%2C0.36&scaling=min-zoom&starting-point-node-id=1558%3A31500

Mobile: https://www.figma.com/proto/be9az7SuuqDt2kst2WTGTT/Prova-Trainee%27s-Fev-%2F-VTEX-IO?page-id=199%3A8063&node-id=971%3A33465&viewport=61%2C566%2C0.53&scaling=scale-down&starting-point-node-id=971%3A33465
