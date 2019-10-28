import React, { useState, useEffect, useReducer } from 'react';
import '../../App';
import TextCard from '../TextCard';
import SelectCard from '../SelectCard';
import CheckCard from '../CheckCard';
import RadioCard from '../RadioCard';

const initialState = length => {
    return {
        answers: new Array(length),
        totalCount: 0,
    };
}


const questionReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            const { index, value } = action.payload
            state.answers[index] = value;
            return {...state};
        default: throw new Error();
        case 'SOME':
            let { answers, totalCount } = {...state};
            answers = answers.filter((e) => typeof e === "number");
            if (answers.length) {
                totalCount = answers.reduce((a, b) => a + b);
                    return {...state, totalCount};
            }

            //const some = filter(a, b) => { a + b }

            //some = totalCount;
            return { ...state, totalCount };

    }
}

const QuestionsContainer = ({ data }) => {

    const [answersModel, dispatchAnswersModel] = useReducer(questionReducer,
        initialState(data.length)
    );

    // useEffect(() => {

    //     dispatchAnswersModel({
    //         type: 'SOME',
    //     })
        
    // }, [answersModel.totalCount])

    useEffect(() => {
        console.log(answersModel)
    },  [answersModel])

    //   const SomePoint = ({answersModel}) => {
    const SomePoint = ([answersModel]) => {
        var arr = answersModel;
        function arraySum(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                if (Object.prototype.toString.call(arr[i]) === '[object Number]') {
                    sum += arr[i];
                }
            }
            return sum;
        }
        console.log(arraySum(arr));
    }

    //
    // function arraySum(arr) {
    //     return arr
    //     .toString().split(’,’)
    //     .map(el => parseFloat(el))
    //     .filter(el => !Number.isNaN(el))
    //     .reduce((acc, cur) => acc + cur);
    //     }
    //  

    const setAnswer = (index) => {
        return (value) => {
            dispatchAnswersModel({
                type: 'UPDATE',
                payload: {
                    index,
                    value,
                }
            })
            dispatchAnswersModel({
                type: 'SOME',
            })
        }
    }

    return (
        <div className="container col-lg-6">
            <h1>Test questions</h1>
            <div className="row">
                {data.map((item, index) => {
                    switch (item.type) {
                        case "TEXT":
                            return <TextCard
                                // key={Math.random(new Date().getSeconds())}
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />

                        case "CHECKBOX":
                            return <CheckCard
                                // key={Math.random(new Date().getSeconds())} 
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />
                        case "RADIO":
                            return <RadioCard
                                // key={Math.random(new Date().getSeconds())} 
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />
                        case "SELECT":
                            return <SelectCard
                                // key={Math.random(new Date().getSeconds())} 
                                data={item}
                                numberOfQuestion={index}
                                setAnswer={setAnswer(index)} />
                        default: return null;
                    }
                })
                }
            </div>
        </div>
    );

}

export default QuestionsContainer;