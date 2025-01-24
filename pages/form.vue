<template>
  <div>
    <span>Form Example</span>
    <FormInput v-model="form.name" label="Name" />
    <FormInput v-model="form.nationality" label="Nationality" />
    <FormInput v-model.number="form.age" label="Age" type="number" />
    <FormInput v-model="form.password" label="Password" type="password" />
    <Button
      class="enabled:bg-primary text-gray-50 enabled:hover:brightness-125"
      @click="console.log(form)"
      >Submit</Button
    >
  </div>
</template>

<script lang="ts" setup>
interface formInterfaceExample {
  name: string;
  nationality: string;
  age: number;
  password: string;
}

const form = ref<formInterfaceExample>({
  name: "",
  nationality: "",
  age: 0,
  password: "",
});
</script>

<style></style>
