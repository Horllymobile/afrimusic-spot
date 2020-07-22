<template>
  <div class="banner-bkg" :style="{background:`url(${banner.bck})`}">
    <div class="container">
      <h1 class="text-center text-white banner-text">{{ banner.text}}</h1>
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="row icons-top">
            <span class="icon-box-banner text-center">
              <a href="#" class="icon">
                <i class="fa fa-instagram m-3 text-dark" aria-hidden="true"></i>
              </a>
            </span>
            <span class="icon-box-banner text-center">
              <a href="#" class="icon">
                <i class="fa fa-facebook m-3 text-dark" aria-hidden="true"></i>
              </a>
            </span>
            <span class="icon-box-banner text-center">
              <a href="#" class="icon">
                <i class="fa fa-twitter m-3 text-dark" aria-hidden="true"></i>
              </a>
            </span>
            <span class="icon-box-banner text-center">
              <a href="#" class="icon">
                <i class="fa fa-whatsapp m-3 text-dark" aria-hidden="true"></i>
              </a>
            </span>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./../../assets/Images/banners/banner.jpg";

export default {
  data() {
    return {
      banner: {
        bck: banner,
        text: "African music spot this is available for Africans",
      },
    };
  },
};
</script>