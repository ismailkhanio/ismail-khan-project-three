
// app object
const app = {};

// on click of new line button, display new table row 
app.addLine = function () {
  $('#addRow').click(function(){
    $('.dynamicItemRow').append (
      ` <div class="dynamicRow">
          <input type="text" class= "fieldInput inputRow itemDescInput" maxlength="30">
          <input type="number" class= "fieldInput inputRow amountVal" name="" id="" maxlength="6">
        </div> 
      `
    )
    app.rowPrice();
  });
}

// on input of number in amountVal, total that sum in subtotalVal 
app.rowPrice = function () {
  $('.dynamicRow').on('blur', '.amountVal', function() {
    let rowPrice = 0
    $('.amountVal').each(function(){
      let inputVal = $(this).val();
      if ($.isNumeric(inputVal)){
        rowPrice += parseFloat(inputVal);
      }
    });
    console.log(rowPrice);
    $('.subtotalVal').text(`$ ${rowPrice}`);
  })
}

app.init = function() {
  console.log("app initialized!");
  app.rowPrice();
  app.addLine();
}

// document ready
$(function () {
  app.init();
});
