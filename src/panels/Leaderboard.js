import React, {useEffect, useState} from 'react';
import {
    Panel,
    SegmentedControl,
    PanelHeaderBack,
    PanelHeader,
    FormItem,
    Div,
    Group,
    Cell,
    Avatar,
    Footer,
    Link
} from '@vkontakte/vkui';

import {categories, description, recordIsAbsent} from "../static/texts/leaderboardData";
import panelStyle from '../styles/panelStyle.css';
import {getLeaderboardByDifficulty} from "../helpers/leaderboardHelpers/getLeaderboardByDifficulty";


const Leaderboard = ({ id, go, currentUser }) => {
    const [category, setCategory] = useState('s');
    const [leaderboard, setLeaderboard] = useState(null);

    useEffect(()=>{
        getLeaderboardByDifficulty(category, currentUser?.id, setLeaderboard);
    }, [category])

    return <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>
            Лидеры
        </PanelHeader>
        <Div>
            <FormItem top="Категория" bottom={description[category]}>
                <SegmentedControl
                    size="l"
                    name="report-type"
                    value={category}
                    onChange={setCategory}
                    options={categories}
                    style={{fontSize: 8}}
                />
            </FormItem>
            <Group separator="show">
                {leaderboard?.userPosition ? <Link
                    href={`https://vk.com/id${leaderboard.userPosition.user.userId}`}
                    target="_blank"
                >
                    <Cell
                        subtitle={`${leaderboard.userPosition.pos}е место`}
                        before={<Avatar src={leaderboard.userPosition.user.photo}/>}
                        after={leaderboard.userPosition.user.recordTime}
                    >
                        {leaderboard.userPosition.user.firstName} {leaderboard.userPosition.user.lastName}
                    </Cell>
                </Link> : <Footer>{recordIsAbsent[category]}</Footer>}
            </Group>
            <Group separator="show">
                {leaderboard?.records.map((record, key)=>(
                    <Link href={`https://vk.com/id${record.userId}`} target="_blank">
                        <Cell
                            key={key}
                            subtitle={`${key+1}е место`}
                            before={<Avatar src={record.photo}/>}
                            after={record.recordTime}
                        >
                            {record.firstName} {record.lastName}
                        </Cell>
                    </Link>
                ))}
            </Group>
            <Footer>Общее число рекоров {leaderboard?.count}</Footer>
        </Div>
    </Panel>
};


export default Leaderboard;
