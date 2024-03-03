<template>
  <div id="HomePage">
    <div class="container">
      <navbar></navbar>

      <div class="page">
        <div class="left-side">
          <h1 class="left-side-text">Förstå <u>Envariabelanalys</u> som aldrig för</h1>
        </div>
        <div class="right-side">
          <h1>Hello this is right-sideas</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "HomePage",
  components: {
    navbar,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
#HomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  /* Enable vertical scrollbar */
}

.additional-content {
  padding: 20px;
  color: black;
  text-align: justify;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  /*background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2)),
    url("@/assets/linje.svg");*/
  z-index: 1;
  background-size: cover;
  background-position: center;
}

/* The design of spliting the page into left and riggt side */
.page {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  /* Divide the page into two equal columns */
  grid-gap: 0px;
  /* Add gap between the columns */
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 5%;
  height: 500px;
}

.left-side,
.right-side {
  height: 600px;
  padding: 40;
  /* Add padding to the sides for spacing */
  border: 1px solid #ccc;
  /* Add a border to visually separate the sides */
}


/* Design for the text */
.left-side-text {

  font-size: 50px;
}
</style>
