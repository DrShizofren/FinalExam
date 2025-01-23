import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./addpage.css"
const URL = "http://localhost:3030/"

const AddPage = () => {
  return (
    <Formik
      initialValues={{ name: '', price: '', img: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        price: Yup.string()
          .required('Required'),
        img: Yup.string()
      })}
      onSubmit={(values) => {
        axios.post(URL,values).then(res => console.log(res))
        console.log(values);
      }}
    >
      <Form className='form'>
        <label htmlFor="name">Flower Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="price">Price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />

        <label htmlFor="img">Image</label>
        <Field name="img" type="text" />
        <ErrorMessage name="img" />

        <button type="submit" className='submit'>Add</button>
      </Form>
    </Formik>
  );
};
export default AddPage