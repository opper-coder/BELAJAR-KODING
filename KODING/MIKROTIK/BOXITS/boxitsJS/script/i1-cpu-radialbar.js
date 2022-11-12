var options = {
  chart: {
      height: 350,
      type: 'radialBar',
      width: 200,
      height: 200,
  },
  series: [85],
  labels: ['CPU'],
}
var cpu = new ApexCharts(document.querySelector("#cpu"), options);
cpu.render();
// ----------------------------------------------------------------------------
var options = {
  chart: {
      height: 350,
      type: 'radialBar',
      width: 200,
      height: 200,
  },
  series: [45],
  labels: ['Memory'],
}
var mem = new ApexCharts(document.querySelector("#mem"), options);
mem.render();
// ----------------------------------------------------------------------------
var options = {
  chart: {
      height: 350,
      type: 'radialBar',
      width: 200,
      height: 200,
  },
  series: [70],
  labels: ['Disc Usage'],
}
var disc = new ApexCharts(document.querySelector("#disc"), options);
disc.render();
// ----------------------------------------------------------------------------




// finance
          var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 200,
          type: 'area',
          zoom: {
            enabled: false
          }
        },

fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },

        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
          xaxis: {
            lines: {
              show: false,
            }
          },
          yaxis: {
            lines: {
              show: false,
            }
          },
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }
        };

        var finance = new ApexCharts(document.querySelector("#finance"), options);
        finance.render();
      
      
    