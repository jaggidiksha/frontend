import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './allprods.css'

const AllProducts = () => {

    const [products, setProducts] = useState(null);

    const deleteProd = async (id) => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/delproduct/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                const { message } = await res.json();
                getAllProducts();
                alert(message);
            } else {
                alert("Error occurred")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getAllProducts = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/getproducts`);
            if (res.ok) {
                const { data } = await res.json();
                setProducts(data)
            } else {
                alert("Error Occurred")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <section className='allprod'>
            <h2>AllProducts</h2>
            <div className="container">
                {
                    products ? products.map((prod, i) => (
                        <div className="card" key={i} >
                            <div className="top">
                                <img src={prod.imgLink} alt="error loading" loading='lazy' />
                                <p>{prod.title}</p>
                            </div>
                            <div className="actions">
                                <button onClick={() => deleteProd(prod._id)} >delete</button>
                                <Link to={`/product/${prod._id}`} ><button>↗️</button></Link>
                                <Link to={`/update/${prod._id}`} ><button>Update</button></Link>
                            </div>
                        </div>
                    )) : ( <p>No Products</p> )
                }
            </div>
        </section>
    )
}

export default AllProducts