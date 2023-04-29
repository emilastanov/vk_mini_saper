import React, { useState, useEffect } from 'react';

import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import About from "./panels/About";
import Rules from "./panels/Rules";
import Game from "./panels/Game";
import Settings from "./panels/Settings";
import {numberOfBombs} from "./static/texts/boardData";
import {getCurrentUserData} from "./helpers/commonHelpers";


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [deviceWidth, setDeviceWidth] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [level, changeLevel] = useState('m');
	const [popup, showPopup] = useState(false);

	useEffect(() => {
		getCurrentUserData(bridge, setCurrentUser);
		setDeviceWidth(window.innerWidth);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider appearance="light">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popup}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id="home" go={go} currentUser={currentUser}/>
								<About id="about" go={go} />
								<Rules id="rules" go={go} />
								<Game
									numberOfBombs={numberOfBombs[level]}
									deviceWidth={deviceWidth}
									showPopup={showPopup}
									bridge={bridge}
									size={level}
									id="game"
									go={go}
								/>
								<Settings id="settings" go={go} level={level} changeLevel={changeLevel}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
