<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <h2 class="first-logo">En<span id="second">Math</span></h2>
    </div>
    <ul class="sidebar-menu">
      <li>
        <a href="/">Start</a>
      </li>
      <li>
        <a href="/eKurser">eKurser</a>
      </li>
      <hr class="styled-line" />
      <li v-for="item in items" :key="item.text">
        <a :href="item.link">{{ item.text }}</a>
      </li>
      <hr class="styled-line" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebarMenu',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>


<style>
#sidebar {
  width: 250px;
  background-color: #000;
  color: #fff;
  padding-top: 20px;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 30px;
}


.sidebar-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu a {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.sidebar-menu a:hover {
  background-color: brown;
}

#sidebar {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.styled-line {
  border: none;
  height: 2px;
  background: brown;
}
</style>
  