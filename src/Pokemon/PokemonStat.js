import React from 'react';
import {ICONS} from '../Services/constants';
import Icon from '../Services/Icon.jsx';

export const PokemonStat = ({ data }) => (
    <div key={data.stat.name} className="meter">
        <span style={{width: data.base_stat + '%'}}><Icon icon={ICONS.CIRCLE} />&nbsp;{data.stat.name}&nbsp;&nbsp;{data.base_stat}</span>
    </div>
);

export default PokemonStat;