import React, { useState } from 'react';

function FormDataPostExample() {
  const [formData, setFormData] = useState(new FormData());
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    formData.append(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://grolius-api.talrop.works/api/v1/users/student/login/', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setResponse(data);
      console.log(data['title'])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='text-white max-w-screen'>
      <h2>Post Form asdfsdfData Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Country:
          <input type="text" className='text-black' name="country" onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" className='text-black' name="phone" onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" className='text-black' name="password" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <div className="whitespace-normal">Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

export default FormDataPostExample;


