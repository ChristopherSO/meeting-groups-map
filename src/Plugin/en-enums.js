const enEnums = {
	Country: Object.freeze({
		CR: "Costa Rica",
		MX: "Mexico",
		US: "United States",
	}),

	MeetingMode: Object.freeze({
		Virtual: "Virtual",
		FaceToFace: "Face to face",
	}),

	GroupType: Object.freeze({
		Leadership: "Leadership",
		Strategy: "Strategy",
		Design: "Design",
		Mixed: "Software",
		Hardware: "Hardware",
		Business: "Business",
		ManagedServices: "Managed Services",
	}),

	Text: Object.freeze({
		FilterBy: "Filter by:",
		Country: "Country",
		MeetingMode: "Meeting Mode",
		GroupType: "Group Type",
		ClearFilters: "Clear filters",
		InfoNote: "You can select a card or a map marker to see more info.",
		Loading: "Loading...",
		NoResultsToShow: "No results to show",
	})
}

export default enEnums;