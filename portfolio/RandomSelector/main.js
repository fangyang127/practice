// window.onload = function(){
//     // alert("hi");
// };

let imageURL_Array = [
    "https://www.upmedia.mg/upload/article/20200815095538790340._%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%BC%E3%83%AD",
    "https://sweetamy.tw/wp-content/uploads/2021/08/IMG20210721124221-scaled.jpg",
    "https://shop.8way.com.tw/images/ProSlide/P001/Pork-Dumpling.png",
    "https://images.chinatimes.com/newsphoto/2021-06-10/656/20210610003297.jpg"
];


$(function(){
    let lastChildNumber = -1; // 初始值為 -1，表示沒有上一次選擇的元素
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber;
        do {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        } while (randomChildNumber === lastChildNumber); // 如果選擇到與上一次相同的元素，則重新生成一個隨機數
        lastChildNumber = randomChildNumber; // 將選擇的元素編號存儲為上一次選擇的元素
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});