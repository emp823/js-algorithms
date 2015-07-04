// JS Algorithms

var regularSort = function(list) {
  return list.sort( function(a,b) { return a - b } )
}

var selectionSort = function(list) {
  for (var i = 0; i < list.length; i++) {
    var min = list[i];
    var index = i;
    for (var j = i + 1; j < list.length; j++) {
      if (min > list[j]) {
        min = list[j];
        index = j;
      }
    }
    list[index] = list[i];
    list[i] = min;
  }
  return list;
}

var insertionSort = function(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i - 1;
    var current = list[i];
    while (j >= 0 && current < list[j]) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = current;
  }
  return list;
};

var test = [2, 4, 2, 12, 5, 1, 9];
regularSort(test);
selectionSort(test);
insertionSort(test);
