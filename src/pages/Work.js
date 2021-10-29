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
					<Grid className='cvDiv' width={[256]}>
						{resourceMap.map((prj, ind) => {
							return (
							<Card
								sx={{
									maxWidth: 256,
								}}>
									<div className="coverThumbnail">
										<Image className="thumbImage" src={process.env.PUBLIC_URL+prj.cover} />
									</div>
									<NavLink href={`#/project/${ind}/`}>{prj.title}</NavLink>
									<Text>{}</Text>
							</Card>
							)
						})}
					</Grid>
				</div>
			</ThemeProvider>

		)

	}
}