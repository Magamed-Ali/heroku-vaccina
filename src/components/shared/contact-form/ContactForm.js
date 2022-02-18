import React from 'react';

function ContactForm(props) {
    return (
        <div className="feedback">
            <div className="container">
                <div className="title-wrapper title-form">
                    <p className="subtitle">Call To Action</p>
                    <h1>Make a Request</h1>
                </div>
                <div className="form">
                    <form action="#">
                        <div className="content">
                            <div className="row contact-form">
                                <div className="col-12 col-md-6 form-wr">
                                    <div className="wrapper-input">
                                        <input type="text" placeholder="Email Address"/></div></div>
                                <div className="col-12 col-md-6 form-wr">
                                    <div className="wrapper-input">
                                        <input type="text" placeholder="Enter Full Name"/></div></div>
                                <div className="col-12 col-md-6 form-wr">
                                    <div className="wrapper-input">
                                        <input type="text" placeholder="Phone Number"/></div></div>
                                <div className="col-12 col-md-6 form-wr">
                                    <div className="wrapper-input">
                                        <input type="text" placeholder="Select Option"/></div></div>
                                <div className="col-12 form-wr-12">
                                    <div className="wrapper-input">
                                        <textarea type="text" placeholder="Enter Message"/></div></div>
                            </div>
                        </div>
                        <div className="navigation">
                            <button className="btn btn-primary" type="submit">
                                submit request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;