import React from 'react';
import './Reviews.css';
import { data, images } from '../../Constants';
import { SubHeading } from '../../components'
import {RiStarSFill} from 'react-icons/ri'


const ReviewCard = ({review: {imgUrl, name, date, title, description }}) => (
  <div className="app__reviews_review-card" style={{ display: 'flex', alignItems: 'flex-start',
  justifyContent: 'center', padding:'1rem'}}>
    <img src={imgUrl} alt="review" className="img-profile-pic" style={{width: '100px', borderRadius: '50%', border: '2px solid var(--color-golden)'}}/>
    <div className="app__reviews_review-card_content" style={{ display: 'flex', flexDirection: 'column', paddingLeft:'1rem'}}>
      <p style={{color:'var(--color-white)', fontSize: '20px'}}>{name}</p>
      <div className="app__review_review-stars" style={{ display: 'flex', alignItems: 'center'}}>
        <RiStarSFill color="#DCCA87" fontSize={22}/>
        <RiStarSFill color="#DCCA87" fontSize={22}/>
        <RiStarSFill color="#DCCA87" fontSize={22}/>
        <RiStarSFill color="#DCCA87" fontSize={22}/>
        <RiStarSFill color="#DCCA87" fontSize={22}/>
        <p style={{fontSize: '14px', marginLeft: '.5rem', color: 'var(--color-grey)', paddingTop:'.35rem'}}>{date}</p>
      </div>
      <p style={{fontWeight:'bold', fontSize: '18px', color:'var(--color-golden)', paddingTop: '5px'}}>{title}</p>
      <p style={{color: 'var(--color-white)'}}>{description}</p>
      <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'flex-end'}}>
      <button style={{padding: '.5rem', border: 'none', background:'transparent', color: 'var(--color-golden)', fontWeight: 'bold', textDecoration:'underline', 
      cursor:'pointer' }}>See More</button>
      </div>
    </div>
  </div>
)

const Reviews = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="reviews">
      <div className="app__wrapper_info">
        <SubHeading title="Reviews"/>
        <h1 className="headtext__cormorant">What People Are Saying...</h1>

        <div className="app__reviews_review">
          {data.reviews.map((review) => <ReviewCard review={review} key={review.title} />)}
        </div>
      </div>

      <div className="app__wrapper_img">
          <img src={images.reviewFood} alt="" />
      </div>
    </div>
  )
}

export default Reviews