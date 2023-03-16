<template>
<!-- Load font awesome icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The navigation menu -->
<div class="header">
 

<div id="banner">
                        <div id="banner-images">
                            <img src="https://i.postimg.cc/B6fdBmBy/My-project-1-1.jpg" alt=""/>
                            <img src="https://i.postimg.cc/vTj87cGX/download.jpg" alt=""/>
                            <img src="https://i.postimg.cc/0yNF8Cmw/download.jpg" alt=""/>
                            <img src="https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-thumb.jpg" alt=""/>
                            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" alt=""/>
                        </div>
                        <h1 id="headerBanner">αLPHA & ΩMEGA GAMING</h1>
                    </div>
<div class="navbar">
  <a href="@home"><img src="https://img.icons8.com/ios-filled/50/null/home-page.png"/>Home</a>
  <div class="subnav">
    <button class="subnavbtn"><img src="https://img.icons8.com/ios-filled/50/null/question-mark.png"/>More Info<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">Socials</a>
      <a href="#careers">About Us</a>
      <a href="../views/ContactView.vue">Contact Us</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/null/external-games-gaming-kiranshastry-solid-kiranshastry.png"/>Products <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
	<a href="../views/ProductView.vue">PC</a>
     
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn"><img src="https://img.icons8.com/ios-filled/50/null/login-rounded-right.png"/>Login/Register <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="../views/RegisterView.vue">Register</a>
      <a href="../views/LoginView.vue">Login</a>
    </div>
  </div>
  <a href="../views/AdminView.vue"><img src="https://img.icons8.com/ios-filled/50/null/administrator-male--v1.png"/>Admin</a>
  </div>
  </div>


</template>
<script>

export default{
	// eslint-disable-next-line vue/multi-word-component-names
	name:'NavBar'
}
</script>



