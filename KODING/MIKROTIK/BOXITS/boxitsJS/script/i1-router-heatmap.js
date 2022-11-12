
// ----------------------------------------------------------------------------
var options = {
	chart: {
    type: 'heatmap'
  },
  series: [
    {
      name: "Seri 1",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      }]
    },
    {
      name: "Seri 2",
      data: [{
        x: 'W1',
        y: 43
      }, {
        x: 'W2',
        y: 43
      }, {
        x: 'W3',
        y: 43
      }, {
        x: 'W4',
        y: 43
      }]
    }
  ]
}
// ----------------------------------------------------------------------------
var chart = new ApexCharts(document.querySelector("#router"), options);
chart.render();