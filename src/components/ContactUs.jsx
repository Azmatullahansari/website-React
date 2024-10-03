import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      dob: '',
      bio: '',
      profileImage: null,
      bannerImage: null
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      address: Yup.string().required('Required'),
      dob: Yup.date().required('Required'),
      bio: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            id="dob"
            type="date"
            name="dob"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          {formik.errors.dob ? <div className="error">{formik.errors.dob}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            onChange={formik.handleChange}
            value={formik.values.bio}
          ></textarea>
          {formik.errors.bio ? <div className="error">{formik.errors.bio}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            id="profileImage"
            type="file"
            name="profileImage"
            onChange={(event) => formik.setFieldValue('profileImage', event.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bannerImage">Banner Image:</label>
          <input
            id="bannerImage"
            type="file"
            name="bannerImage"
            onChange={(event) => formik.setFieldValue('bannerImage', event.target.files[0])}
          />
        </div>

        <button type="submit" disabled={!formik.isValid}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
