import { ArrowRight, Star } from 'lucide-react';
import './Reviews.css';
import gofgMovie from '/src/assets/movies/GOTG.png';
import marioMovie from '/src/assets/movies/super-mario.png';
import princessMovie from '/src/assets/movies/princess-mnk.png';

function StarRating({ rating }) {
    return (
        <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    size={14}
                    strokeWidth={1.5}
                    className={i < rating ? 'star filled' : 'star'}
                />
            ))}
        </div>
    );
}

function Reviews() {
    const reviewsData = [
        {
            title: "Guardians of the Galaxy Vol. 3",
            genre: "Sci-Fi · Action",
            rating: 5,
            imgSrc: gofgMovie,
            description:
                "A rollercoaster of emotions that sticks the landing. James Gunn's farewell to these characters is hilarious, heartfelt, and surprisingly moving — the best entry in the trilogy.",
            link: "#read-more",
        },
        {
            title: "The Super Mario Bros. Movie",
            genre: "Animation · Adventure",
            rating: 4,
            imgSrc: marioMovie,
            description:
                "A love letter to Nintendo fans that brings the Mushroom Kingdom to dazzling life. Fun, fast, and packed with fan-service — a crowd-pleaser through and through.",
            link: "#read-more",
        },
        {
            title: "Princess Mononoke",
            genre: "Animation · Fantasy",
            rating: 5,
            imgSrc: princessMovie,
            description:
                "Miyazaki's magnum opus. A stunning exploration of humanity's conflict with nature told through breathtaking visuals, complex characters, and moral ambiguity that never preaches.",
            link: "#read-more",
        },
    ];

    return (
        <section id="reviews" className="review-section">
            <div className="review-header">
                <p className="section-eyebrow">What We've Watched</p>
                <h2>Latest Reviews</h2>
            </div>
            <div className="review-grid">
                {reviewsData.map((review, index) => (
                    <article className="movie-review" key={index}>
                        <div className="review-img-wrap">
                            <img src={review.imgSrc} alt={`${review.title} poster`} />
                            <div className="review-img-overlay">
                                <a href={review.link} className="overlay-link">Read Review</a>
                            </div>
                        </div>
                        <div className="review-body">
                            <span className="review-genre">{review.genre}</span>
                            <h3>{review.title}</h3>
                            <StarRating rating={review.rating} />
                            <p>{review.description}</p>
                            <a href={review.link} className="review-link">
                                Read full review
                                <ArrowRight size={14} strokeWidth={2} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
