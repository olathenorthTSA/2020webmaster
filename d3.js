
function create_svg(tag) {
    var svg = d3.select(tag).select("svg");
    return svg;
}

function add_title(svgobj, name, color) {
    svgobj.append("text")
        .attr("transform", "translate(60,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")
        .style('fill', color)
        .text(name)
}

function add_bar_graph(svgobj, filename, xlabel, ylabel) {
    var margin = 150,
        width = svg_a.attr("width") - margin,
        height = svg_a.attr("height") - margin,
        xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svgobj.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv(filename, function (error, data) {
        if (error) {
            throw error;
        }

        xScale.domain(data.map(function (d) { return d.year; }));
        yScale.domain([0, d3.max(data, function (d) { return d.value; })]);

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))
            .append("text")
            .attr("y", height - 170)
            .attr("x", width - 140)
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .text(xlabel);

        g.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function (d) {
                return d;
            })
                .ticks(10))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "-5.1em")
            .attr("x", height - 280)
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .text(ylabel);

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            // .style("fill", "blue")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d.year); })
            .attr("y", function (d) { return yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) { return height - yScale(d.value); });
    });
}

var svg_a = create_svg("#a"),
    svg_b = create_svg("#b"),
    svg_c = create_svg("#c")

add_title(svg_a, "Fuel Cost", "red");
add_title(svg_b, "CO2 Emissions", "purple");
add_title(svg_c, "Maintenance Cost", "green");

add_bar_graph(svg_a, "XYZ_a.csv", "EV vs. Combustion", "Dollars per 100 gal");
add_bar_graph(svg_b, "XYZ_b.csv", "EV vs. Combustion", "Grams");
add_bar_graph(svg_c, "XYZ_c.csv", "EV vs. Combustion", "Cost");
