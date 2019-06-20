  var nodes = new vis.DataSet();
  var count = 1;
  nodes.add([
    {id: 1, label:'Kompyuter', color: 'red'},
  ])

  // create an array with edges
  var edges = new vis.DataSet();
  edges.add([
    {from: 1, to: 0},
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {borderWidth: 2},
    interaction: {hover: true}
  }
  var network = new vis.Network(container, data, options);


  // const addNode = (...args) => {

  // }

  const getVal = name => {
    let el = document.getElementsByName(name);
    console.log(el)
    return el[0].value;
  }
  const submitForm = document.getElementById('maForm');

  submitForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let labelName = getVal('inName')
    let option = getVal('color')
    
      count++;
      nodes.add([
        {id: count, label: labelName, color: option},
      ]);

      edges.add([
        {from: 1, to: count},
      ]);

  });
  // console.log(submitForm)