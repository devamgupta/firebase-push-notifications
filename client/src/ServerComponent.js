import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_GET_END_POINT = 'http://localhost:4000/api';
const SERVER_POST_END_POINT = 'http://localhost:4000/post';

const style = {
    border: '1px solid red',
    backgroundColor: 'yellow',
}

function ServerComponent() {
    const [serverData, setServerData] = useState(null);
    const [input, setInput] = useState({a: '', b: ''});
    const [result, setResult] = useState('');
    useEffect(() => {
        axios.get(SERVER_GET_END_POINT)
        .then(response => {
            setServerData(response.data);
        })
        .catch(error => console.log(error))

    }, []);
    

    const handleChange = (e) => {
        setInput(prevInput => ({
            ...prevInput,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(SERVER_POST_END_POINT, input)
        .then(response => {
            setResult(response.data.result)
        })
        .catch(error => console.log(error))
    }
    return <div style={style}>
        {
            serverData ?
            <p>{serverData.message}</p> :
            <p>No server data</p>
        }

        <form  onSubmit={handleSubmit}>
            <input value={input.a} name='a' onChange={handleChange} placeholder='First Number' />
            <input value={input.b} name='b' onChange={handleChange} placeholder='Second Number' />
            <button type="submit">Add</button>
            <p>Sum = {result || ''}</p>
        </form>
    </div>;
}

export default ServerComponent;
