const animal_controller = require('../controllers/controller');

module.exports = function(app){
	app.get('/', animal_controller.all);
	app.get('/animals/edit/:id', animal_controller.edit);
	app.get('/animals/new', animal_controller.fresh);
	app.post('/animals'	, animal_controller.create);
	app.get('/animals/:id', animal_controller.show);
	app.post('/animals/:id', animal_controller.change);
	app.get('/animals/destroy/:id', animal_controller.rid);
}