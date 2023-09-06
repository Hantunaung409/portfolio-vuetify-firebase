<template>
    <a href="#" class="go-top"><v-icon color="black">fas fa-chevron-up</v-icon></a>
  <v-sheet width="80%" class="mx-auto my-16">
    <h1 class="text-center text-black">Login</h1>
     <div class=" text-red text-center" v-if="errorMessage">{{ errorMessage }}</div>
    <v-form fast-fail @submit.prevent="logIn" class=" mt-10" ref="form">
      <v-text-field v-model="userEmail" label="Email" :rules="userEmailRules"></v-text-field>

      <v-text-field v-model="password" :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
        label="Password" hint="At least 6 characters" counter @click:append="show1 = !show1"></v-text-field>

      <v-btn type="submit" class="mt-2 float-right">Submit</v-btn>
      <div class=" ms-5 mt-5"><router-link to="/">Back To Home</router-link></div>
    </v-form>

  </v-sheet>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from 'vue';
import { auth } from '../firebase/index'
import { useRouter } from 'vue-router'
export default {
  name: 'LoginView',
  data: () => ({
    //validations
    userEmailRules: [
      value => {
        if (value?.length > 1) return true

        return 'Email cannot be empty'
      },
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),

  setup() {
    let show1 = ref(false);
    let userEmail = ref("");
    let password = ref("");
    let errorMessage = ref(null);
    const router = useRouter(); 
    let form = ref(null);
        //login 
        let logIn =async () => {
          const { valid } = await form.value.validate();

          if(valid){
            try {
              let userCredential = await signInWithEmailAndPassword(auth, userEmail.value, password.value);

              if(!userCredential){
                throw new Error("The Cridentials do not match!");
              }else{
                router.push({ name: 'admin'});
              }
              
            }catch(err){
              errorMessage.value = err.code
            }            
          }

        }

    return { show1, userEmail, password, form, logIn, errorMessage};
  }
}
</script>
