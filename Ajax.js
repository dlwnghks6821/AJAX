$(document)
.on('click','#id',function(){
  $.ajax({
    url://������ ���� �ּ�//
    method://'get�̳�,post�̳�'//
    data:"name="+userid+&passwd="+passcode",//������ ������
    datatype:'text',
    beforeSend:function(){
      //�����ϱ����� ����
    }
    success:function(txt){
      //process with response
      //�����ϰ� ���� ���������� ȣ��ȴ�.
    }
    error:function(){
      //���������� ȣ��ȴ�.
    }
    complete:function(){
      //���ۿ� ����/�����ߴ� ����
    }
  });

})




