import React, { Component } from 'react';
import * as api from "../api/api.js"

class AdBoard extends Component {
constructor(props) {
    super(props);
    this.state = {
    list: [],
    currentUser: '',
    currentRole: ''
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
    list: api.getAllpost(),
    currentUser: api.currentUser(),
    currentRole: api.currentRole()
    });
}

render() {

    return (
        <><p>Välkommen {this.state.currentUser}!</p><div className="m-4">
            <div className="table-responsive">
                <table className="table table-dark table-striped">
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
                            {this.state.currentRole==="tester" ? <th>Lämna bud</th> : null}
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
                                {this.state.currentRole==="tester" ? <td><button id="btnAf" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bidformModal">
                                    Bud ej tillgängligt ännu
                                </button></td> : null}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div></>
    );
}
}
export default AdBoard;