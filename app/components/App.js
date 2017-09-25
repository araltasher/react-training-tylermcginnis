var React = require('react');
var Tab = require('./Tab');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Tab />
            </div>
        )
    }
}

module.exports = App;