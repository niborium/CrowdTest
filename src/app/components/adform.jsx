import React from "react";
import * as api from "../api/api.js"

export class AdForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc:'',
            devicetotest: '',
            budget: '',
            nroftesters: '',
            startdate: '',
            enddate: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field) {
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        api.postNewadd(
            this.state.title, 
            this.state.desc, 
            this.state.devicetotest, 
            this.state.budget, 
            this.state.nroftesters, 
            this.state.startdate, 
            this.state.enddate, 
            "admin"
            );
        this.handleReset();
        //TILLFÄLLIGT FÖR ATT SKRIVA UT ALLA ANNONSER
        api.getAllpost();
        //unmountComponentAtNode(document.getElementById('root'));
        event.preventDefault();
    }
    handleReset = () => {
        document.querySelectorAll('input');
        this.setState({
        title: [''],
        desc: [''],
        devicetotest: [''],
        budget: [''],
        nroftesters: [''],
        startdate: [''],
        enddate: ['']
        });
    };

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Titel:
            <input type="text" required value={this.state.title} onChange={(event)=>this.handleChange(event, "title")} /><br></br>
            Beskrivning:
            <input type="text" required value={this.state.desc} onChange={(event)=>this.handleChange(event, "desc")} /><br></br>
            Enheter att testa på:
            <input type="text" required value={this.state.devicetotest} onChange={(event)=>this.handleChange(event, "devicetotest")} /><br></br>
            Budget:
            <input type="number" required min="1" value={this.state.budget} onChange={(event)=>this.handleChange(event, "budget")} /><br></br>
            Antal testare:
            <input type="number" required min="1" value={this.state.nroftesters} onChange={(event)=>this.handleChange(event, "nroftesters")} /><br></br>
            Startdatum för test:
            <input type="datetime-local" required value={this.state.startdate} onChange={(event)=>this.handleChange(event, "startdate")} /><br></br>
            Slutdatum för test:
            <input type="datetime-local"required value={this.state.enddate} onChange={(event)=>this.handleChange(event, "enddate")} /><br></br>
        </label><br></br>
        <input type="submit" value="Skicka" />
        </form>
    );
    }
};

//ReactDOM.render(
//    <NameForm />,
//    document.getElementById('root')
//);