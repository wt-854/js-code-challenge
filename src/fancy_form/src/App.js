import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { Header } from './components/Header';
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  btcAddress: yup.string().required('Bitcoin Address is a required field'),
  amount: yup
    .string()
    .matches(
      /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
      'Amount to Send should be a positive float'
    )
    .required('Amount to Send is a required field'),
  otp: yup
    .string()
    .matches(/^[0-9]{6}$/, 'OTP should be 6 digits')
    .required('OTP Authentication is a required field'),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const swalWarningButtons = Swal.mixin({
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#dc3545',
    buttonsStyling: true,
  });

  const onSubmit = (data) => {
    swalWarningButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        cancelButtonText: 'No, cancel!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWarningButtons.fire('Sent!', 'BTC has been sent.', 'success');
          console.log(data);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWarningButtons.fire(
            'Cancelled',
            'Transaction has been cancelled',
            'error'
          );
        }
      });
  };

  return (
    <>
      <MainContainer>
        <Header />
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <Input
            ref={register}
            id='btcAddress'
            name='btcAddress'
            label='Bitcoin Address'
            type='text'
            placeholder='16q4PinynazaMYfv24juNLkbjkDQxJo2dc'
            error={!!errors.btcAddress}
            helperText={errors?.btcAddress?.message}
          />

          <Input
            ref={register}
            id='amount'
            name='amount'
            label='Amount to Send'
            type='text'
            placeholder='0.0000'
            error={!!errors.amount}
            helperText={errors?.amount?.message}
          />

          <Input
            ref={register}
            id='otp'
            name='otp'
            label='OTP Authentication'
            type='text'
            placeholder='SMS OTP'
            error={!!errors.otp}
            helperText={errors?.otp?.message}
          />

          <PrimaryButton type='submit'>
            <strong>SEND BTC</strong>
          </PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
}
