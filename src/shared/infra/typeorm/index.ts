import { DataSource } from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';
import User from '@modules/users/infra/typeorm/entities/User';

import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import { CreateProducts1646700811987 } from './migrations/1646700811987-CreateProducts';
import { CreateUsers1647007366685 } from './migrations/1647007366685-CreateUsers';
import { CreateUserTokens1647209621517 } from './migrations/1647209621517-CreateUserTokens';
import { CreateCustomers1647443731228 } from './migrations/1647443731228-CreateCustomers';
import { CreateOrders1647476199009 } from './migrations/1647476199009-CreateOrders';
import { AddCustomerIdtoOrders1647476356373 } from './migrations/1647476356373-AddCustomerIdtoOrders';
import { CreateOrdersProducts1647477208385 } from './migrations/1647477208385-CreateOrdersProducts';
import { AddOrderIdtoOrdersProducts1647477341480 } from './migrations/1647477341480-AddOrderIdtoOrdersProducts';
import { AddProductIdtoOrdersProducts1647477733348 } from './migrations/1647477733348-AddProductIdtoOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'salesapi-db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1646700811987,
    CreateUsers1647007366685,
    CreateUserTokens1647209621517,
    CreateCustomers1647443731228,
    CreateOrders1647476199009,
    AddCustomerIdtoOrders1647476356373,
    CreateOrdersProducts1647477208385,
    AddOrderIdtoOrdersProducts1647477341480,
    AddProductIdtoOrdersProducts1647477733348,
  ],
});
