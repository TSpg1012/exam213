import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  type: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  discount: Yup.number().required('Required'),
  review: Yup.number().required('Required'),
  image: Yup.string().required('Required'),
});

function Add() {
  return (
    <div>
      Add Product:
      <Formik
       initialValues={{
         name:"",
         image:"",
         type:"",
         discount:0,
         review:0,
         price:0,
       }}
       validationSchema={validationSchema}
       onSubmit={values => {
         axios.post("http://localhost:4000/" , values)
        // console.log(values)
       }}
       
     >
       {({ errors, touched }) => (
         <Form style={{display:"flex" , flexDirection:"column"}}>
           <Field style={{width:"fit-content"}} name="name" placeholder="name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field style={{width:"fit-content"}} name="image" placeholder="image"/>
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <Field style={{width:"fit-content"}} name="type" placeholder="type"/>
           {errors.type && touched.type ? (
             <div>{errors.type}</div>
           ) : null}
           <Field style={{width:"fit-content"}} name="price" placeholder="price"/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <Field style={{width:"fit-content"}} name="discount" placeholder="discount"/>
           {errors.discount && touched.discount ? (
             <div>{errors.discount}</div>
           ) : null}
           <Field style={{width:"fit-content"}} name="review" placeholder="review"/>
           {errors.review && touched.review ? (
             <div>{errors.review}</div>
           ) : null}
           <button type="submit" style={{color:"black"}}>Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Add