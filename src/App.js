import React, { useState, useEffect } from 'react';

import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import About from "./panels/About";
import Rules from "./panels/Rules";
import Game from "./panels/Game";
import Settings from "./panels/Settings";
import {numberOfBombs} from "./static/texts/boardData";
import {getCurrentUserData} from "./helpers/commonHelpers";
import Leaderboard from "./panels/Leaderboard";
import {BanPage} from "./components/BanPage";


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [deviceWidth, setDeviceWidth] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [userDevice, setUserDevice] = useState(null);
	const [isBanned, setIsBanned] = useState(null);
	const [level, changeLevel] = useState('m');
	const [popup, showPopup] = useState(false);


	useEffect(() => {
		getCurrentUserData(setCurrentUser, setUserDevice, setIsBanned);
		setDeviceWidth(window.innerWidth);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const banned = isBanned ?? false;

	return (
		<ConfigProvider appearance="light">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popup}>
						<SplitCol>
							{!banned ? <View activePanel={activePanel}>
								<Home id="home" go={go} currentUser={currentUser}/>
								<About id="about" go={go} />
								<Rules id="rules" go={go} />
								<Leaderboard
									currentUser={currentUser}
									id="leaderboard"
									go={go}
								/>
								<Game
									userId={currentUser && currentUser.id}
									numberOfBombs={numberOfBombs[level]}
									deviceProp={setUserDevice}
									deviceWidth={deviceWidth}
									setIsBanned={setIsBanned}
									showPopup={showPopup}
									device={userDevice}
									user={currentUser}
									size={level}
									id="game"
									go={go}
								/>
								<Settings id="settings" go={go} level={level} changeLevel={changeLevel}/>
							</View> : <BanPage />}
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
