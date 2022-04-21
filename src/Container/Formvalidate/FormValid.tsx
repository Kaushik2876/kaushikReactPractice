import Input from "Components/FormComponent/Input";
import { useFormik,  FormikProvider } from "formik";
import * as Yup from "yup";
import Layout from "Container/GlobalLayout/GlobalLayout";


const FormValid = (()=> {
  const formik = useFormik ({
    enableReinitialize:true,      
    initialValues : {
    fName: "",
    lName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    },
    validationSchema: Yup.object().shape({
      fName: Yup.string().required('First Name is a required field'),
      lName: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
      confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
      email: Yup.string().required().email(),
      mobile: Yup.string().required().max(10, "max 10"),
    }),
    onSubmit:(values,{resetForm}) =>{
      resetForm({values})
    },
  })
  const {handleSubmit,errors} =formik
  console.log(errors);
    return(
      <Layout>
      <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
      <div className="login-page">
      <div className="form">
      <Input name="fName" placeholder="First Name" />
      <Input name="lName" placeholder="last Name" />
      <Input name="username" placeholder="UserName" />
      <Input name="password" placeholder="Password" />
      <Input name="confirmPassword" placeholder="Confirm Password" />
      <Input name="email" placeholder="Email" />
      <Input name="mobile" type="number" placeholder="Mobile number" />

      <button onClick={()=>formik.handleSubmit()}>login</button>
  </div>
</div>
</form>
</FormikProvider>
</Layout>
    );
})

export default FormValid;