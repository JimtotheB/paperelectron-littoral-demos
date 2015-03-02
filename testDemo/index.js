module.exports = function(express){
  var router = express.Router()
  var static = express.static
  var app = express()
  app.use(static(__dirname + '/public'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade')

  router.get('/', function(req, res){
    res.render('index');
  });

  app.use('/', router)
  return {
    name: 'Demo loader',
    teaserImage: null,
    description: 'This is test of the very self same application you are viewing this on.',
    basePath: '/littoral-inception',
    app: app
  }
};
