import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import {
  user_login_Failed,
  user_login_request,
  user_login_Success,
} from '../Redux/UserSlicer'

const SignupSchema = Yup.object().shape({
  email: Yup.string().trim().email('Invalid email').required('Required!'),
  Password: Yup.string().trim().required('Required!'),
})

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { current_user, error } = useSelector((state) => state.user)

  //   if (error) {
  //     alert('check your email and password')
  //   }

  const handleSubmit = async (Password, email) => {
    try {
      dispatch(user_login_request())
      await axios.post('auth/login', { Password, email }).then((result) => {
        dispatch(user_login_Success(result.data))
        navigate('/')
      })
    } catch (error) {
      dispatch(user_login_Failed())
      alert(error.response.data.message)
    }
  }

  return (
    <MainContainer>
      <Container>
        <h3>Sign-In</h3>
        <Formik
          initialValues={{
            Password: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            handleSubmit(values.Password, values.email)
          }}
        >
          {({ errors, touched, validateOnChange, values, validateOnBlur }) => (
            <Form>
              <FormContainer>
                <FormGroup>
                  <label className="Label" htmlFor="email">
                    Email
                  </label>
                  <Field
                    className={`Field ${
                      errors.email && touched.email
                        ? 'FieldError'
                        : touched.email
                        ? 'FieldSuccess'
                        : null
                    }`}
                    name="email"
                    type="email"
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <label className="Label" htmlFor="Your_Name">
                    Password
                  </label>
                  <Field
                    className={`Field ${
                      errors.Password && touched.Password
                        ? 'FieldError'
                        : touched.Password
                        ? 'FieldSuccess'
                        : null
                    }`}
                    name="Password"
                    type="password"
                  />
                  {errors.Password && touched.Password ? (
                    <Error>{errors.Password}</Error>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <button className="button" type="submit">
                    Submit
                  </button>
                </FormGroup>

                <FormGroup>
                  <p>
                    Create an account?{' '}
                    <Link
                      to={'/signup'}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <span>Sign-Up</span>
                    </Link>
                  </p>
                </FormGroup>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </Container>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 50px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    margin-top: 50px;
  }
`
const ImageContainer = styled.div`
  height: 80px;
  margin: auto;
  width: 50%;
  object-fit: contain;
  img {
    height: 100%;
    width: 100%;
  }
`

const Container = styled.div`
  margin-top: 20px;
  border: 1px solid gray;
  h3 {
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    border: none;
    border-top: 1px solid gray;
  }
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  .Label {
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .Field {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;
  }
  .FieldError {
    border: 1px solid red;
  }
  .FieldSuccess {
    border: 1px solid green;
  }
  .button {
    margin-top: 20px;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: large;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-weight: 500;
    span {
      font-weight: 800;
    }
  }
`
const Error = styled.div`
  color: red;
`

export default SignIn
