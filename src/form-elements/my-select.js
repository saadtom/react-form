import { useField } from 'formik';   

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <section className='d-flex justify-content-center mt-2'>
            <div className='col-3'>
                <label htmlFor={props.id || props.name}>{label}</label>
            </div>
            <div className='col-6'>
                <select className="form-control" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        </section>
    );
};

export default MySelect;