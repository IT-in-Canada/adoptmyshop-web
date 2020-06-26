import React, {Fragment} from 'react';
import Header from '../Header';
import Title from '../Title';
import Footer from '../Footer'
import './SingleBusiness.scss';

export default function SingleBusiness(){
    return(
        <Fragment>
            <Header renderStyle="slim" />
            <section className="single-business">
                <div className="container">
                    <div className="col">
                    <Title title="Name of the Business" />
                        <div className="row">
                        

                        </div>
                    </div>
                </div>

            </section>
            <Footer/>
        </Fragment>

    )
}