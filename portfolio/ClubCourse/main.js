$(function(){
    // 獲取 input type="date" 的元素
    var dateInput = document.getElementById("startDate");
    
    // 監聽日期改變事件
    dateInput.addEventListener("change", function(){
        // 將選擇的日期轉換為日期物件
        var selectedDate = new Date(Date.parse(this.value));
        
        // 設定起始日期
        setStartDate(selectedDate);
        
        // 重新生成課程表格
        generateCourseTable();
    });
    
    // 預設起始日期為當日
    var startDate = new Date();
    setStartDate(startDate);
    generateCourseTable();
    
    // 設定起始日期的函式
    function setStartDate(date) {
        startDate = date;
    }
    $("#addButton").click(function(){
        var newTopic = $("#newTopic").val();
        topic.push(newTopic);
        generateCourseTable();
        $("#newTopic").val("");
    });
    // 生成課程表格的函式
    function generateCourseTable() {
        $("#courseTable").empty().append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        var topicCount = topic.length;

        // 一天的毫秒數
        var millisecsPerDay = 24*60*60*1000;
        
        for(var x=0;x<topicCount;x++){
            $("#courseTable").append(
                "<tr>"+
                "<td>"+(x+1)+"</td>"+
                "<td>"+(new Date(startDate.getTime()+x*millisecsPerDay)).toLocaleDateString("zh-TW", {month: 'short', day: 'numeric'})+"</td>"+
                "<td>"+topic[x]+"</td>"+
                "</tr>");
        }
    }
});

