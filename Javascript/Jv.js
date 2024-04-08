//Svolgimento

const { createApp } = Vue;

createApp({
  data() {
    return {
      selectedOption: "",
      risp: "",
      contacts: [],
    };
  },
  //metodi
  methods: {
    callRepo() {
      console.log(this.selectedOption);

      if (this.selectedOption == 1) {
        const searchInputValue = 1;

        const data = {
          params: {
            q: searchInputValue,
          },
          headers: {
            Authorization: `Bearer ${config.token}`,
            "X-GitHub-Api-Version": config.apiVersion,
          },
        };

        axios
          .get("https://api.github.com/endpoint", data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Errore durante la richiesta API:", error);
          });
      }
    },
  },
}).mount("#app");
