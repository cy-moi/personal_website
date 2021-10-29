import React from 'react'
import { render } from 'react-dom'
// import preset from '@rebass/preset'
import { ThemeProvider, Image } from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import ReactMarkdown from 'react-markdown'
import { resourceMap } from './resources'

export default class Project extends React.PureComponent {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			markdown:''
		}
	}
	componentDidMount() {
		const markdownPath = `${process.env.PUBLIC_URL}${resourceMap[this.props.match.params.projectId]["readme"]}`
		fetch(markdownPath)
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
							<Image className= "coverImage" src={`${process.env.PUBLIC_URL}${resourceMap[this.props.match.params.projectId]["cover"]}`} />
							<ReactMarkdown >{markdown}</ReactMarkdown>
						</div>
					</div>
			</ThemeProvider>
		);
	}
}
