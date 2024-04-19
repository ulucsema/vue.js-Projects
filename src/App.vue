<template>
<div id="app">
<main>
<nav class="navbar navbar-light" style="background-color: #1f6f78; font-family: Georgia, serif; text-align: center;">
<router-link to="/" id="title" class="navbar-brand" style="font-family: fangsong;">SEMA ENSTRUMAN</router-link>
<router-link to="/my-basket" type="button" class="btn btn-info" style="display: block;">Sepetim</router-link>
</nav>
</main>
 <router-view :key="$route.fullPath" />

</div>
<footer id="footer" class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2024 Company, Inc</p>
  </footer>
</template>


<script>



</script>

<style> 
#title {
    color: #e0ffcd;
    font-family: verdana;
    font-size: 25px;

}

#footer{
   bottom:0;
   width:100%;
    font-family: fangsong;
    background-color: #1f6f78;
    padding: 1em;
    color: white;
    clear: left;
    text-align: center; 
    
}
.popup {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #93e4c1;
  padding: 30px;
  border: 10px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.popup span {
  position: fixed;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
