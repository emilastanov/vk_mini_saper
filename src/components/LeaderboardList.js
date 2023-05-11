import {Avatar, Cell, Group, Link, Spinner} from "@vkontakte/vkui";
import {userPageLink, positionStyle, posSuffix} from "../static/texts/leaderboardData";
import React from "react";
import {makeStopwatchString} from "../helpers/commonHelpers/makeStopwatchString";

export const LeaderboardList = ({leaderboard}) => (
    <Group separator="show">
        {leaderboard ? leaderboard.records.map((record, key)=> {
            const avatarStyle = positionStyle[key];
            return <Link href={userPageLink.format({id: record.userId})} target="_blank">
                <Cell
                    key={key}
                    subtitle={posSuffix.format({pos: key + 1})}
                    before={<Avatar style={avatarStyle} src={record.photo}/>}
                    after={makeStopwatchString(record.recordTime)}
                >
                    {record.firstName} {record.lastName}
                </Cell>
            </Link>
        }): <Spinner size="large" style={{ margin: '20px 0' }} />}
    </Group>
)
