import React from 'react';

const UserAccount = () => {
  const handleOnClick = () => {
    // Add your onClick logic here
    alert('You clicked on the User Account.');
  };

  return (
    <div onClick={handleOnClick}>
      <h2>User Account</h2>
      {/* Add user account related content */}
    </div>
  );
}

export default UserAccount;
