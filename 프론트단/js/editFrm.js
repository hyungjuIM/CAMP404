// const writeContentFrm = document.getElementsByClassName('write-content-frm');
// const btnBold = document.getElementsByClassName('btn-bold');
// const btnItalic = document.getElementsByClassName('btn-italic');
// const btnUnderline = document.getElementsByClassName('btn-underline');
// const btnStrike = document.getElementsByClassName('btn-strike');
// const btnOrderedList = document.getElementsByClassName('btn-ordered-list');
// const btnUnorderedList = document.getElementsByClassName('btn-unordered-list');


// btnBold.addEventListener("click",function(){
//     setStyle('bold');
// });

// btnItalic.addEventListener("click",function(){
//     setStyle('italic');
// });

// btnStrike.addEventListener("click",function(){
//     setStyle('strikeThrough');
// });

// btnOrderedList.addEventListener("click",function(){
//     setStyle('insertOderedList');
// });

// btnUnorderedList.addEventListener("click",function(){
//     setStyle('insertUnorderedList');
// });

// function setStyle(){
//     document.querySelectorAll("button").contentEdiable = true;
//     focusEditor();
// }

// // 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스 해줌
// function focusEditor(){
//     writeContentFrm.focus({preventScroll: true});
// }





// $(function(){
//     SUNEDITOR.create('content',{
//       font : [
//           'Arial',
//           'tahoma',
//           'Courier New,Courier'
//       ],
//       fontSize : [
//           8, 10, 14, 18, 24, 36
//       ],
//       colorList: [
//           ['#ccc', '#dedede', 'OrangeRed', 'Orange', 'RoyalBlue', 'SaddleBrown'],
//           ['SlateGray', 'BurlyWood', 'DeepPink', 'FireBrick', 'Gold', 'SeaGreen']
//       ],
//       width: '100%',
//       maxWidth: '600px',
//       minWidth: 400,
//       height : 'auto',
//       imageWidth : 150,
//       popupDisplay: 'local',
//       resizingBar: false,
//       buttonList : [
//           ['font', 'fontSize',
//           'fontColor', 'hiliteColor',
//           'fullScreen', 'codeView']
//       ],
//       callBackSave: function (contents) {
//           alert(contents);
//       }
//     });
//   });
//   // 글쓰기 버튼
//     function saveButton(){
//         if(document.getElementById("title").value === "" || 
//         document.getElementById("title").value == null ){
//         alert("제목을 입력해주세요");
//         return false;
//     }
 
    // // 자신의 프로젝트에 맞춰서 경로 수정 필요
    // $.ajax({
    //   url: "//write",
    //   type: "post",
    //   data: {
    //       title : document.getElementById("title").value,
    //       content : $('.sun-editor-editable').html(),
    //   } ,
    //   // dataType: "json",
    //   error : function(request, status, error){
    //       alert('등록 실패');
    //       console.dir(request);
    //       console.dir(status);
    //       console.dir(error);
    //   },
    //   success : function(result){
    //     alert("등록이 완료되었습니다.");
    //     // 자신의 프로젝트에 맞춰서 경로 수정 필요
    //     location.href="/board/noticeList";
    //   }
    // });
    // }



