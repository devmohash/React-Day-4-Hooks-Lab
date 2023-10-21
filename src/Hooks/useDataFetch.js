import { useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = () => {
      setSpinner(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setSpinner(false);
          setProducts(res.data);
        })
        .catch((error) => {
          setError(error);
          setSpinner(false);
        });
    };
    getProducts();
  }, []);
  return [products, spinner, error];
};
export default useDataFetch;
