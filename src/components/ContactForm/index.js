import React from "react";

function ContactForm() {

    return (

        <div id="contactBoxStyle" className="container mx-auto my-5 p-3 rounded bg-secondary text-white border border-light">
            <form id="contactForm">
                <div className="page-header">
                    <h2>Contact Me</h2>
                    <hr></hr>
                </div>
                <div className="form-row">
                    <div className="col-12">
                        <input type="text" id="name" name="name" className="form-control my-2 " placeholder="Name"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12">
                        <input type="text" id="email" name="email" className="form-control my-2 " placeholder="Email"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12">
                        <textarea className="form-control my-2 mb-3" id="message" name="message" rows="3">Message</textarea>
                    </div>
                </div>
                <button id="submitBtn" type="submit" className="btn btn-dark mb-2 text-white border border-light">Submit</button>
            </form>
            <p id="confirmMsg"></p>
        </div>

    );
}

export default ContactForm;