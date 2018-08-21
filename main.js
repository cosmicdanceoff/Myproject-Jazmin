function init() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)
   
        var app4 = new Vue({
          el: '#app-4',
          data: {
            list: tabletopData,
          }
        })
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)