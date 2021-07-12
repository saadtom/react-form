import './my-form.css';
import { useState } from 'react';
import FormElement from './form-element';

const MyForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, seLasttName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');
    const formInfo = [
        { label: 'First Name', name: 'firstName' },
        { label: 'Last Name', name: 'lastName' },
        { label: 'Address', name: 'address' },
        { label: 'Email', name: 'email' },
        { label: 'Job Title', name: 'jobTitle' },
        { label: 'Salary', name: 'salary' },
    ];
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    }
   
    return (
        <div className='card mt-5 d-flex flex-column p-3'>
            <form onSubmit={handleSubmit}>
                {formInfo.map((element, index) => {
                    return <FormElement key={index} formElementInfo={element} />
                })}
                <section className='d-flex justify-content-center'>
                    <div className='offset-4 col-6'>
                        <button type='submit' className='btn btn-primary submit-button m-3'>Submit</button>
                    </div>
                </section>
                <div className='col-12 text-center'>
                    {submitting && <div className='submitting'>Submitting Form ...</div>}
                </div>
            </form>
        </div>
    )
}

export default MyForm;