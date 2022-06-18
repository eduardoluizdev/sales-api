import { IProduct } from '../models/IProduct';
import { IFindProducts } from '../models/IFindProducts';
import { ICreateProduct } from '../models/ICreateProduct';
import { IUpdateStockProduct } from '../models/IUpdateStockProduct';
import { IProductPaginate } from '../models/IProductPaginate';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IProductsRepository {
  create(data: ICreateProduct): Promise<IProduct>;
  save(product: IProduct): Promise<IProduct>;
  remove(product: IProduct): Promise<void>;
  updateStock(products: IUpdateStockProduct[]): Promise<void>;
  findByName(name: string): Promise<IProduct | null>;
  findById(id: string): Promise<IProduct | null>;
  findAll({ page, skip, take }: SearchParams): Promise<IProductPaginate>;
  findAllByIds(products: IFindProducts[]): Promise<IProduct[]>;
}
