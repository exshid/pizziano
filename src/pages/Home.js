import React, { useState, useEffect } from 'react';
import DidYouKnow from '../components/DidYouKnow';
import Visit from "../components/Visit"
import Products from "../components/Products";
import Intro from "../components/Intro";
import Pizza from '../components/UI/Pizza';
const Home = () => {

    const [peopleReview, setPeopleReview] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [data, setData] = useState(null);

    async function fetchReviws() {

        const response = await fetch('https://pizza-ea68d-default-rtdb.europe-west1.firebasedatabase.app/comments.json');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        const reviewArr = []

        for (const key in responseData) {
            reviewArr.push({
                id: key,
                title: responseData[key].title,
                review: responseData[key].review,
            })
        }
        setPeopleReview(reviewArr);
        setIsLoading(false);

    };
    async function addReviewHandler(formData) {
        await fetch('https://pizza-ea68d-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setData(formData)
    }
    useEffect(() => {
        fetchReviws().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, [data]);


    if (isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (httpError) {
        return (
            <section className='error'>
                <h4 className='m-5'>{httpError}</h4>
            </section>
        );
    }


    return <div className='container-fluid'>
        <div className="row row-cols-1">
            <div className="col">
                <Pizza />
                <Products />
                <DidYouKnow reviews={[...peopleReview].reverse()} onAddReviews={addReviewHandler} />
                <Intro />
                <Visit />
            </div>
        </div>
    </div>
}

export default Home
