import {Avatar, Cell, Footer, Group, Link} from "@vkontakte/vkui";
import {posSuffix, recordIsAbsent, userPageLink} from "../static/texts/leaderboardData";
import React from "react";
import {makeStopwatchString} from "../helpers/commonHelpers/makeStopwatchString";

export const LeaderboardCurrentUser = ({userPosition, category}) => (
    <Group separator="show">
        {userPosition ? <Link
            href={userPageLink.format({id: userPosition.user.userId})}
            target="_blank"
        >
            <Cell
                subtitle={posSuffix.format({pos: userPosition.pos})}
                before={<Avatar src={userPosition.user.photo} />}
                after={makeStopwatchString(userPosition.user.recordTime)}
            >
                {userPosition.user.firstName} {userPosition.user.lastName}
            </Cell>
        </Link> : <Footer>{recordIsAbsent[category]}</Footer>}
    </Group>
);
