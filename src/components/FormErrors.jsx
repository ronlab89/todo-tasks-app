const FormErrors = ({error}) => {
  return (
    <>{error && <p className='mb-3 text-danger text-start'>{error.message}</p>}</>
  )
}

export default FormErrors