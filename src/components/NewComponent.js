import React, { Component } from 'react'

class NewComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello Dojo!</h1>
                <label><strong>Things I need to do:</strong></label>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>
        );
    }
}

export default NewComponent;