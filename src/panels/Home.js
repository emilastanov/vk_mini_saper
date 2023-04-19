import React from 'react';
import { Panel, Button, Group, ButtonGroup, Div } from '@vkontakte/vkui';

import {buttons, title, iconSize} from '../static/texts/homePanelData.js';
import {Icon as PatchedBomb} from '../static/icons/patchedBomb.js'
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
					{buttons.map(({
							className,
							text,
							mode,
							goTo
					})=>(
						<Button
							className={className}
							data-to={goTo}
							onClick={go}
							mode={mode}
							stretched
							size="l"
						>
							{text}
						</Button>
					))}
				</ButtonGroup>
				<PatchedBomb size={iconSize}/>
			</Div>
		</Group>
	</Panel>
);


export default Home;
