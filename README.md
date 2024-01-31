## Desafio 01 - API Rest de Ordens de Compra

### Endpoints

- Listar assets - GET /api/assets
- Criar assets - POST /api/assets
- Criar orders - POST /api/orders
- Listar orders - GET /api/orders

---

### Entidades

```
Asset {
  id: string;
  symbol: string;
}
```

```
Order {
  id: string;
  asset_id: string;
  price: number;
  status: 'open'| 'pending' | 'closed'
}
```

---

### Requisitos:

1. Utilize o TypeORM para definir os modelos (Asset e Order) e configurar a conexão com o banco de dados SQLite.

2. Configure o relacionamento entre Order e Asset de forma que ao criar uma ordem, o usuário possa enviar o asset_id correspondente ao ativo desejado.

3. Utilize a opção cascade do TypeORM para permitir a criação de uma ordem junto com um novo ativo, se o ativo ainda não existir.

4. Utilize eager loading para garantir que, ao listar as orders, os dados do ativo associado (Asset) também sejam carregados.

5. Crie o arquivo api.http para fazer chamadas HTTP e teste as operações de criar/listar assets e orders.
