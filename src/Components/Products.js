import React, { useState, useEffect } from "react";

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            setData(await response.clone().json());
            setFilter(await response.json());
        };

        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mt-5 mb-3">
                    <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => setFilter(data)}
                    >
                        All
                    </button>
                    <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => filterProduct("men's clothing")}
                    >
                        Men's Clothing
                    </button>
                    <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => filterProduct("women's clothing")}
                    >
                        Womens's Clothing
                    </button>
                    <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => filterProduct("jewelery")}
                    >
                        Jewelery
                    </button>
                    <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => filterProduct("electronics")}
                    >
                        Electronic
                    </button>
                </div>

                <div className="container mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-lg-4">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div className="col col-lg-1">
                            <button className="btn btn-dark" type="submit" >Search</button>
                        </div>
                    </div>
                </div>



                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        height="250px"
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title}</h5>
                                        <p className="card-text lead fw-bold mt-3">${product.price}</p>

                                    </div>
                                    <div className="item-center">
                                        <a href="/" className="btn btn-outline-dark ">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts />
                </div>
            </div>
        </div>
    );
}
