//* login/
module.exports.index = (req, res) => {
	const DATA = {
		title: "Trang chủ",
	};
	res.render("index", DATA);
};
