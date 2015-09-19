$(function(){
  $("#newsWrapper li").width($("#newsWrapper").width());
  new slider("#newsContainer", {
    wrap: "#newsWrapper",
    trigger: "#numList",
    activeTriggerCls: "d-cur",
    hasTrigger: true,
    play: false,
    loop: false,
    lazy: '.lazyimg'
  }); 
});
