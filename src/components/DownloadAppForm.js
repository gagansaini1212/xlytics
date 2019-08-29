import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import swal from 'sweetalert';

import apolloClient from '../utils/apolloClient';

const Container = styled.form``;

const sendAppLinkMutation = gql`
  mutation sendAppLink($input: SendAppLinkInput!) {
    sendAppLink(input: $input) {
      success
    }
  }
`;

const DownloadAppForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <Container onSubmit={handleSubmit}>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            type="number"
            name="telephone"
            className="input is-medium"
            value={values.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your mobile number"
          />
        </p>
        <p className="control">
          <button
            type="submit"
            className={`button is-primary is-medium ${
              isSubmitting ? 'is-loading' : ''
            }`}
          >
            Text me a link
          </button>
        </p>
      </div>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    telephone: '',
  }),

  validationSchema: Yup.object().shape({
    telephone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .test(
        'len',
        'Must be exactly 10 characters',
        val => val.toString().length === 10,
      )
      .required('A phone number is required'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    const { telephone } = values;
    const newTelephone = telephone.toString();

    apolloClient
      .mutate({
        mutation: sendAppLinkMutation,
        variables: {
          input: {
            telephone: `+91${newTelephone}`,
          },
        },
      })
      .then(() => {
        setSubmitting(false);
        swal({
          text: 'Thank you, we have sent app download link via SMS',
        });
      })
      .catch(() => {
        setSubmitting(false);
        swal('Oops', 'Something went wrong!', 'error');
      });
    resetForm();
  },
  displayName: 'DownloadAppForm', // helps with React DevTools
})(DownloadAppForm);
