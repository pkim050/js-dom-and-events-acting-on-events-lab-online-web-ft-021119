function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const temp = document.createElement("li");
  temp.innerHTML = retrieveEmployeeInformation();
  (document.querySelector("ul.employee-list")).append(temp);
}

function addNewLiOnClick() {

}
