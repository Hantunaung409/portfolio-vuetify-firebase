<template>
      <section class="" id="contact">
        <div class="bg-black">
          <v-row class="mx-8">
            <v-col cols="12" sm="4">
              <div class="child">
                <h1>Contact Info.</h1>
                <v-btn size="40px" prepend-icon="fas fa-location-dot" class="mt-10" variant="outlined"></v-btn><br>
                <span class="text-caption">Waing Maw, Kachin State</span><br>
                <v-btn size="40px" prepend-icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br>
                <span class="text-caption">09260697933</span><br>
                <span class="text-caption">09773546239</span><br>
                <v-btn size="40px" prepend-icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br>
                <span class="text-caption">hanhtunaung777@gmail.com</span><br>
                <span class="text-caption">hanhtunaung409@gmail.com</span><br>
              </div>
            </v-col>
            <v-col cols="12" sm="8">
              <h1 class="mt-8">Send Me Your Message</h1>
              <v-divider></v-divider>
              <span class="text-caption">
                I am free and ready to start as a long-term employee whenever you need me. Regarding the hours, I am flexible and willing to work whenever the team needs me the most.
                Or you can get in touch with me just to say Hi ¯\_(ツ)_/¯
              </span>
              <v-form @submit.prevent="sendMessage" ref="form">
                <v-row class="mt-8">
                  <v-col cols="12" sm="6">
                    <v-text-field label="Name" persistent-hint variant="outlined" v-model="name" :rules="nameRules"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Phone No" persistent-hint variant="outlined" v-model="phone" :rules="phoneRules"></v-text-field>
                  </v-col>
                </v-row>            
              
                <v-textarea label="Message" persistent-hint variant="outlined" v-model="message" :rules="messageRules"></v-textarea>
                <v-btn type="submit" color="yellow" class="mt-2 float-right">Submit</v-btn>              
              </v-form>

            </v-col>
          </v-row>
        </div>
      </section>
</template>

<script>
import { db } from '@/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { ref } from 'vue';

export default {
    name: 'ContactSection',
    data() {
      return {
        nameRules: [
          value => {
            if(value?.length > 1) return true;

            return 'Your name is Empty!';
          }
        ],
        phoneRules: [
          value => {
            if(value?.length > 1) return true;

            return 'Your phone is Empty!';
          }
        ],
        messageRules: [
          value => {
            if(value?.length > 1) return true;

            return 'Message is Empty!';
          }
        ]
      }
    },
    setup () {
        let form = ref(null);
        let name = ref('');
        let phone = ref('');
        let message = ref('');

        let sendMessage = async () => {
          const { valid} = await form.value.validate();

          if(valid){
            let data = {
              name : name.value,
              phone : phone.value,
              message : message.value
            };      
            try{
              const docRef = await addDoc(collection(db, 'messages'), data);

              if(!docRef){
                throw new Error('Opps! Something went wrong.');
              }

              form.value.reset();
              form.value.resetValidation();
            }catch (err) {
              console.log(err);
            }                  
          }
        }

        return {form, name, phone, message, sendMessage}
    }
}
</script>

<style lang="scss" scoped>

</style>