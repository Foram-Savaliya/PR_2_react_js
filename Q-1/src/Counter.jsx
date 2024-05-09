import { Component } from "react";
import './Style.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div align="center">
                <h1 className="pb-5">Counter App</h1>
                <div className="d-flex flex-wrap align-items-center justify-content-center mb-5">
                    <button onClick={() => this.increment()} className="box border-0 bg-success fs-3">+</button>

                    <div className="box box-1 border-0 fs-3 p-2 mx-5">
                        {this.state.count}
                    </div>

                    <button onClick={() => this.Decrement()} className="box border-0 bg-success fs-3">-</button>
                </div>
                <button onClick={() => this.reset()} className="box border-0 bg-success fs-3">reset</button>
            </div>
        )
    }
}

export default Counter