import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="username" value={value} onChange={onChange} onSubmit={onSubmit}/>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
