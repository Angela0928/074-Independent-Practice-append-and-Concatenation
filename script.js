$(".to-pack-button").click(function() {
    let item;
    item = $(".to-pack-input").val();
    $(".packing-list").append("<li>I'm going to pack"+" "+item+"</li>");
});

$(".course-button").click(function() {
    let item;
    item = $(".course-input").val();
    $(".course-list").append("<li>"+"pick this course"+" "+item+"</li>");
});
