import './my-form.css';
import { Formik, Form } from 'formik';
import MyTextInput from './form-elements/my-text-input';
import MyCheckbox from './form-elements/my-checkbox';
import MySelect from './form-elements/my-select';
import * as Yup from 'yup';

const MyForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    address: '',
                    ssn: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                    salary: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    address: Yup.string().required('Required'),
                    ssn: Yup.string()
                        .min(9, 'Must be 9 digits')
                        .max(9, 'Must be 9 digits')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                    salary: Yup.number('Invalid number')
                        .required('ERROR: The number is required!')
                        .test(
                            'Is positive?',
                            'ERROR: The number must be greater than 0!',
                            (value) => value > 0
                        )
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <div className='card mt-5 d-flex flex-column p-3'>
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                        />

                        <MyTextInput
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="U.S Address"
                        />

                        <MyTextInput
                            label="SSN number"
                            name="ssn"
                            type="text"
                            placeholder="Your SSN Number"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="jane@formik.com"
                        />
                        <MyTextInput
                            label="Salary"
                            name="salary"
                            type="text"
                            placeholder="Salary per year"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="development">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </MySelect>
                        <MyCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </MyCheckbox>
                        <section className='d-flex justify-content-center'>
                            <div className='offset-4 col-6'>
                                <button type='submit' className='btn btn-primary submit-button m-3'>Submit</button>
                            </div>
                        </section>
                    </Form>
                </div>
            </Formik>
        </>
    );
};

export default MyForm;