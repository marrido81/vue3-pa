<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h4>
      强大而简洁的进销存管理系统
      by
      <a href="https://allto.one/" target="_blank" rel="noopener">Marrido</a>.
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.2rem;
}

h4 {
  font-size: 0.8rem;
}

.greetings h1,
.greetings h4 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h4 {
    text-align: left;
    
  }
}





</style>
