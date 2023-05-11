import React from "react";
import {Avatar, Cell, Footer, Group, Link} from "@vkontakte/vkui";
import {posSuffix, recordIsAbsent, share} from "../static/texts/leaderboardData";
import {makeStopwatchString} from "../helpers/commonHelpers/makeStopwatchString";
import {makeWallPost} from "../helpers/leaderboardHelpers";

export const LeaderboardCurrentUser = ({userPosition, category }) => (
    <Group separator="show">
        {userPosition ? <Cell
            onClick={()=>makeWallPost(userPosition)}
            subtitle={posSuffix.format({pos: userPosition.pos})}
            before={<Avatar src={userPosition.user.photo} />}
            after={makeStopwatchString(userPosition.user.recordTime)}
            badgeAfterSubtitle={share}
        >
            {userPosition.user.firstName} {userPosition.user.lastName}
        </Cell> : <Footer>{recordIsAbsent[category]}</Footer>}
    </Group>
);
