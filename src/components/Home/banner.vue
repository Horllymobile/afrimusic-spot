<template>
    <div class="banner-bkg" :style="{background:`url(${banner.bck})`}">
        <div class="container">
            <h3 class="text-center text-white banner-text">{{ banner.text}}</h3>
        </div> 
    </div>
</template>

<script>
import banner from './../../assets/Images/banners/banner.jpg';

export default {

    data(){
        return {
            banner:{
                bck:banner,
                text:"African music spot this is available for Africans"
            }
        }
    }
    
}
</script>