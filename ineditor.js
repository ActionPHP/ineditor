$.fn.ineditor = function(options,callback){
var callback = callback;
var options = options;
return this.each(function(){


		var _content = $(this).html();
		if(!_content && _content != '0'){
			$(this).html('Click to edit');
		}
		
		$(this).click(function(){

			var _edited = $(this);

			if(!_edited.hasClass('actionphp-ineditor')) {
					
					var _value = _edited.html();

					_value = (_value == 'Click to edit') ? '' : _value;

					var _original = _value;
					var _id = _edited.attr("id");

					var _input = '<input type="text" value="' + _value + '" class="actionphp-ineditor-input" />';

					_edited.addClass('actionphp-ineditor');
					_edited.html(_input);
					_edited.find('.actionphp-ineditor-input').focus();

					var _edited_input = _edited.find('.actionphp-ineditor-input');
					
					_edited_input.focusout(function(){
					
						var _edited_value = _edited_input.val();

						if(!_edited_value){

							_edited_value = 'Click to edit';
						}

						_edited_value = (_edited_value) ? _edited_value : _original;
						

						_edited.html(_edited_value);
					
						_edited.removeClass('actionphp-ineditor');

						var _data = {
							_this: this,
							original_value: _original,
							new_value: _edited_value,
							id : _id
						}
						if (typeof callback == 'function') { // make sure the callback is a function
				     	   callback.call(this,_data); // brings the scope to the callback
				    	}

					});
			} 

			_edited.keydown(function(e){

			if(e.keyCode == 13){

				_edited.find('.actionphp-ineditor-input').trigger('focusout');
			}

			});

		});

	
});	

		$(document).click(function(e){
			//	console.log(this);
				//console.log(e.target);
				if(!$(e.target).hasClass('actionphp-ineditor-input') && !$(e.target).hasClass('actionphp-ineditor') ){

					$('.actionphp-ineditor-input').trigger('focusout');
				}
			});


	}
