const router = require('express').Router();


// homepage route
router.get('/', async (req, res) => {
    try {
       res.render('homepage', {});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

 
// signup route
router.get('/register', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  //if (req.session.loggedIn) {
    //res.redirect('/');
    //return;
  //}
  // Otherwise, render the 'login' template
  res.render('signup');
});


// login route
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    //if (req.session.loggedIn) {
      //res.redirect('/');
      //return;
    //}
    // Otherwise, render the 'login' template
    res.render('login');
  });





  module.exports = router;
