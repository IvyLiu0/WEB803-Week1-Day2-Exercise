//Component example with Event handlers
// function Football() {
//     shot = () => {
//         alert("Great Shoot");
//     }

//     return (
//         <button onClick={this.shot}>Take the Shot</button>
//     )
// }

class Football extends React.Component {
    shoot () {
        alert("Great Shot!");
    }

    render () {
        return (
            <button onClick={this.shoot}>Take the Shot</button>
        )
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));