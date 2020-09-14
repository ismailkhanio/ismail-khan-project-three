
// app object
const app = {};

// on click of new line button, display new table row 
app.addLine = function () {
  $('#addRow').click(function(e){
    e.preventDefault();

    $('.dynamicItemRow').append (
      ` <div class="dynamicRow">
					<div class="inputFlexContainer">
						<label for="itemInput" class="itemLabel">Item</label>
						<input type="text" class="fieldInput inputRow itemDescInput" id="itemInput" name="itemInput" maxlength="38" placeholder="Enter item description here...">
					</div>
					<!-- $ amount -->
					<div class="amountFlexContainer">
						<label for="amountVal">Amount</label>
						<p class="currencySymbol fieldInput">$</p>
						<input type="number" class="fieldInput inputRow amountVal" id="amountVal" name="amountValue" min="0" max="999999">
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

// limit number character input
app.numLimit = function () {
  $('.amountVal').oninput(function() {
    if (this.value.length > 5) {
      this.value = this.value.slice(0,4);
    }
  });
}
// app.numLimit();
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
