import React from 'react'
// import preset from '@rebass/preset'
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import ReactMarkdown from 'react-markdown'
import cvMarkdown from '../CV.md'

export default class Bio extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			markdown:''
		}
	}
	componentDidMount() {
		// const readmePath = require("../CV.md");

		fetch(cvMarkdown)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					markdown: text
				})
			})
	}
	render(){
		const { markdown } = this.state;
		return (
			<ThemeProvider theme={preset}>
					<Header title="ZCY"/>
					<div className="pageRoot">
						<Dock />
						<div className='cvDiv'>
							<ReactMarkdown >{markdown}</ReactMarkdown>
						</div>
					</div>
			</ThemeProvider>
		);
	}
}
