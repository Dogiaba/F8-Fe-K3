var parents = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var result = parents.map((value) => {
  return {
    id:value.id, 
    name:value.name,
    ...{ children: value.parent[0] },
    [parents.length > 1 && "children"]: parents.map((t, j) => {
      return {
        parent: value.parent[j],
      };
    }),
  };
});
console.log("Bài làm 1 đang bị sai");
console.log(result);

//-------------------------------------------------
console.log("--------LESSON2------------");

var arr = [10, 20, 30, 60];
Array.prototype.reduce2 = function(prev, value){
  var i = 0;
  if(arguments.length < 2){
    i++;
    value = this[0];
  }
  for(var i= 1; i<this.length; i++){
    value = prev(value, this[i], i,this)
  }
  return value;
}

var arr2 = arr.reduce2(function(prev,value){
  return prev + value;
});
console.log(arr2);
