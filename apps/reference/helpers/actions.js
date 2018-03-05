const { Document } = require("adf-builder");

const app_name = process.env.APP_NAME || "Stride Reference App";

module.exports.actionCard = () => {
	let doc = new Document();

	let card = doc
		.applicationCard("Action Cards")
		.description("See the triple dot ( ellipsis) on this card for actions.");

	//Call a service points to a target URL /action/reference-service
	// pass parameters here to that route.
	card
		.action()
		.title("Call Service")
		.target({ key: "reference-action-callService" })
		.parameters({ returnError: false, then: "done" });

	card
		.action()
		.title("Open Dialog")
		.target({ key: "reference-action-openDialog" });

	//Call service, then open sidebar

	card
		.action()
		.title("Open SideBar")
		.target({ key: "reference-action-openSidebar" });

	card.context(`${app_name}: Action Cards Example`).icon({
		url: "https://image.ibb.co/fPPAB5/Stride_White_On_Blue.png",
		label: "Stride"
	});

	return doc.toJSON();
};

module.exports.updateCard = () => {
	let doc = new Document();

	let card = doc
		.applicationCard("Incident #4253")
		.link("https://www.atlassian.com")
		.description("Something is broken");
	card
		.action()
		.title("Ack")
		.target({ key: "reference-action-callService-updateMessage" })
		.parameters({ incidentAction: "ack" });
	card
		.action()
		.title("Resolve")
		.target({ key: "reference-action-callService-updateMessage" })
		.parameters({ incidentAction: "resolve" });
	card.context("DevOps / Incidents").icon({
		url: "https://image.ibb.co/fPPAB5/Stride_White_On_Blue.png",
		label: "Stride"
	});

	return doc.toJSON();
};

