import React from 'react';
import './App.css';
import QuoteAPI from '../Quote/Quote'


class QuoteList extends React.Component{
  render(){
    return(
      <div id="text">
        <ul><QuoteAPI quote={this.props.quote}/></ul>
        <div id="author">
          <ul><QuoteAPI author={this.props.author}/></ul>
        </div>
      </div>
    )
  }
}



const QuoteDisplay = () => {
    return(
    <div id="quote-box">
        <h1>Quote Generator</h1>

        <QuoteList />
        
        {/* <a href="" id="tweet-quote"></a> */}
    </div>
  )
}


function App() {
  return (
    <QuoteDisplay />
  );
}

export default App;
