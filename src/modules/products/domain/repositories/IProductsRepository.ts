import { IProduct } from '../models/IProduct';
import { IFindProducts } from '../models/IFindProducts';
import { ICreateProduct } from '../models/ICreateProduct';
import { IUpdateStockProduct } from '../models/IUpdateStockProduct';
import { IProductPaginate } from '../models/IProductPaginate';

export interface IProductsRepository {
  create(data: ICreateProduct): Promise<IProduct>;
  save(product: IProduct): Promise<IProduct>;
  remove(product: IProduct): Promise<void>;
  updateStock(products: IUpdateStockProduct[]): Promise<void>;
  findByName(name: string): Promise<IProduct | undefined>;
  findById(id: string): Promise<IProduct | undefined>;
  findAll(): Promise<IProduct[]>;
  findAllPaginate(): Promise<IProductPaginate>;
  findAllByIds(products: IFindProducts[]): Promise<IProduct[]>;
}
