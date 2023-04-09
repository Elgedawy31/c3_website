import React from 'react';
import "./chooseus.scss";
import Responsive from '../../icons/Responsive.svg';
import Programmer from '../../icons/Programmer.svg';
import Ecommerce from '../../icons/Ecommerce.svg';
import Protection from '../../icons/Protection.svg';
const ChooseUs = () => {
    return (
        <div className='chooseus'>
            <div className="container">
                <h3 className='mb-5'>Why Working With us</h3>
                <div className="features">
                    <div className="feature">
                        <div>
                            <img src={Responsive} alt="Responsive" />
                        </div>
                        <p>
                            Bug free code
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Responsive} alt="Responsive" />
                        </div>
                        <p>
                            Bug free code
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Responsive} alt="Responsive" />
                        </div>
                        <p>
                            Bug free code
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Programmer} alt="Programmer" />
                        </div>
                        <p>
                            On-time Delivery
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Ecommerce} alt="Ecommerce" />
                        </div>
                        <p>
                            After Sale Service
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Protection} alt="Protection" />
                        </div>
                        <p>
                            Affordable Costs
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Protection} alt="Protection" />
                        </div>
                        <p>
                            Cutting Edge Technology
                        </p>
                    </div>
                    <div className="feature">
                        <div>
                            <img src={Protection} alt="Protection" />
                        </div>
                        <p>
                            Responsive Design
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;