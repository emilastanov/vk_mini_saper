import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import About from "./panels/About";
import Rules from "./panels/Rules";
import Game from "./panels/Game";
import Settings from "./panels/Settings";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	const [deviceWidth, setDeviceWidth] = useState(null);

	useEffect(() => {
		setDeviceWidth(window.innerWidth);
		// async function fetchData() {
		// 	const user = await bridge.send('VKWebAppGetUserInfo');
		// 	setUser(user);
		// 	setPopout(null);
		// }
		// fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider appearance="light">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id="home" go={go} />
								<About id="about" go={go} />
								<Rules id="rules" go={go} />
								<Game id="game" go={go} deviceWidth={deviceWidth} numberOfBombs={2} size='s'/>
								<Settings id="settings" go={go}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
