# <p align='center'>weeev API</p>
  
## O que é?

REST API do app weeev - [https://weeev.fun](https://weeev.fun).
  
## Índice
  
 1. Banco de dados  
 2. Endpoints da API  
 3. Estrutura de pastas  

 ## Banco de dados

 O banco de dados foi feito conforme o diagrama abaixo, usando PostgreSQL:

 ![image](https://user-images.githubusercontent.com/66050113/203556877-02303ce8-2301-4185-b1eb-5e5e1eaa0ee4.png)

 ## Endpoints da API

 ![image](https://user-images.githubusercontent.com/66050113/203557532-56387892-ba7d-46bd-bbe2-a2f1b97c6f6d.png)

 ## Estrutura de pastas

 controllers/
 &emsp;ideas/
 &emsp;&emsp;exampleController.controller.js
 &emsp;users/
 middlewares/
 models/
 &emsp;idea.model.js
 &emsp;participant.model.js
 &emsp;user.model.js
 routes/
 &emsp;ideas.routes.js
 &emsp;users.routes.js
 utils/
 &emsp;data/
 &emsp;database/
 &emsp;functions/
 api.js