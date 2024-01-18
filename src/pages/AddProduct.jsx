import React, { useState } from 'react'
import './addProducts.css'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navi = useNavigate();
    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [body, setBody] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState(null);

    const submitFormData = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title, imgLink, body, price
                })

            });

            if (res.ok) {
                alert("Added")
                setError(null)
                navi('/all')
            }
        } catch (error) {
            console.log(error)
            setError("Error Occurred!")
        }

    }

    return (
        <section className='addProd'>
            <div className="formContainer">
                <h2>Add Product</h2>
                <form onSubmit={submitFormData}>
                    <div className="inputBox">
                        <label htmlFor="title">Product Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name='title' placeholder='Product title here...' required />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="imgLink">Product Image:</label>
                        <input type="text" value={imgLink} onChange={(e) => setImgLink(e.target.value)} name='imgLink' placeholder='Product Image Link here...' required />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="price">Product Price(in $):</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name='price' placeholder='Product price in dollars...' required />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="body">Product Description:</label>
                        <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)} name='body' placeholder='Product description here...' required />
                    </div>
                    <button type='submit' >Add</button>
                </form>
                <div className="errorMessage" style={{ color: "crimson" }} >{error}</div>
            </div>
        </section>
    )
}

export default AddProduct