const Animal = require('../models/animal');

module.exports = {
	all: function (req, res) {
		Animal.find({})
			.then((animals) => {
				console.log(animals)
				res.render('index', { all_animals: animals })
			})
			.catch((err) => {
				res.redirect('/')
			});
	},
	fresh: function (req, res) {
		res.render('new')
	},
	create: function (req, res) {
		var animal = new Animal({ name: req.body.name, color: req.body.color, pack_size: req.body.pack_size });
		animal.save()
			.then(() => {
				res.redirect('/')
			})
			.catch((err) => {
				res.redirect('/animals/new')
			});
	},
	edit: function (req, res) {
		var animal = Animal.findById(req.params.id)
			.then((animal) => {
				res.render('edit', { animal })
			})
			.catch((err) => {
				res.redirect('/')
			});
	},
	change: function (req, res) {
		var animal = Animal.update({ _id: req.params.id }, req.body)
			.then((animal) => {
				res.redirect('/animals/user.id')
			})
			.catch((err) => {
				res.redirect('/')
			});
	},
	show: function (req, res) {
		Animal.findById(req.params.id)
			.then((animal) => {
				res.render('show', { animal })
			})
			.catch((err) => {
				res.redirect('/')
			});
	},
	rid: function (req, res) {
		Animal.remove({ _id: req.params.id })
			.then(() => {
				res.redirect('/')
			})
			.catch((err) => {
				res.redirect('/')
			});
	},
}