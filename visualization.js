
document.addEventListener("DOMContentLoaded", () => {
  d3.json("/countries.json")
    .then(countries => {
      d3.csv("/europe-nato-members.csv")
        .then(members => {
          
          // Define the dimensions of your visualization
          const width = 800
          const height = 600
          
          // Get the visualization container
          const container = d3.select("#viz")

          // Append and configure your svg node
          const svg = container.append("svg")
            .attr("width", width)
            .attr("height", height)

          // Configure a map projection for Europe
          const projection = d3.geoAzimuthalEqualArea()
            .rotate([-10.0, -52.0])
            .translate([width / 2, height / 2])
            .scale(700)
            .precision(.1)

          // Configure a pathGenerator based on your projection
          const pathGenerator = d3.geoPath().projection(projection)

          // Bind the `countries.features` to `paths`
          const shapes = svg.selectAll("path")
            .data(countries.features)
            .enter()
            .append("path")
              .attr("d", d => pathGenerator(d))
              .attr("fill", function(d) {
                const natoMetaData = members.find(member => member.iso3 === d.properties.ADM0_A3)
                return natoMetaData ? "#004990" : "#DDDDDD"
              })

          // Use the `members` object to color member states

        })
    })
})
