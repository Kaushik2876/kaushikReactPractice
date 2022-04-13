import { ErrorMessage, Field, FieldProps } from "formik"

const Input = ({ name , placeholder,type='text' }:{name:string; placeholder?:string; type?:string;})=>{
    return (
        <Field name={name}>
            {({ field }: FieldProps) => {
              return (
                <div>
                  <input {...field} name={name} placeholder={placeholder} type={type}/>
                  <ErrorMessage className="feed-back-error" name={field.name} component={'span'}/>
                </div>
              )
            }}
            </Field>
    )
}
export default Input