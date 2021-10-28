import {useState} from 'react'

import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function App() {
  const [questions,setquestion] = useState([
    {
      question  : "What does HTML stand for?",
      option : ["Home Tool Markup Language", "Hyperlink Markup Language","HyperText Markup Language", "HyperStar Markup Language"],
      anwser : "HyperText Markup Language"
    },
    {
      question : "Who is making the Web standards?",
      option : ["Mozilla FireFox","The World  Wide Web Consortium","Google","MicroSoft"],
      anwser : "The World  Wide Web Consortium"
    },
    {
    question : "Choose the correct HTML element for the largest heading?",
    option : ["<h1>","<Head>","<Heading>","<H6>"],
    anwser : "<h1>"
    },
    {
      question : "What is the correct HTML element for inserting a line break?",
      option : ["<lb>","<br>","<lbr>","<break>"],
      awnser : "<br>"
    },
    {
      question :"What is the correct HTML for adding a background color?",
      option : ["<body bg='yellow'>","<body style='background-color:yellow;'>","<background>yellow</background>","<head>yellow</head>"],
      anwser : "<body style='background-color:yellow;'>"
    },
    { 
      question : "Choose the correct HTML element to define important text?",
      option : ["<important","<strong>","<br>","<i>"],
      answer : "<strong>"

    },
    {
      question : "Choose the correct HTML element to define emphasized text?",
      option : ["<em>","<i>","<italic>","<strong>"],
      anwser : "<em>"
    },
    {
      question : "Which character is used to indicate an end tag?",
      option : ["*","<","/",">"],
      anwser : "/"

    },
    {
      question : "Which of these elements are all <table> elements?",
      option : ["<table><head><tfoot>","<thead><body><tr>","<table><tr><td>","<table><tr><tt>"],
      anwser : "<table><tr><td>"
    },
    {
      question : "How can you make a numbered list?",
      option : ["<dl>","<ul>","<ol>","<list>"],
      anwser : "<ol>"
    }
    


])
  const [marks,setmarks] = useState(false)
  const [result,setresult] = useState(false)
  const [questionInd,setquestionInd] = useState(0)
  const nextQuestion = () => {
    if(questions.length - 1 == questionInd){
      setresult(true)
    }else{

      setquestionInd( questionInd + 1) 

    }

  }
  const checkAnwser=(cor,user)=>{
     if(cor == user){
          setmarks(marks + 1)
     }
     nextQuestion();
  }  
  return (
    <div className="App">

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            
            <Toolbar sx={{ bgcolor: "#023047" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h3" className="heading" component="div" sx={{ flexGrow: 1, }}>
                Quiz App
              </Typography>
            </Toolbar>
          
        </AppBar>

      </Box>
        { 
          result ? <div className="result-div">
               <Button className="result" variant="contained" disableElevation>   <h1>RESULT : {(marks/questions.length * 100)} %</h1> </Button>
          </div>
        
          :
          <Container className="container" sx={{ bgcolor: '#bee1e6', borderRadius: "15px", marginTop: "30px", height: '450px' }} maxWidth="sm">
          <Grid sx={{ paddingTop: "10px" }} container spacing={2}>
            <Grid className="question-div" item xs={12}>
  
              <Item >{questions[questionInd].question}</Item>
            </Grid>
  
            <Grid className="option-div" container >
            {questions[questionInd].option.map((e)=> {
                return   <Grid item xs={6}>
                           <Item className="option" onClick={()=>checkAnwser(questions[questionInd].anwser,e) } >{e}</Item>
                         </Grid>
    
              }  )}
          
          </Grid>
          </Grid>
          
          <Grid class="btn" xs={12}>
          <Button variant="contained" onClick={nextQuestion} >Next</Button>
          
          </Grid>
        
          </Container>
        
            }
        

    </div>
  );
}

export default App;
