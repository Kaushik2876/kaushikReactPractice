// import React ,{useState} from "react";       //option 1
import UserDetails from "Components/userDetails";
import { studentdata } from "Container/Home";
import { Fragment } from "react";
import { useState } from "react"; //option 2





const User = (props: any) => {
  const [data, setData] = useState<IUserInfo[]>(studentdata);
  const singleStudent = studentdata.find((i) => i.id === 5);
  console.log(data, "data");
//   console.log(setData);
  console.log(props);


  return (
    <Fragment>            
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
    </Fragment>
  );
};

export default User;
