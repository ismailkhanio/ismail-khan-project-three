
// app object
const app = {};

// on click of new line button, display new table row 
app.addLine = function () {
  $('#addRow').click(function(){
    $('.dynamicItemRow').append (
      ` <div class="dynamicRow">
					<label for="itemInput"></label>
					<input type="text" class="fieldInput inputRow itemDescInput" id="itemInput" name="itemInput" maxlength="30">
					<div class="amountFlexContainer">
						<p class="currencySymbol fieldInput">$</p>
						<label for="amountVal"></label>
						<input type="number" class="fieldInput inputRow amountVal" id="amountVal" name="amountValue" min="0" maxlength="6">
					</div>
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
    $('.subtotalVal').text(`$ ${rowPrice}`);
  })
}

// initialize app
app.init = function() {
  console.log("app initialized!");
  app.rowPrice();
  app.addLine();
}

// document ready
$(function () {
  app.init();
});
