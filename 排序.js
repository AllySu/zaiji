// 冒泡排序
// 方法一： 找最小的
var arr = [2, 5, 4, 1, 7, 3, 8, 6, 9, 0];
var times = 0;
var bubbleSort = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) { // 如果前面的数据比后面的大就交换
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            console.log("第" + (++times) + "次排序后：" + arr);
        }
    }
    return arr;
}
console.log("The result is:" + bubbleSort(arr));

// 方法二： 找最大的

var arr = [2, 5, 4, 1, 7, 3, 8, 6, 9, 0];
var times = 0;

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
                var temp = arr[j + 1]; // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            console.log("第" + (++times) + "次排序后：" + arr + "此时i=" + i + "j=" + j);
        }
    }
    return arr;
}
console.log("The result is:" + bubbleSort(arr));


// 快速排列方法

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // 如果数组只有一个数，就直接返回；
    }

    var num = Math.floor(arr.length / 2); // 找到中间数的索引值，如果是浮点数，则向下取整
    var numValue = arr.splice(num, 1); // 找到中间数的值
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < numValue) {
            left.push(arr[i]); // 基准点的左边的数传到左边数组
        } else {
            right.push(arr[i]); // 基准点的右边的数传到右边数组
        }
    }
    return quickSort(left).concat([numValue], quickSort(right)); // 递归不断重复比较
}
alert(quickSort([32, 45, 37, 16, 2, 87]));
