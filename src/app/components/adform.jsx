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
            enddate: '',
            author: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field) {
        this.setState({ [field]: event.target.value, author: api.currentUser() });
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
            this.state.author
            );
        this.handleReset();
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
        <><div className="modal fade" id="adformModal" tabIndex="-1" aria-labelledby="adformModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="adformModalLabel">Lägg till ny annons</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Titel" required value={this.state.title} onChange={(event) => this.handleChange(event, "title")} /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea className="form-control" placeholder="Beskrivning" rows="4" cols="50" required value={this.state.desc} onChange={(event) => this.handleChange(event, "desc")}>
                        </textarea><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enhet att testa på" required value={this.state.devicetotest} onChange={(event) => this.handleChange(event, "devicetotest")} /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Budget" min="1" required value={this.state.budget} onChange={(event) => this.handleChange(event, "budget")} /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Antal testare" min="1" required value={this.state.nroftesters} onChange={(event) => this.handleChange(event, "nroftesters")} /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Startdatum för test
                        <input type="date" className="form-control" required value={this.state.startdate} onChange={(event) => this.handleChange(event, "startdate")} /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Slutdatum för test
                        <input type="date" className="form-control" required value={this.state.enddate} onChange={(event) => this.handleChange(event, "enddate")} /><br></br>
                    </div>
                </div>
                <br></br>
                <input type="submit" className="btn btn-primary mb-3" value="Lägg till ny annons" />
            </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div></>
    );
    }
};