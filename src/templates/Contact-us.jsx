import React, { useState } from 'react';
import Footer from './Footer';
import HeaderNavBar from './Nav';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
        }
    };

    return (
        <div>
            <HeaderNavBar />
            <div className="container py-5">
            <h1 className='text-center mb-5'>Contact Us</h1>
                {submitted && <div className="alert alert-success">Message sent successfully!</div>}
                <div className="row justify-content-center">
                    
                    <div className="col-12 col-md-8">
                        <div className="card p-5">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;
