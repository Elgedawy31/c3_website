import React from 'react';
import './about.scss';
import aboutus from '../../images/aboutus.jpg';
const About = () => {
    return (
        <section className="aboutus" >
            <div className='container'>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className='aboutus-background' data-aos='fade-up-right'>
                            <img src={aboutus} alt="team work" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos='fade-up-left'>
                        <h3>About us</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit Nemo in voluptatibus inventore veniam dolorum sit! Consequatur nisi libero asperiores soluta labore vel debitis quod explicabo doloribus? Deleniti nisi fugiat sint officia expedita dolore animi, laborum labore in nulla iure, similique amet quas itaque, modi ratione. Aliquam repellendus labore veritatis dolor?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;