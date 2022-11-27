/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader";
import Search from "../components/common/Search";
import ProductFlex from "../components/products/ProductFlex";
import { getAllProducts } from "../utils/product/getAllProducts";

function Shop() {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
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

  var searchedProducts = products?.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // useEffect(() => {
  //   if (user?.data) {
  //     if (
  //       user?.data?.type[0] !== "Patient" ||
  //       user?.data?.type[0] !== "Pharmacy"
  //     ) {
  //       router.push("/profile");
  //     }
  //   } else {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  // useEffect(() => {
  //   if (!user?.data) {
  //     router.push("/login");
  //   } else if (
  //     user?.data?.type[0] != "Pharmacy" ||
  //     user?.data?.type[0] != "Admin" ||
  //     user?.data.type[0] != "Patient"
  //   ) {
  //     router.push("/");
  //   }
  // }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Search noFilter={true} state={search} setState={setSearch} />
      <ProductFlex products={searchedProducts} />
      {user?.data?.type?.includes("Pharmacy") && (
        <Link href="/create-product" passHref={true}>
          <div className="p-6 md:p-7 lg:p-8 w-3 h-3 sm:h-6 sm:w-6 lg:h-12 lg:w-12 bg-theme fixed bottom-0 right-0 m-2 flex items-center justify-center text-white text-3xl sm:text-4xl rounded-full cursor-pointer shadow-md">
            +
          </div>
        </Link>
      )}
    </>
  );
}

export default Shop;
