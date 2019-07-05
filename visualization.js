
document.addEventListener("DOMContentLoaded", () => {
  d3.json("/countries.json")
    .then(countries => {
      d3.csv("/europe-nato-members.csv")
        .then(members => {
          
          // Define the dimensions of your visualization

          // Get the visualization container

          // Append and configure your svg node

          // Configure a map projection for Europe

          // Configure a pathGenerator based on your projection

          // Bind the `countries.features` to `paths`

          // Use the `members` object to color member states

        })
    })
})
