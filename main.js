class Accordion{
  constructor(selector, multiple){
    this.accordion = document.querySelectorAll(selector)
    this.multiple = multiple
    this.bindEvents()
  }

  bindEvents(){
    document.querySelectorAll(".item header").forEach(itemHeader =>{
      itemHeader.addEventListener('click', ()=>{
        let item = itemHeader.parentNode

        item.classList.toggle('active')
      })
    })
  }

  validateMultiple(selectedItem){
    if(this.multiple) return;
    this.accordion.querySelectorAll('.item').forEach(item =>{
      if(selectedItem == item) return;
      item.classList.remove('active')
    })
  }

}


(function(){

  new Accordion('.accordion', false)
})()