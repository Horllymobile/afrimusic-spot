<template>
  <div class="m-4">
    <div class="row">
      <div class="col-lg-12">
        <div class="container-fluid">
          <h1 class="text-center font-weight-bold">
            Afrimusic-spot gives you instant
            access to millions of african songs – from old favorites to the latest
            hits. Just hit play to stream anything you like.
          </h1>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col-lg-3" v-for="(post, index) in posts" :key="index">
        <div class="card">
          <img class="card-img-top" :src="post.image" alt />
          <div class="card-body">
            <h5 class="card-title text-center font-weight-bold">{{ post.title }}</h5>
            <p class="card-text text-center">{{ post.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from './../../../post';
export default {
    data(){
        return {
            posts:post
        }
    }
};
</script>
