'use strict';

class InputFields extends React.Component {
    constructor(props) {
        super(props);
    }

    /*
    handleChange = (event) =>
    {
        alert(event.target.value)
    }
    */

    render() {
        let label = this.props.label;

        return(
            <div className="form-group">
                <label>{label}</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number"
                    aria-label="Enter number"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

class InputFieldsApp extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="InputFields">
                <InputFields label="Year" />
                <InputFields label="Price" />
            </div>
        )
    }
}

export {InputFieldsApp}
