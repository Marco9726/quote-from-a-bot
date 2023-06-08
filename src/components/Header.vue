<script>
name: 'Header';
export default {};
</script>

<template>
   <header class="bg-yellow">
      <img src="../assets/cloud-message.png" alt="" />
      <h1 class="happy-font me-4">uote from a</h1>
      <h1 class="electrolize-font m-0">BOT</h1>
   </header>
</template>

<style lang="scss">
header {
   height: 25vh;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      height: 10rem;
   }

   h1 {
      font-size: 5rem;
   }
}

//MEDIA QUERIES
@media screen and (max-width: 991px) {
   header {
      height: 20vh;
      img {
         height: 8rem;
      }

      h1 {
         font-size: 4rem;
      }
   }
}

@media screen and (max-width: 767px) {
   header {
      height: 20vh;
      img {
         height: 6rem;
      }

      h1 {
         font-size: 3rem;
      }
   }
}

@media screen and (max-width: 575px) {
   header {
      height: 15vh;
      img {
         height: 4.5rem;
      }

      h1 {
         font-size: 2.25rem;
      }
   }
}

@media screen and (max-width: 432px) {
   header {
      height: 15vh;
      flex-wrap: wrap;
      img {
         height: 4.5rem;
      }

      h1 {
         margin: 0;
      }

      h1.electrolize-font {
         text-align: center;
         position: relative;
         bottom: 1.5rem;
      }
   }
}
</style>
