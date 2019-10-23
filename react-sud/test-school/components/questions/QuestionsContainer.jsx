import React, { useState, useEffect } from 'react';
import '../../App';
import TextCard from '../TextCard';
import SelectCard from '../SelectCard';
import CheckCard from '../CheckCard';
import RadioCard from '../RadioCard';

const QuestionsContainer = ({data}) => {

    const [answersModel, setAnswersModel] = useState(
        new Array(data.length)
    );

    useEffect(() => {
        console.log(answersModel)

        }, [answersModel])

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
        return (pointerCount) => {
            const indexOfElement = index;
            let arr = [...answersModel];
            arr[indexOfElement] = pointerCount;
            setAnswersModel(arr);
          }
        }

    return (
        <div className="container col-lg-6">
            <h1>Test questions</h1>
            <div className="row">
            {data.map((item, index) => {
            switch (item.type){
                case "TEXT":
                    return <TextCard 
                    // key={Math.random(new Date().getSeconds())}
                    data={item} 
                    numberOfQuestion={index} />
                    
                case "CHECKBOX": 
                    return <CheckCard
                    // key={Math.random(new Date().getSeconds())} 
                    data={item} 
                    numberOfQuestion={index}
                    setAnswer={setAnswer(index)}/>
                case "RADIO": 
                    return <RadioCard 
                    // key={Math.random(new Date().getSeconds())} 
                    data={item} 
                    numberOfQuestion={index}
                    setAnswer={setAnswer(index)}/>
                case "SELECT": 
                    return <SelectCard 
                    // key={Math.random(new Date().getSeconds())} 
                    data={item} 
                    numberOfQuestion={index} 
                    setAnswer={setAnswer(index)}/>
                default: return null;
                }
            })
            }
            </div>
        </div>
    );

}

export default QuestionsContainer;