import React, { Component } from 'react';

class App extends Component {

    state = {
        quotes: null
    };

    // "https://gist.githubusercontent.com/shakked/2a964ccf120b6a853786/raw/bda7928fe658a847506a3e564d37e9ae353cba61/quotes.json"
    componentDidMount() {
        const eventsApi = 'http://localhost:3001/api/events.json'

        fetch(eventsApi)
            .then(response => response.json())
            .then(json => {
                json.sort(
                    () => 0.5 - Math.random()
                );
                this.setState({
                    quotes: json
                });
            })
            .catch(err => console.log(err));
    }

    buildList() {
        const listItems = this.state.quotes.map((quote, index) => (
            <li key={index}>
                {quote.id}
                <span> -- {quote.title}</span>
            </li>
        ));
        return listItems;
    }

    render() {
        return (
            <div>
                <h1>Wise Quotes</h1>
                <p>
                    From: &nbsp;
                    <a href="http://localhost:3001/api/events.json">
                        JSON resource file
                    </a>
                </p>
                <ul>
                    {
                        this.state.quotes ? this.buildList() : ""
                    }
                </ul>
            </div>
        );
    }
}

export default App;
