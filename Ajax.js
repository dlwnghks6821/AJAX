$(document)
.on('click','#id',function(){
  $.ajax({
    url://접근할 서버 주소//
    method://'get이냐,post이냐'//
    data:"name="+userid+&passwd="+passcode",//전달할 데이터
    datatype:'text',
    beforeSend:function(){
      //전달하기전에 할일
    }
    success:function(txt){
      //process with response
      //전송하고 나서 성공했을때 호출된다.
    }
    error:function(){
      //실패했을때 호출된다.
    }
    complete:function(){
      //전송에 실패/성공했던 할일
    }
  });

})




