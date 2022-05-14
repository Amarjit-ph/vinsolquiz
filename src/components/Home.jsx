/*
 * File Created: Saturday, 14th May 2022 4:33:11 pm
 * Author: Amarjit Pheiroijam
 */
import React,{useState} from 'react'
import Header from './Header';
import {questions} from '../quiz';
/* eslint-disable */
export default function Home() {
  const [q1Status, setQ1Status] = useState("OFF"); // OFF | RUNNING | COMPLETED
  const [q2Status, setQ2Status] = useState("OFF"); // OFF | RUNNING | COMPLETED
  const [q1NumberOfQuestion,setQ1NumberOfQuestion] = useState(5); 
  const [q2NumberOfQuestion,setQ2NumberOfQuestion] = useState(14);
  const [q1Score, setQ1Score1] = useState(0);
  const [q2Score, setQ2Score2] = useState(0);
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [currentQuestion2, setCurrentQuestion2] = useState(10);  
  const [currentAnswer1,setCurrentAnswer1] = useState(0);
  const [currentAnswer2,setCurrentAnswer2] = useState(0);
  const [confeti,setConfeti] = useState(false);
  const handleSumbmitOne = () => {
    const result = questions[currentQuestion1].answerOptions[currentAnswer1];
    if(result){
        console.log("Correct Answer");
        setQ1Score1(q1Score+1);
    }else{
        console.log("Wrong Answer");
    }
    setCurrentAnswer1(0);
    if(q1NumberOfQuestion === (currentQuestion1+1)){
        setQ1Status("COMPLETED");
        setConfeti(400);
        setCurrentQuestion1(0);
    }else{
        setCurrentQuestion1(currentQuestion1+1);
    }
  }
  const handleSumbmitTwo = () => {
    const result = questions[currentQuestion2].answerOptions[currentAnswer2];
    if(result){
        console.log("Correct Answer");
        setQ2Score2(q2Score+1);
    }else{
        console.log("Wrong Answer");
    }
    setCurrentAnswer2(0);
    if(q2NumberOfQuestion === (currentQuestion2+1)){
        setQ2Status("COMPLETED");
        setConfeti(400);
        setCurrentQuestion2(10);
    }else{
        setCurrentQuestion2(currentQuestion2+1);
    }
  }
  return (
   <React.Fragment>
   <Header confeti={confeti}/> 
   <section>
        <div class="relative items-center w-full py-3 mx-auto md:px-3 lg:px-16 max-w-7xl">
            <div class="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-2">
                

                <div>
                    <div class="p-12 mx-auto">
                    <span class="mb-8 text-lg font-semibold tracking-widest text-blue-600 uppercase"> QUIZ 1 </span> <br/><br/>

                    {q1Status === "OFF" && <React.Fragment>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Mathematics Quiz 1 </span>
                        <p class="mx-auto mt-6 text-base text-gray-500 lading-relaxed">Quiz encourage students self awareness of progress and self assessment.<br/> <br/>  By taking quizzes, Students get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.</p>
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={()=>setQ1Status("RUNNING")}
                            >Start Quiz</button>
                        </div> 
                    </React.Fragment>}


                    {q1Status === "RUNNING" && <React.Fragment>
                        <span class="mb-2 text-lg font-semibold tracking-widest text-black uppercase">Question No.{currentQuestion1+1}</span> <br/>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">{questions[currentQuestion1].questionText}</span><br/><br/>
                        {questions[currentQuestion1].answerOptions.map((answerOption,i) => {
                            if( i+1 == currentAnswer1){
                                return <button className='bg-blue-300 w-full m-1 py-1 rounded-lg'
                                onClick={()=>setCurrentAnswer1(i+1)}
                                >{i+1}. {answerOption.answerText}</button>
                            }else{
                            return <button className='bg-gray-100 w-full m-1 py-1 rounded-lg'
                            onClick={()=>setCurrentAnswer1(i+1)}
                            >{i+1}. {answerOption.answerText}</button>
                            }
                        })}
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={handleSumbmitOne}
                            >
                            Next</button>
                        </div>
                    </React.Fragment>}

                     {q1Status === "COMPLETED" && <React.Fragment>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Mathematics Quiz 1 </span>
                        <br/>
                        <p class="mt-8 text-lg font-semibold tracking-widest text-blue-600 "> Your Result</p> <br/>
                        <p class="mx-auto text-xl text-gray-500 lading-relaxed">You get <span className='text-2xl text-blue-500 font-extrabold'>{q1Score*10}</span> out of <span className='text-2xl font-extrabold'>{q1NumberOfQuestion*10}</span>.
                        <br/>Congratulation keep going.</p>
                        <br/> 
                        <br/>
                        “Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={()=>{
                                setQ1Status("OFF")
                                setQ1Score1(0)
                                setConfeti(0);
                            }}
                            >Reset</button>
                        </div> 
                    </React.Fragment>}
                
                    </div>
                </div>



                <div>
                    <div class="p-12 mx-auto">
                    <span class="mb-8 text-md font-semibold tracking-widest text-blue-600 uppercase"> QUIZ 2 </span><br/><br/>

                      {q2Status === "OFF" && <React.Fragment>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Mathematics Quiz 2 </span>
                        <p class="mx-auto mt-6 text-base text-gray-500 lading-relaxed">Quizzes like this helps to assess the mathematical skills, proficiency and aptitude of the students.<br/> <br/> The objective of the quiz competition was to encourage students to look beyond their textual knowledge and establish a relationship between theory and application of the learnt concepts.</p>
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={()=>setQ2Status("RUNNING")}
                            >Start Quiz</button>
                        </div> 
                    </React.Fragment>}


                     {q2Status === "RUNNING" && <React.Fragment>
                        <span class="mb-2 text-lg font-semibold tracking-widest text-black uppercase">Question No.{currentQuestion2+1}</span> <br/>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">{questions[currentQuestion2].questionText}</span><br/><br/>
                        {questions[currentQuestion2].answerOptions.map((answerOption,i) => {
                            if( i+1 == currentAnswer2){
                                return <button className='bg-blue-300 w-full m-1 py-1 rounded-lg'
                                onClick={()=>setCurrentAnswer2(i+1)}
                                >{i+1}. {answerOption.answerText}</button>
                            }else{
                            return <button className='bg-gray-100 w-full m-1 py-1 rounded-lg'
                            onClick={()=>setCurrentAnswer2(i+1)}
                            >{i+1}. {answerOption.answerText}</button>
                            }
                        })}
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={handleSumbmitTwo}
                            >
                            Next</button>
                        </div>
                    </React.Fragment>}


                    {q2Status === "COMPLETED" && <React.Fragment>
                        <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> Mathematics Quiz 2 </span>
                        <br/>
                        <p class="mt-8 text-lg font-semibold tracking-widest text-blue-600 "> Your Result</p> <br/>
                        <p class="mx-auto text-xl text-gray-500 lading-relaxed">You get <span className='text-2xl text-blue-500 font-extrabold'>{q2Score*10}</span> out of <span className='text-2xl font-extrabold'>{50}</span>.
                        <br/>Congratulation keep going.</p>
                        <br/> 
                        <br/>
                        “The more that you read, the more things you will know. The more that you learn, the more places you'll go.”― Dr. Seuss
                        <div class="mt-6">
                            <button class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center
                            text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl
                            hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={()=>{
                                setQ2Status("OFF")
                                setQ2Score2(0)
                                setConfeti(0);
                            }}
                            >Reset</button>
                        </div> 
                    </React.Fragment>}
                    

                    </div>
                </div>


            </div>
        </div>
    </section>
    </React.Fragment>
  )
}
