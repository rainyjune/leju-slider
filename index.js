$(function(){
  new slider("#newsContainer", {
    wrap: "#newsWrapper",
    trigger: "#numList",
    activeTriggerCls: "d-cur",
    hasTrigger: true,
    play: true,
    loop: true,
    lazy: '.lazyimg'
  }); 
});
