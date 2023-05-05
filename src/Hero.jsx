import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio harum. Velit sint obcaecati itaque, nesciunt nostrum odio, provident ullam ipsam, id vero quae! Praesentium hic sequi ad cum facere, dolorum nulla fuga ratione, voluptatibus itaque nobis eius animi consequatur id aliquid rerum consequuntur. Modi expedita voluptatum atque. Laudantium, aliquam?</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="img"/>
        </div>
      </div>
    </section>
  )
}
export default Hero