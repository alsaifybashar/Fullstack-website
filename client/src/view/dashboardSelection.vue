<template>
  <div id="selection-box">
    <h2 class="first-logo">En<span id="second">Math</span></h2>
    <div id="search-university" :class="{ 'error': universityName === '' }">
      <input v-model="universityName" placeholder="Enter University Name">
      <ul v-if="universities.length > 0" class="university-dropdown">
        <li v-for="university in universities" :key="university.name" @click="selectUniversity(university)">
          {{ university.name }}
        </li>
      </ul>
    </div>

    <div id="program-selection" :class="{ 'error': selectedProgram === '' }">
      <select v-model="selectedProgram">
        <option disabled value="">Program</option>
        <option v-for="program in programs" :value="program.programValue" :key="program.programValue">
          {{ program.programName }}
        </option>
      </select>
    </div>

    <div id="course-selection" :class="{ 'error': selectedCourse === '' }">
      <select v-model="selectedCourse" placeholder="Course">
        <option disabled value="">Course</option>
        <option v-for="course in getAvailableCourses" :value="course.courseValue" :key="course.courseValue">
          {{ course.courseName }}
        </option>
      </select>
    </div>
    <div class="afterStart">
      <router-link class="afterStartButton" :to="isFormComplete ? getCoursePath(selectedCourse) : ''">Next</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import { courses } from '@/components/courseData.js';

export default {
  data() {
    return {
      universityName: '',
      universities: [],
      selectedUniversity: null,
      selectedProgram: '',
      selectedCourse: '',
      programs: [
        { programName: 'Civilingenjör i informationsteknologi', programValue: 'IT' },
        { programName: 'Civilingenjör i datateknik', programValue: 'D' },
        { programName: 'Civilingenjör i mjukvaruteknik', programValue: 'U' },
        { programName: 'Civilingenjör i industriell ekonomi', programValue: 'I' },
        { programName: 'Civilingenjör i teknisk fysik', programValue: 'Y' },
      ],
    };
  },
  //Computes
  computed: {
    //Returns available course based on selected program
    getAvailableCourses() {
      return courses[this.selectedProgram] || [];
    },
    //Checks that everthing i filled
    isFormComplete() {
      return (
        this.universityName !== '' &&
        this.selectedProgram !== '' &&
        this.selectedCourse !== ''
      );
    },
  },
  //Looks for changing
  watch: {
    universityName(newVal) {
      if (newVal.trim() !== '') {
        this.sendUniversityName();
      }
    },
  },

  methods: {
    sendUniversityName() {
      const dataToSend = {
        text: this.universityName,
      };

      axios
        .post('http://localhost:3000/uniEndpoint', dataToSend)
        .then(response => {
          console.log(response.data);
          this.getUniversities();
        })
        .catch(error => {
          console.error(error);
        });
    },
    getUniversities() {
      axios
        .get('http://localhost:3000/universities')
        .then(response => {
          this.universities = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    selectUniversity(university) {
      this.universityName = university.name;
      this.selectedUniversity = university;
      this.universities = [];
    },
    //Redirect the user to corrsponding course page "Next"
    getCoursePath(courseValue) {
      const pathMap = {
        TANA23: '/TANA23',
        TATA41: '/TATA41',
        TATA24: '/TATA24',
        TATA91: '/TATA91',
        TAMS42: '/TAMS42',
      };

      return pathMap[courseValue] || '';
    },
  },
  mounted() {
    if (this.universityName.trim() !== '') {
      this.sendUniversityName();
    }
  },
};
</script>

<style>
#selection-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid lightgray;
  margin-top: 100px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 6px white(0, 0, 0, 0.1);
}

#search-university {
  width: 100%;
  margin-top: 30px;
  position: relative;
}

#search-university input {
  flex: 1;
  width: 480px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  transition: border-color 0.3s ease;
}

#search-university .university-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin-top: 5px;
  max-height: 150px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  list-style-type: none;
}

#search-university .university-dropdown li {
  padding: 10px;
  cursor: pointer;
}

#search-university .university-dropdown li:hover {
  background-color: lightgray;
}

#search-university .university-dropdown li:first-child {
  font-weight: bold;
}

#program-selection,
#course-selection {
  width: 100%;
  margin-top: 30px;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: white;
}

.afterStart {
  margin-bottom: 20%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
}

.afterStartButton {
  border: none;
  background: #FF6900;
  padding: 12px 30px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  transition: 0.4s;
  text-decoration: none;
}

.afterStartButton:hover {
  background: #FF6900;
}

.afterStartButton:active {
  transform: scale(0.95);
}

.error {
  border: 2px solid #FF6900;
}
</style>
