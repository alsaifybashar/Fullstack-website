<template>
  <div id="eKurser">
    <navbar></navbar>
  </div>
    <div class="ekurser-subject-container">
      <div v-for="(courses, program) in courseList" :key="program" class="ekurser-subject-item">
        <h2>{{ program }}</h2>
        <ul>
          <li v-for="course in courses" :key="course.courseValue">{{ course.courseName }}</li>
        </ul>
      </div>
    </div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import { courses } from '@/components/courseData.js';

export default {
  name: 'eKurser',
  components: {
    navbar,
  },
  data() {
    return {
      courseList: courses,
    };
  },
};
</script>

<style>


.router-link-active {
  color: #FF6900;
}

.ekurser-subject-container {
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ekurser-subject-item {
  background-color: #f2f2f2;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
  width: 400px;
  box-sizing: border-box;
}

.subject-item h2 {
  color: #333;
  margin-top: 0;
}

.subject-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subject-item li {
  color: #777;
}
</style>
