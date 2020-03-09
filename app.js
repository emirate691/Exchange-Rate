const vm = new Vue({
    el: "#app",
    data() {
        return  { 
             bases: [],
             rate : {},
             date : null

            };
        
        
        
    },

    created() {
        axios
          .get("https://api.exchangeratesapi.io/latest")
          .then(res => {
            this.bases = res.data.rates;
            this.date = res.data.date;
            this.rate = res.data.rate;
             console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
});