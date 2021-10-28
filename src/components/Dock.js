import React from 'react'
import './Dock.css'
import { NavLink } from 'theme-ui'

class Dock extends React.PureComponent {

	render() {
		return(
			<div className="dockDiv">
				<div className="buttonDiv">
					<NavLink href={process.env.PUBLIC_URL+"/"} className="button">WORK</NavLink>
				</div>
				<div className="buttonDiv">
					<NavLink href={process.env.PUBLIC_URL+"/"} className="button">ARTS</NavLink>
				</div>
				<div className="buttonDiv">
					<NavLink href={process.env.PUBLIC_URL+"/#/bio/"} className="button">CV</NavLink>
				</div>
			</div>
		)
	}
}

export default Dock