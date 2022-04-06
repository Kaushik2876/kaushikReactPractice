// import React from 'react';

const UserDetails = ({ name, email, id, title, onClick }: IUserInfo) => {
  return (
    <div>
      <h1>{`${title} ${name}, ${id ?? ""}, ${email}`}</h1>
      <button onClick={onClick}>Ok</button>
    </div>
  );
};

export default UserDetails;

// ------------- ${id??''}    it is conditional statement
