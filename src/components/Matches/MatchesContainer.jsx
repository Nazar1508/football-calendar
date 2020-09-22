import React from "react";
import { connect } from "react-redux";
import Matches from "./Matches";
import {getMatchesData, setFilteredEventsCount} from "../Redux/matches-reducer";

let mapStateToProps = (state) => {
    return {
        premierLeagueEvents: state.matchesPage.premierLeagueEvents,
        filteredEventsCount: state.matchesPage.filteredEventsCount,
        setFilteredEventsCount: state.matchesPage.setFilteredEventsCount
    }
}

class MatchesContainer extends React.Component {
    componentDidMount() {
        this.props.getMatchesData(this.props.filteredEventsCount);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filteredEventsCount !== this.props.filteredEventsCount) {
            this.props.getMatchesData(this.props.filteredEventsCount);
        }
    }
    
    render() {
        return (
            <Matches 
                events={this.props.premierLeagueEvents} 
                filteredEventsCount={this.props.filteredEventsCount}
                setFilteredEventsCount={this.props.setFilteredEventsCount} 
            />
        )
    }
}

export default connect(mapStateToProps, {getMatchesData, setFilteredEventsCount})(MatchesContainer);