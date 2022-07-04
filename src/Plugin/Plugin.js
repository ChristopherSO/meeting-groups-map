import React from "react";
// This import is only for this react app, not to be used in the WordPress plugin
import './index.scss';

import mapService from './mapService';
import Group from './Group/Group';
import FilterDropdown from './FilterDropdown/FilterDropdown';
import { Country, MeetingMode, GroupType, Text } from './enums';

class Plugin extends React.Component {

	constructor() {
		super();
		this.countryFilterDropdownReference = React.createRef();
		this.meetingModeFilterDropdownReference = React.createRef();
		this.groupTypeFilterDropdownReference = React.createRef();
	}

	async componentDidMount() {
		// TODO: *** Remove this setTimeout when moving to WordPress ***
		setTimeout(() => {
			mapService.initMap(this);
		}, 1000);
	}

	clearFilters() {
		this.countryFilterDropdownReference.current.clearFilters();
		this.meetingModeFilterDropdownReference.current.clearFilters();
		this.groupTypeFilterDropdownReference.current.clearFilters();

		mapService.unselectLastClickedGroup();
	}

	render() {
		return (
			<div className="plugin-container">
				<div className="filters">
					<div>{Text.FilterBy}</div>
					<FilterDropdown
						filterName={Text.Country}
						optionsObject={Country}
						onOptionChange={mapService.handleCountryChange.bind(mapService)}
						ref={this.countryFilterDropdownReference}
					/>
					<FilterDropdown
						filterName={Text.GroupType}
						optionsObject={GroupType}
						onOptionChange={mapService.handleGroupTypeChange.bind(mapService)}
						ref={this.groupTypeFilterDropdownReference}
					/>
					<FilterDropdown
						filterName={Text.MeetingMode}
						optionsObject={MeetingMode}
						onOptionChange={mapService.handleMeetingModeChange.bind(mapService)}
						ref={this.meetingModeFilterDropdownReference}
					/>
					<button
						type="button"
						className='link-button'
						onClick={this.clearFilters.bind(this)}
					>{Text.ClearFilters}</button>
				</div>
				<p className="note"><span>&#x1F6C8;</span> {Text.InfoNote}</p>
				<div className="groups-and-map-container">
					<div className="groups">
						{mapService.filteredGroups === null && 
							<div>{Text.Loading}</div>
						}
						{mapService.filteredGroups && mapService.filteredGroups.length === 0 && 
							<div>{Text.NoResultsToShow}</div>
						}
						{mapService.filteredGroups && mapService.filteredGroups.map((group) => (
							<div
								key={group.id}
								className={`group-wrapper ${group.id === mapService.lastClickedGroupId ? 'highlighted' : ''}`}
								onClick={() => mapService.handleGroupAndMapChange(group)}
							>
								<Group {...group} />
							</div>
						))}
					</div>
					<div id="map"></div>
				</div>
			</div>
		);
	}
};

export default Plugin;
