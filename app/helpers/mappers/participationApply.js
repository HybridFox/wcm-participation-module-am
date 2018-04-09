"use strict";

const R = require("ramda");

module.exports = (body, participationId) => {
	const pathOrFromBody = (fallback, path) => R.pathOr(fallback, path, body);

	return {
		data: {
			participation: participationId,
			email: pathOrFromBody("", ["email"]),
			phone: pathOrFromBody("", ["tel"]),
			optIns: {
				reminder: pathOrFromBody(false, ["reminderOptIn"]),
				cancel: pathOrFromBody(false, ["cancelOptIn"]),
			},
		},
		meta: {},
	};
};