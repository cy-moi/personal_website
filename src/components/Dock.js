import React from 'react'
import './Dock.css'
import { NavLink } from 'theme-ui'

class Dock extends React.PureComponent {

	render() {
		return(
			<div className="dockDiv">
				<div className="buttonDiv">
					<NavLink href="/" className="button">WORK</NavLink>
				</div>
				<div className="buttonDiv">
					<NavLink href="/" className="button">ARTS</NavLink>
				</div>
				<div className="buttonDiv">
					<NavLink href="/Bio" className="button">CV</NavLink>
				</div>
			</div>
		)
	}
}

export default Dock