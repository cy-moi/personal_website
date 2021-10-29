import { Card, Image, NavLink, ThemeProvider, Grid } from 'theme-ui'
import React from 'react'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import { resourceMap } from './resources'

export default class Work extends React.PureComponent {
	render() {
		return (
			<ThemeProvider theme={preset}>
				<Header title="ZCY"/>
				<div className="pageRoot">
					<Dock />
					<Grid className='cvDiv' width={[256]}>
						{resourceMap.map((prj, ind) => {
							return (
							<Card
								sx={{
									maxWidth: 256,
								}}>
								<Image src={process.env.PUBLIC_URL+"/workFiles/playground.jpg"} />
								<NavLink href={`#/project/${ind}/`}>{prj.title}</NavLink>
							</Card>
							)
						})}
					</Grid>
				</div>
			</ThemeProvider>

		)

	}
}