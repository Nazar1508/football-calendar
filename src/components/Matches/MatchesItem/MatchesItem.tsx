import React from 'react';
import classes from './MatchesItem.module.css';

type HomeAwayTeamsType = {
    id: number
    team_name: string
    logo: string
}

type PropsType = {
    homeTeam: HomeAwayTeamsType
    awayTeam: HomeAwayTeamsType
    goalsHomeTeam: number
    goalsAwayTeam: number
}

let MatchesItem: React.FC<PropsType> = (props) => {
    console.log(props);
    
    let detectWinnerForHomeTeam = () => {
        if (props.goalsHomeTeam > props.goalsAwayTeam) {
            return classes.winner;
        }
    };

    let detectWinnerForAwayTeam = () => {
        if (props.goalsAwayTeam > props.goalsHomeTeam) {
            return classes.winner;
        }
    };

    return (
        <li className={classes.matchesListItem}>
            <div
                className={[classes.teamBlock, classes.teamBlockLeft].join(' ')}
            >
                <strong
                    className={[classes.teamName, classes.homeTeam].join(' ')}
                >
                    {props.homeTeam.team_name}
                </strong>
                <img
                    className={classes.teamLogo}
                    src={props.homeTeam.logo}
                    width='25'
                    height='25'
                    loading='lazy'
                    alt={`${props.homeTeam.team_name} logo`}
                />
            </div>
            <div className={classes.result}>
                <span className={detectWinnerForHomeTeam()}>
                    {props.goalsHomeTeam}
                </span>
                <span className={classes.resultLine}>-</span>
                <span className={detectWinnerForAwayTeam()}>
                    {props.goalsAwayTeam}
                </span>
            </div>
            <div className={classes.teamBlock}>
                <img
                    className={classes.teamLogo}
                    src={props.awayTeam.logo}
                    width='25'
                    height='25'
                    loading='lazy'
                    alt={`${props.awayTeam.team_name} logo`}
                />
                <strong
                    className={[classes.teamName, classes.awayTeam].join(' ')}
                >
                    {props.awayTeam.team_name}
                </strong>
            </div>
        </li>
    );
}

export default MatchesItem;
