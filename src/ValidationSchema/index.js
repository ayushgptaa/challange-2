import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  emailId: Yup.string().email('Email is invalid').required('Email is required'),
  aadharNumber: Yup.number()
    .test('len', 'Aadhar number should be 10 digits', (val) => {
      if (val) return val.toString().length === 10
    })
    .required('Aadhar number is required'),
  panNumber: Yup.string()
    .test('len', 'Pan number should be 10 digits', (val) => {
      if (val) return val.length === 10
    })
    .required('Pan number is required'),
  employeeType: Yup.string().required('Employee type is required'),
  joiningDate: Yup.date().required('Joining date is required'),
})

export default validationSchema
