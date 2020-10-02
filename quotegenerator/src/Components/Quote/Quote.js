import React from 'react'



class QuoteAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            quoteAuthor: ''
        }
    }
    
    
    getQuote(){
        const url = 'https://api.quotable.io/quotes'
        fetch(url)
        .then(res => res.json()
        .then(data => {
            const quote = data
            const author = data.author
            console.log(quote)
            return(
                this.setState({
                    // quote: quote,
                    // quoteAuthor: author
                })
            )
        }))
    }

    render(){
        return(
            <div>
                <li>{this.state.quote}</li>
                <li>{this.state.author}</li>
                <button onClick={this.getQuote()}>New Quote</button>
            </div>
        )
    }
}


// const Button = (props) => {
//     const handleClick = (e) => {
//       console.log("Hello")
//     }
//     return(
//       <div id="new-quote">
//           <button onClick={handleClick}>New Quote</button>
//       </div>
//     )
//   }




export default QuoteAPI 