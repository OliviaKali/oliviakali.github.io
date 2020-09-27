// // anychart.onDocumentReady(function() {

// //     // set the data
// //     var data = {
// //         header: ["Name", "Percentage"],
// //       rows: [
// //         ["HTML", 90],
// //         ["CSS", 90],
// //         ["JavaScript", 80],
// //         ["", 70],
// //         ["Tian Shan (1976)", 90],
// //         ["Armenia (1988)", 70],
// //         ["Iran (1990)", 90]
// //     ]};

// //     // create the chart
// //    var chart = anychart.bar();

// //     // add data
// //     chart.data(data);

// //     // set the chart title
// //     //chart.title("Skills");


// //   // draw
// //   chart.container("percentage");
// //   chart.draw();
// // });

// anychart.onDocumentReady(function () {
//     //create data set on our data
//     var data = [
//         ['HTML', 95],
//         ['CSS', 90],
//         ['JavaScript', 80],
//         ['D', ],
//         ['E', 8],
//         ['F', 4],
//         ['G', 5],

//     ];

//     //create area chart
//     var chart = anychart.bar();
// 		var series = chart.bar(data);
//             series.labels(true);
//             series.labels().fontColor("#000");
//             series.labels().fontSize("12px");
//             series.labels().fontWeight(800);
//             series.labels().format("{%value}%");
//   labels = chart.getSeries(0).labels();
//             labels.position("center").anchor("center");
  
//   //chart.barGroupsPadding(0);
//   chart.barsPadding(0);
            
//     //turn on chart animation
//     chart.animation(true);

//     //set container id for the chart
//     chart.container('percentage');
    
//     //initiate chart drawing
//     chart.draw();
// });