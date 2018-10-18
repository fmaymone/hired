import React, { Component } from 'react';
import { Test } from '../components/Test'

class Home extends Component {

    state = {
        response: ''
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
            <div>
                {Object.keys(this.state.response).map(key => (
                    <Test name={key} />
                ))}
                <h1>{this.state.response.title}</h1>
            </div>
        );
    }
}

export default Home;