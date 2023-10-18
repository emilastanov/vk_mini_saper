import React, {useEffect, useState} from 'react';
import {
    Panel,
    PanelHeaderBack,
    PanelHeader,
    Div,
    Footer,
} from '@vkontakte/vkui';

import panelStyle from '../styles/panelStyle.css';

import {
    footer,
    title
} from "../static/texts/leaderboardData";
import {getLeaderboardByDifficulty} from "../helpers/leaderboardHelpers";
import {LeaderboardCategorySelector} from "../components/LeaderboardCategorySelector";
import {LeaderboardCurrentUser} from "../components/LeaderboardCurrentUser";
import {LeaderboardList} from "../components/LeaderboardList";


const Leaderboard = ({ id, go, currentUser }) => {
    const [category, setCategory] = useState('m');
    const [leaderboard, setLeaderboard] = useState(null);

    useEffect(()=>{
        setLeaderboard(null);
        getLeaderboardByDifficulty(category, currentUser?.id, setLeaderboard);
    }, [category])

    return <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>
            {title}
        </PanelHeader>
        <Div>
            <LeaderboardCategorySelector category={category} setCategory={setCategory}/>
            <LeaderboardCurrentUser
                userPosition={leaderboard?.userPosition}
                category={category}
            />
            <LeaderboardList leaderboard={leaderboard}/>
            <Footer>{footer.format({records: leaderboard?.count})}</Footer>
        </Div>
    </Panel>
};


export default Leaderboard;
