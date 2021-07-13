import {useField } from 'formik';  

const MyCheckbox = ({ children, ...props }) => {
    
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <section className='d-flex flex-column justify-content-center mt-2'>
            <label className="text-center checkbox-input">
                <input type="checkbox" {...field} {...props} />
                <span className='checkbox-description'>{children}</span>
            </label>
            <div className='text-center'>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            </div>
        </section>
    );
};

export default MyCheckbox;