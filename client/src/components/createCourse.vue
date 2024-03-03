<template>
  <div class="subject-item">
    <h2 class="section-title">{{ subject.title }}</h2>
    <p class="description">{{ subject.description }}</p>
    <div class="image-container">
      <img v-for="(image, imgIndex) in subject.images" :key="imgIndex" class="subject-image" :src="image" alt="">
    </div>
    <button class="subject-button" @click="navigateToSubjectMenu(subject.link)">Visa mer</button>
  </div>
</template>

<script>
export default {
  props: ['subject'],
  methods: {
    navigateToSubjectMenu(link) {
      if (link) {
        this.$router.push(link);
      }
    }
  }
}
</script>

<style>
.subject-item {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  margin-bottom: 10px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.subject-image {
  max-width: 100%;
  margin-top: 30px;
  margin-right: 100px;
}

.subject-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
</style>
