let express = require('express')

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>User's Application!</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Our App</h1>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        <ul>
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text"><p>Admin</p></span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Sign In</button>
              <button class="delete-me btn btn-danger btn-sm">Sign Up</button>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text"><p>Doctor</p></span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Sign In</button>
              <button class="delete-me btn btn-danger btn-sm">Sign Up</button>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text"><p>Patient</p></span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Sign In</button>
              <button class="delete-me btn btn-danger btn-sm">Sign Up</button>
            </div>
          </li>
        </ul>
        
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="/browser.js"></script>
      </body>
    </html>
    `)
    console.log("Success!")
})


app.post('/sign-in', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Sign-In-Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
    
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
        
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    
        <link rel="stylesheet" type="text/css" href="css/util.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
    
    </head>
    <body>
        
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG">
                    </div>
    
                    <form class="login100-form validate-form">
                        <span class="login100-form-title">
                            Member Login
                        </span>
    
                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input class="input100" type="text" name="email" placeholder="Email">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
    
                        <div class="wrap-input100 validate-input" data-validate = "Password is required">
                            <input class="input100" type="password" name="pass" placeholder="Password">
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">
                                Login
                            </button>
                        </div>
    
                        <div class="text-center p-t-12">
                            <span class="txt1">
                                Forgot
                            </span>
                            <a class="txt2" href="#">
                                Username / Password?
                            </a>
                        </div>
    
                        <div class="text-center p-t-136">
                            <a class="txt2" href="#">
                                Create your Account
                                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
    
        <script src="vendor/bootstrap/js/popper.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    
        <script src="vendor/select2/select2.min.js"></script>
    
        <script src="vendor/tilt/tilt.jquery.min.js"></script>
        <script >
            $('.js-tilt').tilt({
                scale: 1.1
            })
        </script>
    
        <script src="js/main.js"></script>
    
    </body>
    </html>
    `)
})

// app.post('/sign-up', function() {
//     res(`

//     `)
// })

app.listen(3000)