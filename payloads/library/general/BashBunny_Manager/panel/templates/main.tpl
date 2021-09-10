
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Dashboard Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/jquery.dataTables.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/css/dashboard.css" rel="stylesheet">
  </head>

  <body>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Bashbunny Manager</a>
      <font color="white">Detected OS: <strong><script>document.write(navigator.platform)</script></strong></font>
      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" onclick="document.getElementById('shutdown_form').submit()"><span data-feather="power"></span> Shutdown</a>
	  <form action="/shutdown" method="POST" id="shutdown_form">
	    <input type="hidden" name="a" value="s">
	  </form>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="/index">
                  <span data-feather="cpu"></span>
                  Payloads
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/languages">
                  <span data-feather="flag"></span>
                  Languages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/users">
                  <span data-feather="users"></span>
                  Users
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/logout">
                  <span data-feather="log-out"></span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">{{ title }}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              {{ buttons }}
            </div>
          </div>

          {{ content }}
        </main>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/jquery-slim.min.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.dataTables.min.js"></script>

    <!-- Icons -->
    <script src="/js/feather.min.js"></script>
    <script>
      feather.replace()
    </script>

    <!-- Additional JS -->
    <script>{{ javascript }}</script>
  </body>
</html>
