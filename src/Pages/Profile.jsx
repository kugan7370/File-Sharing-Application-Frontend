import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import FormData from 'form-data'

const SignupSchema = Yup.object().shape({
  YourName: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  email: Yup.string().trim().email('Invalid email').required('Required!'),
})

function Profile() {
  const { current_user, error } = useSelector((state) => state.user)
  const [profile_Image, setprofile_Image] = useState()

  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    const { YourName, email } = values

    const form = new FormData()
    form.append('username', YourName)
    form.append('email', email)
    form.append('profile_image', profile_Image)

    try {
      await axios.put('auth/updateProfile', form).then((res) => alert(res.data))
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <MainContainer>
      <Container>
        <h3>Update Profile</h3>
        <ProfileLabel>
          <ProfileImageContainer>
            <ProfileImage src={current_user.user.profile_image} />
            <ProfileInput
              type="file"
              name="url"
              onChange={(e) => setprofile_Image(e.target.files[0])}
            />
          </ProfileImageContainer>
        </ProfileLabel>

        {current_user && (
          <Formik
            initialValues={{
              YourName: `${current_user.user.username}`,
              email: `${current_user.user.email}`,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              errors,
              touched,
              validateOnChange,
              values,
              validateOnBlur,
            }) => (
              <Form>
                <FormContainer>
                  <FormGroup>
                    <label className="Label" htmlFor="YourName">
                      User Name
                    </label>
                    <Field
                      className={`Field ${
                        errors.YourName && touched.YourName
                          ? 'FieldError'
                          : touched.YourName
                          ? 'FieldSuccess'
                          : null
                      }`}
                      name="YourName"
                    />
                    {errors.YourName && touched.YourName ? (
                      <Error>{errors.YourName}</Error>
                    ) : null}
                  </FormGroup>

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
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </FormGroup>
                </FormContainer>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 20px;
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
  margin-top: 10px;
  padding-bottom: 20px;
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

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ProfileImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: contain;
`
const ProfileLabel = styled.label``
const ProfileInput = styled.input`
  width: 0;
  height: 0;
`

export default Profile
