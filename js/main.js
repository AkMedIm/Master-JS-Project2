(function GetLoser() {
  this.applicants=[];
  this.init=function(){
    this.addApplicants();
  };
  this.addApplicants = function(){
    function generateList(input){
      var value= input.value;
      if(this.checkValid(value)){
          applicants.push(value);
          input.value='';
      }else{
        window.alert( "something wrong!" );

      }
      console.log(applicants);

    }
    var addBtn = document.querySelector('#add_applicant');
    addBtn.addEventListener('click',function(){
      var input=document.querySelector('#applicant_value');
      generateList(input);
    });
  };
  this.checkValid = function(value){
    if(applicants.indexOf(value) < 0 && value != ''){
      return true;
    }
    return false;
  };
  this.init();
})();
