import {categories, description, selectorTitle} from "../static/texts/leaderboardData";
import {FormItem, SegmentedControl} from "@vkontakte/vkui";
import React from "react";

export const LeaderboardCategorySelector = ({category, setCategory})=> (
    <FormItem top={selectorTitle} bottom={description[category]}>
        <SegmentedControl
            size="l"
            name="report-type"
            value={category}
            onChange={setCategory}
            options={categories}
            style={{fontSize: 8}}
        />
    </FormItem>
);
