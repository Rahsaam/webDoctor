<template>
  <div class="bg-blue-500 w-full h-[90vh]">
    <a-config-provider :locale="faIR" direction="rtl">
      <NuxtPage />
    </a-config-provider>
  </div>
</template>

<script setup>
import faIR from "ant-design-vue/es/locale/fa_IR";
</script>

<style></style>
