import React from 'react'
// import preset from '@rebass/preset'
import { ThemeProvider} from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogMap } from './entries'

export default class BlogPage extends React.PureComponent {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			markdown:''
		}
	}
	componentDidMount() {
		const markdownPath = `${process.env.PUBLIC_URL}${blogMap[this.props.match.params.blogId]["content"]}`
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
						<div className='blogDiv'>
							<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
						</div>
					</div>
			</ThemeProvider>
		);
	}
}
