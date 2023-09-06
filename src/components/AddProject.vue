<template>
    <!-- form fast fail & validation vuetify -->
    <v-sheet width="300" class="mx-auto">
        <div class=" text-red text-center" v-if="errorMessage">{{ errorMessage }}</div>
        <v-form fast-fail @submit.prevent="addProject" class=" mt-16" ref="form">
            <v-file-input label="Upload Image" variant="filled" prepend-icon="fas fa-file" ref="projectImage"></v-file-input>

            <!-- <input type="file" name="" id="" ref="projectImage"> -->
            <v-text-field v-model="title" label="Title" :rules="titleRules"></v-text-field>

            <v-text-field v-model="subTitle" label="Sub-Title" :rules="subTitleRules"></v-text-field>

            <v-text-field v-model="projectText" label="About Project" :rules="projectTextRules"></v-text-field>

            <v-text-field v-model="demoLink" label="Demo Link"></v-text-field>

            <v-text-field v-model="codeLink" label="Code Link" :rules="codeLinkRules"></v-text-field>

            <v-btn type="submit" class="mt-2 float-end">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
import { db, storage } from '../firebase/index'
import { addDoc, collection } from '@firebase/firestore'
import { ref } from 'vue'
import { ref as storageRef, uploadBytes } from "firebase/storage";
export default {
    name: 'AddProject',

    data: () => ({
        //validations
        titleRules: [
            value => {
                if (value?.length > 1) return true

                return 'Title Cannot Be Empty.'
            },
        ],
        subTitleRules: [
            value => {
                if (value?.length > 1) return true

                return 'Sub Title Cannot Be Empty.'
            },
        ],
        projectTextRules: [
            value => {
                if (value?.length > 1) return true

                return 'About the Project must be included.'
            }
        ],
        codeLinkRules: [
            value => {
                if (value?.length > 1) return true

                return 'Its best to add a link for your project source code.'
            }
        ],
    }),

    setup() {
        let title = ref("");
        let subTitle = ref("");
        let projectText = ref("");
        let demoLink = ref("");
        let codeLink = ref("");
        let errorMessage = ref(null);
        let form = ref(null);
        let projectImage = ref(null);

        let addProject = async () => {
            // console.log(projectImage.value.files, projectImage.value.files[0].name);

            const { valid } = await form.value.validate();

            if(valid){
                let projectData = {
                    title: title.value,
                    subTitle: subTitle.value,
                    projectText: projectText.value,
                    demoLink: demoLink.value,
                    codeLink: codeLink.value,
                    imageName: projectImage.value.files[0].name
                }        
                
                try {
                    const docRef = await addDoc(collection(db, "projects"), projectData);

                    if (!docRef) {
                        throw new Error("Opps Something is wrong");
                    }
                    //upload image
                    const fileRef = storageRef(storage, 'project/'+projectImage.value.files[0].name);
                    uploadBytes(fileRef, projectImage.value.files[0]).then(snapshot => {
                        console.log(snapshot);
                    });
                    form.value.reset();
                    form.value.resetValidation();

                } catch (err) {
                    errorMessage = err.code;
                }                
            }



        };

        return { title, subTitle, projectText, demoLink, codeLink, addProject, errorMessage, form, projectImage }
    }
}
</script>

<style lang="scss" scoped></style>