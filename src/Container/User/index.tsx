// import React ,{useState} from "react";       //option 1
import UserDetails from "Components/userDetails";
import Layout from "Container/GlobalLayout/GlobalLayout";
import { studentdata } from "Container/Home";
import { useState } from "react"; //option 2
import { useSelector} from 'react-redux';



const User = (props: any) => {
  const [data, setData] = useState<IUserInfo[]>(studentdata);
  const singleStudent = studentdata.find((i) => i.id === 5);
  console.log(data, "data");
//   console.log(setData);
  console.log(props);
  const {counter} = useSelector((state:{counter:any}) => state?.counter);


  return (
    <Layout> 
      <h1>User:{counter}</h1>
      <h2>------------------</h2>
      {singleStudent && <UserDetails {...singleStudent} />}           
      {data.map((student) => (
        <UserDetails
        key={student.id}
          onClick={() => {
            // const xyz = data.filter((i) => i.id !== student.id);
          // @ts-ignore
            setData([{id:null,
                name:'kas',
                email:'kd@'
            }]);
          }}
          name={student.name}
          id={student.id}
          email={student.email}
          title="xyz"
        />
      ))}
    </Layout>
  );
};

export default User;
