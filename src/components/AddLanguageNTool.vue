<template>
    <v-sheet width="300" class="mx-auto">
        <div class=" text-red text-center" v-if="errorMessage">{{ errorMessage }}</div>
        <v-form fast-fail @submit.prevent="addLanguageAndTool" class=" mt-16" ref="form">

            <v-text-field v-model="name" label="Name" :rules="nameRules"></v-text-field>

            <v-text-field v-model="marks" label="Marks" :rules="marksRules"></v-text-field>

            <v-text-field v-model="color" label="Color of the tech" :rules="colorRules"></v-text-field>

            <v-text-field v-model="svgLink" label="SVG Link for logo" :rules="svgLinkRules"></v-text-field>

            <v-btn type="submit" class="mt-2 float-end">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
import { db } from '@/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { ref } from 'vue';

export default {
    name: 'AddLanguageNTool',
    data() {
        return {
            nameRules: [
                value => {
                    if(value?.length > 1 ) return true;

                    return "Name of tech cannot be empty";
                }
            ],
            marksRules: [
                value => {
                    if(value?.length > 1 ) return true;

                    return "Marks of tech cannot be empty";
                }
            ],
            colorRules: [
                value => {
                    if(value?.length > 1 ) return true;

                    return "Color of tech cannot be empty";
                }
            ],
            svgLinkRules: [
                value => {
                    if(value?.length > 1 ) return true;

                    return "SVG link of tech's logo cannot be empty";
                }
            ],
        }
    },
    setup () {
        let name = ref('');
        let marks = ref(''); //should be integer(number in firebase)
        let color = ref('');
        let svgLink = ref('');
        let errorMessage = ref(null);
        let form = ref(null);

        let addLanguageAndTool = async () => {
            const { valid } = await form.value.validate();

            if(valid){
                let data = {
                    name : name.value,
                    marks : marks.value,
                    color : color.value,
                    svgLink : svgLink.value
                }   
                
                try{
                    const docRef = await addDoc(collection(db, 'skills'), data);

                    if(!docRef){
                        throw new Error("Opps!Something went wrong.");
                    }

                    form.value.reset();
                    form.value.resetValidation();

                }catch (err) {
                errorMessage.value = err.code;
                }                
            }
        }

        return {name, marks, color, svgLink, errorMessage,form, addLanguageAndTool}
    }
}
</script>

<style lang="scss" scoped>

</style>