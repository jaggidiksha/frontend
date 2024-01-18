import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductPage.css'

const ProductPage = () => {
    const navi = useNavigate();

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id);


    const getAllProduct = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/product/${id}`);
            if (res.ok) {
                const { data } = await res.json();
                setProduct(data)

            } else {
                alert("Error Occurred")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllProduct();
    }, [])

    return (
        <section className='ProductPage'>
            <button className='backBtn'  onClick={()=>navi(-1)} >Back</button>

            {
                product ? (
                    <div className="ProductContainer" >
                        <p style={{fontWeight:"bold"}} >{product.title}</p>
                        <img src={product.imgLink} alt="error loading" loading='lazy' />
                        <p>{product.body}</p>
                        <p>${product.price}</p>
                        
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }

        </section>
    )
}

export default ProductPage