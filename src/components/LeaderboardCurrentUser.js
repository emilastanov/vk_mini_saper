import {Avatar, Cell, Footer, Group, Link} from "@vkontakte/vkui";
import {recordIsAbsent, userPageLink} from "../static/texts/leaderboardData";
import React from "react";

export const LeaderboardCurrentUser = ({userPosition, category}) => (
    <Group separator="show">
        {userPosition ? <Link
            href={userPageLink.format({id: userPosition.user.userId})}
            target="_blank"
        >
            <Cell
                subtitle={`${userPosition.pos}е место`}
                before={<Avatar src={userPosition.user.photo} />}
                after={userPosition.user.recordTime}
            >
                {userPosition.user.firstName} {userPosition.user.lastName}
            </Cell>
        </Link> : <Footer>{recordIsAbsent[category]}</Footer>}
    </Group>
);
