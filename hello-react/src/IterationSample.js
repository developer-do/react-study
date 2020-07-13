import React, { Component } from 'react'

class IterationSample extends Component {

    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: '',
    };

    handleRemove = (index) => {
        // 편의상 name의 레퍼런스를 미리 만듭니다.
        const { names } = this.state;

        /* 
            배열을 자르는 내장 함수 slice와
            전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을
            배열에 넣어줍니다.
        */

        this.setState({
            names: [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
            ]
        })
    }

    handleRemove2 = (index) => {
        // 편의상 name의 레퍼런스를 미리 만듭니다.
        const { names } = this.state;
        this.setState({
            // filter로 index번째를 제외한 원소만 있는 새 배열 생성
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        // var numbers = [1, 2, 3, 4, 5];
        // var processed = numbers.map(function (num) {
        //     return num * num;
        // });

        // console.log(processed);

        // const numbers = [1, 2, 3, 4, 5];
        // const processed = numbers.map(num => num * num);

        // console.log(processed);


        

        // const names = ['눈사람', '얼음', '눈', '바람'];
        // const nameList = names.map(
        //     (name, index) => (<li key={index}>{name}</li>)
        // );

        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove2(index)}>
                    {name}
                </li>
            )
        );

        return (
            <ul>
                {nameList}
            </ul>
        );
    }
}

export default IterationSample;