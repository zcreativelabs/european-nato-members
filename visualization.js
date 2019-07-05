
document.addEventListener("DOMContentLoaded", () => {
  d3.json("/countries.json")
    .then(countries => {
      d3.csv("/europe-nato-members.csv")
        .then(members => {
          

        })
    })
})
