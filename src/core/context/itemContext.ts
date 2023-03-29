import { createContext } from 'react';

interface IContext {
  item: any;
  id: string;
}

const ItemContext = createContext<IContext>({ id: '', item: null });

export default ItemContext;
