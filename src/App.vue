<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --color-primary: #fd507e;
  --color-secundary: #ea4c89;
  --title: #6e6d7a;
  --text-input: #fefefe;
  --text: #0d0c22;
  --shape: #ffffff;
  --color-danger: #f8d7da;
  --green: #33cc95;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

body {
  background: #F4F3EF;
  -webkit-font-smoothing: antialiased;
}

body, input, textArea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: bold;
}

#nav {
  padding: 30px;
}

#nav a {
  color: var(--shape);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
