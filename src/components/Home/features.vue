<template>
  <main class="m-4">
    <section class="row">
      <article class="col-lg-12">
        <header class="container-fluid">
          <h1 class="text-center font-weight-bold">
            Afrimusic-spot gives you instant
            access to millions of african songs – from old favorites to the latest
            hits. Just hit play to stream anything you like.
          </h1>
        </header>
      </article>
    </section>
    <section class="row" >
      <div class="col-lg-3" v-for="(post, index) in posts" :key="index">
        <div class="card">
          <figure><img class="img-responsive card-img-top" :src="post.image" /></figure>
          <div class="card-body">
            <header><h2 class="card-title text-on-card-top text-center font-weight-bold">{{ post.title }}</h2></header>
            <!-- <p class="card-text text-on-card-text text-center">{{ post.text }}</p> -->
          </div>
        </div>
      </div>
    </section>
  </main>
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
