import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    swimming: false,
    reading: false,
    
  });

  const handleCheckboxChange = (event) => {
    setInterests({
      ...interests,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nInterests: ${Object.keys(interests).filter(interest => interests[interest]).join(', ')}`);
  };

  return (
    <main>
      <h1>Hi, I'm Elsie Wangui</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          </div>
        
        <div>
          <label>
            <input 
              type="checkbox" 
              name="swimming" 
              checked={interests.swimming} 
              onChange={handleCheckboxChange} 
            />
            Swimming
          </label>
          <label>
            <input 
              type="checkbox" 
              name="reading" 
              checked={interests.reading} 
              onChange={handleCheckboxChange} 
            />
            Reading
          </label>
          
        </div>
        <button type="submit">Submit</button>
      </form>
      { <p>Thank you for subscribing!</p>}
    </main>
  );
}

export default App;
