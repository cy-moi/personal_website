import React from 'react'
import { render } from 'react-dom'
// import preset from '@rebass/preset'
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import { Image } from 'theme-ui'

export default class Home extends React.PureComponent {
	render(){
		return (
			<ThemeProvider theme={preset}>
					<Header title="ZCY"/>
					<div className="pageRoot">
					<Dock />
					<div className="cvDiv">
						<Image className="coverDiv" src={process.env.PUBLIC_URL+"/cover.png"}></Image>
					</div>

					</div>


			</ThemeProvider>
		);
	}
}
