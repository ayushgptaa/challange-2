import {
  Input,
  FormControl,
  Stack,
  Select,
  Center,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik'

import validationSchema from '../../ValidationSchema'
import FormErrorMessage from '../FormErrormessage'

const EditForm = ({ isOpen, indData, closeHandler, setData, data }) => {
  const toast = useToast()

  const upDateHandler = (values) => {
    const updatedData = data.map((singleData) => {
      if (singleData.id === indData.id) {
        return { ...singleData, ...values }
      } else {
        return singleData
      }
    })
    setData(updatedData)
    toast({
      title: 'Details Saved.',
      description: 'We have updated the details for you.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    closeHandler()
  }

  const { values, touched, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: indData.name || '',
      emailId: indData.emailId || '',
      aadharNumber: indData.aadharNumber || '',
      panNumber: indData.panNumber || '',
      employeeType: indData.employeeType || '',
      joiningDate: indData.joiningDate || '',
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
  })

  return (
    isOpen && (
      <FormControl className="custom-form">
        <Stack spacing={4}>
          <Input
            variant="filled"
            type="text"
            placeholder="Enter your email"
            size="md"
            value={`Employee id : ${indData.id}`}
            disabled
          />

          <Input
            variant="filled"
            type="text"
            placeholder="Enter your name"
            name="name"
            size="md"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.name && errors.name}
          />
          {touched.name && errors.name && (
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          )}

          <Input
            variant="filled"
            type="email"
            placeholder="Enter your email"
            name="emailId"
            size="md"
            value={values.emailId}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.emailId && errors.emailId}
          />
          {touched.emailId && errors.emailId && (
            <FormErrorMessage>{errors.emailId}</FormErrorMessage>
          )}

          <Input
            variant="filled"
            type="number"
            placeholder="Enter your Aadhar Number"
            name="aadharNumber"
            size="md"
            value={values.aadharNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={errors.aadharNumber && touched.aadharNumber}
          />
          {errors.aadharNumber && touched.aadharNumber && (
            <FormErrorMessage>{errors.aadharNumber}</FormErrorMessage>
          )}

          <Input
            variant="filled"
            type="text"
            placeholder="Enter your Pan Number"
            name="panNumber"
            size="md"
            value={values.panNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={errors.panNumber && touched.panNumber}
          />
          {errors.panNumber && touched.panNumber && (
            <FormErrorMessage>{errors.panNumber}</FormErrorMessage>
          )}

          <Select
            placeholder="Select employee type"
            variant="filled"
            name="employeeType"
            value={values.employeeType}
            onBlur={handleBlur}
            onChange={handleChange}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </Select>

          <Input
            variant="filled"
            type="date"
            placeholder="Select joining date"
            name="joiningDate"
            size="md"
            value={values.joiningDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>

        <Center mt={2}>
          <Button
            m={2}
            size="md"
            bg="#C8FACD"
            onClick={() => {
              upDateHandler(values)
            }}>
            Save
          </Button>

          <Button m={2} size="md" onClick={closeHandler}>
            Cancel
          </Button>
        </Center>
      </FormControl>
    )
  )
}

export default EditForm
