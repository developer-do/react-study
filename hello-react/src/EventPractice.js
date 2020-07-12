import React, { Component } from 'react'

class EventPractice extends Component {
    state = {
        message: '',
        username: '',
        age: ''
    }

    handleChange = (e) => {
        console.log([e.target.name]);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + '은 ' + this.state.age + ' : ' +this.state.message);
        this.setState({
            username: '',
            message: '',
            age: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="나이를 입력하세요."
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요."
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default EventPractice;