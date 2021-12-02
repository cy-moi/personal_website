import { Card, Image, NavLink, ThemeProvider, Grid, Text } from 'theme-ui'
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
					<Grid className='cardDiv' width={[300]}>
						{resourceMap.map((prj, ind) => {
							return (
							<Card
								sx={{
									maxWidth: 500
								}}>
									<div className="coverThumbnail">
										<Image className="thumbImage" src={process.env.PUBLIC_URL+prj.cover} />
									</div>
									<div className="cardText">
										<NavLink href={`#/project/${ind}/`}>{prj.title}</NavLink>
										<Text>{prj.description}</Text>
									</div>
							</Card>
							)
						})}
					</Grid>
				</div>
			</ThemeProvider>

		)

	}
}