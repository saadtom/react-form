const FormElement = (props) => {
    const handleChange = event => {
        console.log(event.target.value);
    }

    return (
        <section className='d-flex justify-content-center mt-2'>
            <div className='col-3'>
                <span className='text-right form-label'>{props.formElementInfo.label}</span>
            </div>
            <div className='col-6'>
                <input name={props.formElementInfo.label} type="text" className="form-control" onChange={handleChange} />
            </div>
        </section>
    );
}

export default FormElement;