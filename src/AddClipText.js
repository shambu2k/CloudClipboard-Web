import React, { Component } from 'react';

class AddClipText extends Component {
    state = {
        timestamp: null,
        content: null
    };
    handleSubmit = (e) => {
        e.preventDefault();
        var currentDate = new Date();

        var dateString = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear()
            + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
        this.setState({
            timestamp: dateString,
            content: document.getElementById('content').value
        }, () => {
            this.props.addClipItem(this.state)
        });
    };
    getClipText() {
        navigator.clipboard.readText()
            .then(text => {
                document.getElementById('content').value = text;
            })
            .catch(err => {
                //maybe user didn't grant access to read from clipboard
                console.log('Something went wrong', err);
            });
    };
    render() {
        return (
            <div className="AddClipText">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Text">ClipboardText:</label>
                    <input type='text' id="content"></input>
                    <button>Submit</button>
                </form>
                <button onClick={this.getClipText}>Get from Clipboard</button>
            </div>
        );
    }
}

export default AddClipText;
