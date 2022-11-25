import React from "react";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import ProductFlex from "../components/products/ProductFlex";
import { getAllProducts } from "../utils/product/getAllProducts";

function ShopPage() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    getAllProducts().then((response) => {
      if (response.success) {
        setProducts(response.data);
        setLoading(false);
      }
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <ProductFlex products={products} />
    </div>
  );
}

export default ShopPage;
