export const plotMatrix = () => {

  // row A

  var traceA1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x1',
    yaxis: 'y1',    
    type: 'histogram',
    marker: { color: 'pink' },
  };
  
  var traceA2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  var traceA3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    marker: { color: 'lightblue' },
  };

  var traceA4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  // row B
  
  var traceB1 = {
    x: [300, 400, 500],
    y: [600, 700, 800],
    xaxis: 'x5',
    yaxis: 'y5',
    type: 'scatter',
    marker: { color: 'plum' },
  };
  
  var traceB2 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x6',
    yaxis: 'y6',
    type: 'histogram',
    marker: { color: 'lightblue' },
  };

  var traceB3 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x7',
    yaxis: 'y7',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  var traceB4 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x8',
    yaxis: 'y8',
    type: 'scatter',
    marker: { color: 'pink' },
  };

  // row C

  var traceC1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x9',
    yaxis: 'y9',    
    type: 'scatter',
    marker: { color: 'lightblue' },
  };
  
  var traceC2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x10',
    yaxis: 'y10',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };

  var traceC3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x11',
    yaxis: 'y11',
    type: 'histogram',
    marker: { color: 'pink' },
  };

  var traceC4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x12',
    yaxis: 'y12',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  // row D

  var traceD1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x13',
    yaxis: 'y13',    
    type: 'scatter',
    marker: { color: 'lightgray' },
  };
  
  var traceD2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x14',
    yaxis: 'y14',
    type: 'scatter',
    marker: { color: 'pink' },
  };

  var traceD3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x15',
    yaxis: 'y15',
    type: 'scatter',
    marker: { color: 'plum' },
  };

  var traceD4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x16',
    yaxis: 'y16',
    type: 'histogram',
    marker: { color: 'lightblue' },
  };

  // variables
  
  var data = [
    traceA1, traceA2, traceA3, traceA4,
    traceB1, traceB2, traceB3, traceB4,
    traceC1, traceC2, traceC3, traceC4,
    traceD1, traceD2, traceD3, traceD4
  ];
  
  var layout = {
    grid: {rows: 4, columns: 4, pattern: 'independent'},
    width: 800,
    height: 800
  };

  // invoke

  Plotly.newPlot('matrix-2', data, layout);
}