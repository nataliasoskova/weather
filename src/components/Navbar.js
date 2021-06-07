import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-12">
                <h1 className="title text-center">Weather for Today</h1>
            </div>

            <div className="col-12">
                <form className="region text-center" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput text-center pulse"  placeholder="Type your city" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div>

        </div>
    )
}