import React from 'react';
//import ButtonElem from '../../Elements/ButtonElem'
import { Link } from 'react-router-dom';


const PageBook =(props) => {
    const {
        title,
        authors,
        pageCount,
        imageLinks,
        } = props.currentBook;

    const imgArr =[]
    const imgs = () => {
        for (let keys in imageLinks) {
            imgArr.push(imageLinks[keys])
        }
    }
    imgs()

    return (
        <div className="book">
                <h1> Book: {title} </h1>
                {imageLinks &&  
                <Link>
                    {imgArr.map((img, index) => <div key={index}>
                        <img src={img} alt="book"/>
                    </div>)}
                </Link>
                }
                {authors &&        <p> Author: {authors.join(', ')} </p>}
                {pageCount &&      <p> Pages: {pageCount} pages </p>}
                              
        </div>
    )
}
export default PageBook
