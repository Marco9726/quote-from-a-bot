<script>
name: 'Main';
import { store } from '../store';
export default {
   data() {
      return {
         store,
         // elementi del DOM
         loader: null,
         modal: null,
         // parametri richiesta API
         ENDPOINT: 'https://api.openai.com/v1/chat/completions',
         APY_KEY: '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',
         action: 'di qualcosa in massimo 200 caratteri come se fossi ',
         temperature: 0.2,
         MODEL: 'gpt-3.5-turbo',
         // info personaggio
         charName: '',
         charMessage: '',
      };
   },
   methods: {
      getImagePath(charName) {
         return new URL(
            `../assets/characters-images/${charName}.png`,
            import.meta.url
         ).href;
      },
      async playCharacter(charName) {
         // 1) mostro il loader
         this.loader.classList.remove('d-none');
         // 2) recupero la risposta
         const response = await fetch(this.ENDPOINT, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json',
               Authorization: `Bearer ${this.APY_KEY}`,
            },
            body: JSON.stringify({
               model: this.MODEL,
               messages: [
                  {
                     role: 'user',
                     content: this.action + charName,
                  },
               ],
               temperature: this.temperature,
            }),
         });
         // interpetro la risposta in JSON
         const data = await response.json();
         // valorizzo charMessage
         this.charMessage = data.choices[0].message.content;
         //valorizzo charName
         this.charName = charName;
         console.log(this.charMessage);
         // 3) nascondo il loader
         this.loader.classList.add('d-none');
         // 4) mostro la modale
         this.modal.classList.remove('d-none');
      },
      hideModal() {
         this.modal.classList.add('d-none');
      },
   },
   mounted() {
      // costanti del DOM
      this.loader = document.querySelector('.layover-loading');
      this.modal = document.querySelector('.layover-modal');
   },
};
</script>
<template>
   <main class="py-4">
      <!--loading  layover-->
      <div class="layover layover-loading d-none">
         <!-- loader gif -->
         <img src="../assets/loader.gif" alt="" />
      </div>
      <!-- modal layover -->
      <div class="layover layover-modal d-none">
         <!-- modal -->
         <div class="my-modal bg-white p-4 mt-4">
            <div class="modal-close-button" @click="hideModal">
               <img src="../assets/close.svg" alt="" />
            </div>
            <div class="model-content">
               <h2>{{ charName }}</h2>
               <p>
                  {{ charMessage }}
               </p>
               <code>
                  Character:{{ charName }}, temperature: {{ temperature }}
               </code>
            </div>
         </div>
      </div>
      <div
         class="container flex-container d-flex flex-column align-items-center gap-4"
      >
         <!-- title -->
         <h2 class="choose-char text-center">CHOOSE YOUR CHARACTER</h2>
         <!-- character list -->
         <div
            class="character-list d-flex flex-wrap justify-content-center gap-4"
         >
            <!-- v-for characters -->
            <div
               class="character-box"
               v-for="(item, index) in store.characters"
               :key="index"
               :data-character="item.characterName"
               @click="playCharacter(item.characterName)"
            >
               <img
                  :src="getImagePath(item.nameKebabCase)"
                  :alt="item.characterName"
               />
            </div>
         </div>
      </div>
   </main>
</template>
<style lang="scss">
main {
   min-height: 75vh;
   background-color: black;

   .layover {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 3;
      &.layover-loading {
         display: flex;
         justify-content: center;
         align-items: center;
         img {
            width: 15%;
         }
      }

      .my-modal {
         width: 50%;
         border: 2px solid #1212b2;
         color: #1212b2;
         position: relative;
         margin: 0 auto;

         .modal-close-button {
            background-color: #ffaafb;
            border-radius: 100%;
            height: 2rem;
            width: 2rem;
            display: flex;
            border: 2px solid #1212b2;
            cursor: pointer;
            padding: 0.3rem;
            position: absolute;
            top: 15px;
            right: 15px;
         }
      }
   }

   h2.choose-char {
      font-family: MKFont;
      font-size: 3rem;
      color: rgb(239, 221, 116);
      letter-spacing: 2rem;
      max-width: 50%;
   }

   .character-list {
      max-width: 75%;

      .character-box {
         border: 2px solid white;
         background-color: rgb(83, 187, 228);
         cursor: pointer;
         img {
            width: 100px;
            height: 100px;
         }
      }
   }
}

//MEDIA QUERIES
@media screen and (max-width: 991px) {
   main {
      h2.choose-char {
         max-width: 75%;
      }
   }
}

@media screen and (max-width: 767px) {
   main {
      h2.choose-char {
         font-size: 2.25rem;
         letter-spacing: 1.5rem;
      }
   }
}

@media screen and (max-width: 476px) {
   main {
      h2.choose-char {
         font-size: 1.5rem;
         letter-spacing: 1rem;
      }
   }
}
</style>
