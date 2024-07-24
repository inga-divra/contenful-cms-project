import heroImg from './assets/hero.svg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        This project aims to provide a comprehensive understanding of working with a headless CMS,
                        including setting up a Contentful account and utilizing it to store,
                        fetch, and display data in a React app. Additionally, the project ensures
                        that any changes made to the cloud-stored data via the graphical
                        interface are automatically rebuilt by Netlify.
                    </p>
                </div>
                <div className="img-container">
                    <img
                        className="img"
                        src={heroImg}
                        alt="woman and the browser" />
                </div>
            </div>
        </section>
    )
}

export default Hero