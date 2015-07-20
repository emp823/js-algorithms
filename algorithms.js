// JS Algorithms

function testArray() {
  return [2, 4, 2, 12, 5, 1, 9];
}

function sortedArray() {
  return [1, 2, 2, 4, 5, 9, 12];
}

function isEqual(array1, array2) {
  return array1.length === array2.length &&
  array1.every(function(value, index) { return value === array2[index] });
}

var regularSort = function(list) {
  return list.sort( function(a,b) { return a - b } );
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

var expected = sortedArray();

var regularResult = regularSort(testArray());
console.log(isEqual(regularResult, expected));

var selectionResult = selectionSort(testArray());
console.log(isEqual(selectionResult, expected));

var insertionResult = insertionSort(testArray());
console.log(isEqual(insertionResult, expected));
