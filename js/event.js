if (messageColor == undefined) {
	var messageColor = true;
}
if (productSummary == undefined) {
	var productSummary = true;
}
if (customerSummary == undefined) {
	var customerSummary = true;
}
if (duration == undefined) {
	var duration = true;
}
if (durationFooter == undefined) {
	var durationFooter = true;
}
if (unclosedFilter == undefined) {
	var unclosedFilter = true;
}

chrome.storage.sync.set({
	"messageColor": messageColor,
	"productSummary": productSummary,
	"customerSummary": customerSummary,
	"duration": duration,
	"durationFooter": durationFooter,
	"unclosedFilter": unclosedFilter
});	