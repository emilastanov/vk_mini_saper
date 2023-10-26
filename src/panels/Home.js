import React from 'react';
import { Panel, Button, Group, ButtonGroup, Div } from '@vkontakte/vkui';

import {buttons, title, iconSize} from '../static/texts/homePanelData.js';
import {PatchedBomb} from '../static/icons/patchedBomb.js'
import panelStyle from '../styles/panelStyle.css';


const Home = ({ id, go }) => (

	<Panel id={id}>
		<Group>
			<Div className="container">
				<h1 className="title">{title}</h1>
				<ButtonGroup
					className="button_container"
					mode="vertical"
					stretched
				>
					{buttons.map((button)=> {
						if (button.length === 1){
							const {className, text, mode, goTo, action} = button[0];
							return <Button
								className={className}
								data-to={goTo}
								onClick={action || go}
								mode={mode}
								stretched
								size="l"
							>
								{text}
							</Button>
						} else {
							return <ButtonGroup
								mode="horizontal"
								stretched
							>
								{button.map(({className, text, mode, goTo, action})=>(
									<Button
									className={className}
									data-to={goTo}
									onClick={action || go}
									mode={mode}
									stretched
									size="l"
									>
								{text}
									</Button>
									))}
							</ButtonGroup>
						}
					})}
				</ButtonGroup>
				<div className="icon">
					<PatchedBomb size={iconSize}/>
				</div>
			</Div>
		</Group>
	</Panel>
);


export default Home;
