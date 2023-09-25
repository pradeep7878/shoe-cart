import React from 'react';
import '../css/Card.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

const Card = (props) => {
    return (
        <div>
            {/* <div className="card-container">
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>
            <div className="card">
                <img src={require('../images/1.jpg')} alt='shoe-img' />
                <p className="card-title">Shoe</p>
                <div className='ratings'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <span>4</span>
                </div>
                <div className="add-to-cart">
                   <p className="price"><del>699</del>&nbsp;&nbsp;₹499</p>
                   <p><BsFillBagHeartFill /></p>
                </div>
            </div>

        </div> */}

    
                <div className="card">
                    <img src={props.product.img} alt='shoe-img' />
                    <p className="card-title">{props.product.title}</p>
                    <div className='ratings'>
                        <AiFillStar />  
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <span className='review'>{props.product.reviews}</span>
                    </div>
                    <div className="add-to-cart">
                        <p className="price"><del>{props.product.prevPrice}</del>&nbsp;&nbsp;{props.product.newPrice}</p>
                        <p><BsFillBagHeartFill /></p>
                    </div>
                </div>
            </div>

    )
}

export default Card;
