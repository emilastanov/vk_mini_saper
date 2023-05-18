import {categories, description, selectorTitle} from "../static/texts/leaderboardData";
import {FormItem, CustomSelect, CustomSelectOption} from "@vkontakte/vkui";
import React from "react";

export const LeaderboardCategorySelector = ({category, setCategory})=> (
    <FormItem top={selectorTitle} bottom={description[category]}>
        <CustomSelect
            size="l"
            name="report-type"
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            options={categories}
            renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} description={description[option.value]} />
            )}
            style={{fontSize: 8}}
        />
    </FormItem>
);
