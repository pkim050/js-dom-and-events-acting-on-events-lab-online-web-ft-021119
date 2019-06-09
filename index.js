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
  const newLi = document.createElement("li");
  const ulEL = document.querySelector("ul.employee-list");
  newLi.innerHTML = retrieveEmployeeInformation();
  ulEL.append(newLi);
}

function addNewLiOnClick() {

}
