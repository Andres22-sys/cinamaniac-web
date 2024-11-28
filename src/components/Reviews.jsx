import './Reviews.css';
import gofgMovie from '/src/assets/movies/GOTG.png';
import marioMovie from '/src/assets/movies/super-mario.png';
import princessMovie from '/src/assets/movies/princess-mnk.png';

function Reviews() {
    const reviewsData = [
        {
            title: "Guardians of the Galaxy 3",
            imgSrc: gofgMovie,
            description:
                "Guardians of the Galaxy Vol. 3 is an amazing addition to the franchise. It's a rollercoaster ride of emotions with hilarious moments...",
            link: "#read-more",
        },
        {
            title: "Super Mario Bros",
            imgSrc: marioMovie,
            description:
                "Super Mario Bros is a fun, lighthearted movie that brings the classic video game characters to life in a unique way...",
            link: "#read-more",
        },
        {
            title: "Princess Mononoke",
            imgSrc: princessMovie,
            description:
                "Princess Mononoke is a masterpiece of animation and storytelling, with stunning visuals and a complex exploration of humanity's relationship with nature...",
            link: "#read-more",
        },
    ];

    return (
        <section id="reviews" className="review-section">
            <h2>Latest Reviews</h2>
            <div className="review-grid">
                {reviewsData.map((review, index) => (
                    <article className="movie-review" key={index}>
                        <h3>{review.title}</h3>
                        <img src={review.imgSrc} alt={`${review.title} poster`} />
                        <p>{review.description}</p>
                        <a href={review.link}>Read more</a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
