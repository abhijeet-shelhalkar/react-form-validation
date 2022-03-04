import { useState } from "react";

const SimpleInput = (props) => {

  const [userName, setUserName] = useState('');

  const onUserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }

  const onFormSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("user name:", userName);
  }

  return (
    <form onSubmit={onFormSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name:</label>
        <input type='text' id='name' onChange={onUserNameChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
