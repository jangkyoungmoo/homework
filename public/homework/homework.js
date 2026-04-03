console.log("js 파일이 연결되었습니다.")

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("h1").textContent = "자기소개 페이지";
    const name = document.querySelector("h2");
    name.addEventListener("click", function(){
        alert("안녕하세요! 저는 장경무입니다.");
    });
    document.querySelector(".like").addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.style.backgroundColor = "#c8f7c5";
        }
    });
    document.querySelector(".dislike").addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.style.backgroundColor = "#ffd6d6";
        }
    });
});