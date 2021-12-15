import { NavLink, ThemeProvider, Grid, Text, Badge } from 'theme-ui'
import React from 'react'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import { blogMap } from './entries'

export default class Blog extends React.PureComponent {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			markdown:''
		}
	}
	componentDidMount() {
	}
	render(){
		return (
			<ThemeProvider theme={preset}>
				<Header title="ZCY"/>
				<div className="pageRoot">
					<Dock />
					<Grid className='cardDiv' columns={[1, null, 2]}>
						{blogMap.map((prj, ind) => {
							return (
								<div className="cardText">
									<NavLink href={`#/blogpage/${ind}/`}>{prj.title} <Badge>{prj.lang}</Badge></NavLink>
									<Text>{prj.description}</Text>
								</div>
							)
						})}
					</Grid>
				</div>
			</ThemeProvider>

		)
	}
}
