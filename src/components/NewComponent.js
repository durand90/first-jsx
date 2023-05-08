import React, { Component } from 'react'

class NewComponent extends Component {
    render() {
        return (
            <div style={(StyleSheet.author, { textAlign: "left" })}>
                <h1 style={{color: "black"}}>Hello Dojo!</h1>
                <label ><strong>Things I need to do:</strong></label>
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