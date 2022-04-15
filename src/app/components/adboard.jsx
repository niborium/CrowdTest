import React, { Component } from 'react';
import * as api from "../api/api.js"

class AdBoard extends Component {
constructor(props) {
    super(props);
    this.state = {
    list: [],
    //list: api.getAllpost()
    };
}
componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(),
    1000
    );
}

componentWillUnmount() {
    clearInterval(this.timerID);
}

tick() {
    this.setState({
    list: api.getAllpost()
    });
}

render() {

    return (

/*     <div>
        <ul>
        {this.state.list.map(item => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div> */
        <div className="m-4">
            <div className="table-responsive"> 
                <table className="table">
                    <thead>
                        <tr>
                            <th>#id</th>
                            <th>Titel:</th>
                            <th>Beskrivning:</th>
                            <th>Enheter att testa på:</th>
                            <th>Budget:</th>
                            <th>Antal testare som behövs:</th>
                            <th>Startdatum:</th>
                            <th>Slutdatum:</th>
                            <th>Publicerad av:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.devicetotest}</td>
                            <td>{data.budget}</td>
                            <td>{data.nroftesters}</td>
                            <td>{data.startdate}</td>
                            <td>{data.enddate}</td>
                            <td>{data.author}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>

    );
}
}
export default AdBoard;