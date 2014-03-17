<?php error_reporting(1); ?>
<!DOCTYPE html>
<html lang="en"<?php if ($login) echo ' class="login"'; ?>>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Twitter Bootstrap Admin</title>
    <link rel="stylesheet" href="assets/css/global.css" type="text/css">
</head>
<body>
<?php if (!$login): ?>
<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <a href="dashboard.html" class="brand">Project Name</a>
      <ul class="nav">
        <li<?php if ($active_dashboard) echo ' class="active"'; ?>>
          <a href="dashboard.html">Dashboard</a>
        </li>
        <li<?php if ($active_users) echo ' class="active"'; ?>>
          <a href="list.html">Users</a>
        </li>
        <li>
          <a href="#">Content</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Secondary link</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li>
              <a href="#">Another link</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">System <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li{active_help}>
              <a href="help.html">Help</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="index.html">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
      <form action="" class="navbar-search pull-left">
        <input type="text" placeholder="Search" class="search-query span2">
      </form>
    </div>
  </div>
</div>
<?php endif; ?>
<div class="container">
