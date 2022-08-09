 <h1 align="center"> Frexco Front-End Challenge </h1>

<p align="center">
<img src="https://camo.githubusercontent.com/459f141bd5e24c179a0e2dd49691e290ed5c5d4b4cb97767daee7cfaf6e31121/687474703a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d535441545553266d6573736167653d434f4e434c5549444f26636f6c6f723d475245454e267374796c653d666f722d7468652d6261646765">
</>

## Descrição do Projeto

<h4 align="justify"> Projeto que visa a construção de um e-commerce de Hortifruti. </h4>


## 🔨 Tecnologias

- ``Javascript``
- ``React``

## ⚙️ Uso

- Após baixar o arquivo, executar no terminal : ``npm install``
- Posteriormente, para inicializar o mocking de API, executar: ``json-server --watch db.json``
- Finalmente, para visualizar o projeto React, executar em outra aba do terminal: ``npm run dev``


## 📝 Detalhes

- Foi utilizado um mocking de API por meio do ``json-server`` com a response prevista, tendo em vista que a API passada na especificação não tinha definido os headers do CORS apropriadamente.
- Foram utilizadas rotas customizadas por meio do ``React Router``.
- Foram utilizados diversos componentes do ``Material-UI`` durante o projeto.
- Foi implementado um sistema que exibe um ``Snackbar`` de alerta à medida que um item é adicionado ao carrinho.
- Além da informação nutricional poder ser vista no carrinho, ela pode ser vista na listagem de produtos ao clicar no dropdown.
- Foi feita uma adição do campo ``price`` ao objeto, dessa forma, foi elaborada uma lógica de carrinho completa, incluindo preço específico e geral.
