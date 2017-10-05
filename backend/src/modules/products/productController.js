import productList from './productList';

export const productsController = async (req, res) => {
  res.json(productList);
};

export const productDetailController = async (req, res) => {
  const { params, query } = req;
  const { products } = productList;
  const filteredProducts = products.filter(product => product[params.id] == query.q);

  const data = {
    products: filteredProducts,
    params,
    query,
    time: new Date(),
  };

  res.json(data);
}
