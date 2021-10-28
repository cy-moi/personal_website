import React from 'react'
import './Header.css'
import { NavLink } from 'theme-ui'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
		this.props = props;
  }

	render() {
		return(
			<div className="headerDiv">
				<NavLink variant="secondary" onClick={event =>  window.location.href='/'}>
          {this.props.title}
        </NavLink>
			</div>
		)
	}
}

export default Header