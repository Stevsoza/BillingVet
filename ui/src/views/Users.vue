<script setup>
    import { ref, onMounted } from "vue";
    // const apiUrl = import.meta.env.VITE_API_URL

    const editDialog = ref(false)
    const user = ref(null)
    const items = ref(null);
    const handleEdit = (index, row) => {
        user.value = {...row}
    };
    const handleDelete = (index, row) => {
        console.log(index, row);
    };
    const handleAdd = () => {
        user.value = {}

    };
    async function updateUser(){
        const url = `/api/user/${user.value.id}`
        const userDetails = {...user.value}
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userDetails)
        }

        try{
            const response = await fetch(url, options)
            if(!response.ok){
                throw new Error("Response was not ok")
            }else{
                getData()
                editDialog.value = false
            }
            const data = await response.json()
        } catch (err){
            console.log("Problem with: ", err)
        }
    }

    async function getData() {
        try {
            const response = await fetch("/api/users");
            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            const data = await response.json();
            items.value = data;
        } catch (err) {
            console.error("Problem with: ", err);
        }
    }

    async function newUser(){
        const url = `/api/user/newUser`
        const userDetails = {...user.value}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userDetails)
        }

        try{
            const response = await fetch(url, options)
            if(!response.ok){
                throw new Error("Response was not ok")
            }else{
                getData()
                editDialog.value = false
            }
            const data = await response.json()
        } catch (err){
            console.log("Problem with: ", err)
        }
    }
    onMounted(getData);
</script>

<template>

    <!-- dialog  -->
    <el-dialog v-model="editDialog" title="Edit user" width="500">
        <el-form :model="user" label-width="auto" style="max-width: 600px">
            <el-form-item label="Nombre" name="firstName">
                <el-input v-model="user.firstName"/>
            </el-form-item>
            <el-form-item label="Apellido" name="lastName">
                <el-input v-model="user.lastName"/>
            </el-form-item>
            <el-form-item label="Edad" name="age">
                <el-input-number v-model="user.age" min="0"/>
            </el-form-item>
            <el-form-item>
                <el-button v-if="user.id" type="primary" @click="updateUser">save</el-button>
                <el-button v-else type="primary" @click="newUser">save</el-button>
                <el-button  @click="editDialog = false">Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
    <!-- dialog -->

    <main class="main-users">
        <el-row :gutter="5">
            <el-col :xl="6" :md="3"></el-col>
            <el-col :xl="12" :md="18">
                <el-table :data="items" border style="width: 100%" :fit="true">
                    <el-table-column prop="firstName" label="Nombre" width="180" />
                    <el-table-column prop="lastName" label="Apellido" width="180" />
                    <el-table-column prop="age" label="Edad" />
                    <el-table-column align="right">
                        <template #header> actions </template>
                        <template #default="scope">
                            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
                            <el-button size="small"
                                @click="editDialog = true; handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button size="small" type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :xl="6" :md="3"></el-col>
        </el-row>
        <el-row style="display: flex; place-content: center; margin-top: 1rem;">
            <el-button @click="editDialog= true;handleAdd()">Add new</el-button>
        </el-row>
    </main>
</template>
<style lang="scss">
    a {
        color: inherit;
        text-decoration: none;
    }

    .main-users {
        flex-direction: column;
        margin: 0;
        padding: 1rem;
    }

</style>
