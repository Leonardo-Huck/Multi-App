import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  padding: 40px; 
  background: #fff; 
  border-radius: 15px; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
  max-width: 500px; 
  margin: 50px auto; 
`;

const Title = styled.h2`
  color: #333; 
  margin-bottom: 20px; 
  font-size: 24px; 
  text-align: center;
`;

const Question = styled.p`
  color: #555;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const OptionButton = styled.button`
  padding: 12px 20px; 
  background-color: #007bff;
  color: white;
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px;
  margin: 10px; 
  transition: background-color 0.3s, transform 0.3s;

  &:hover { 
    background-color: #0056b3; 
    transform: scale(1.05); .
  }

  &:active { 
    background-color: #004494; 
    transform: scale(0.95);
  }
`;

const Score = styled.p`
  color: #333; 
  font-size: 20px;
  margin-top: 20px; 
  text-align: center;
`;

const QuizApp = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 3+3?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
    {
      question: "What is 5+5?",
      options: ["9", "10", "11", "12"],
      answer: "10"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Dollar"],
      answer: "Yen"
    }
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {

      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };


  return (
    <Container>
      <Title>Quiz App</Title>
      {currentQuestion < questions.length ? (
        <div>
          <Question>{questions[currentQuestion].question}</Question>
          {questions[currentQuestion].options.map((option) => (
            <OptionButton key={option} onClick={() => handleAnswer(option)}>{option}</OptionButton>
          ))}
        </div>
      ) : (
        <Score>Your score: {score}</Score>
      )}
    </Container>
  );
};

export default QuizApp;
