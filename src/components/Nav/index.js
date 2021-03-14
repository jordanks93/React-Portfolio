import React from "react";

function Nav() {

  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary text-white">
    <span class="navbar-brand mb-1 h1">Jordan Stuckman</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link text-white" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  );
}

export default Nav;