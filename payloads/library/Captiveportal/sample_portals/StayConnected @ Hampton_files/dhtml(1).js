activeButton = "";	
clickedButton = "";
SPPId = "";
loginFormSubmitted = false;
jQuery(document).ready(function() {
	
	$( window ).unload(function() {
		loginFormSubmitted = false;
	});
	
	/*radioInit();
	returnUrlInit();*/
	   
	/*$(".form_element_spacing").click(function(event){
		clickedButton = this.id;
		slideToggle($("#"+clickedButton+"_option"),"visible");
		if (activeButton != clickedButton) {
			slideToggle($("#"+activeButton+"_option"));
			}
		activeButton = clickedButton;
		clearHHonorsFields();
	 });
	 
	 
	 $("a.help_link").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'width' : 650,
		'height' : 450,
		'type'	: 'iframe'		
	});
*/	
	$("label").inFieldLabels(); 
	
	$("#locale_select").change(function() {
		if (location.href.split("?").length > 1) {
			reg = new RegExp("locale=[a-z]{2}");
			if (location.href.match(reg)) {
				location.href = location.href.replace(reg, "locale="+$(this).val());
			} else {
				location.href = location.href  + "&locale="+$(this).val();
			}
		} 
	});
	
	/*
	$("#HHUsername").change(function() {
		clearNonHHonorsFields();
	});

	$("#HHPassword").change(function() {
		clearNonHHonorsFields();
	});	

	$("#HHRoomNumber").change(function() {
		clearNonHHonorsFields();
	});	
	*/
});



/*
function radioInit(){
	var optionRadios = document.getElementsByName("option");
	for (var i = 0; i < optionRadios.length; i++) {
		if (optionRadios[i].checked){
			activeButton = optionRadios[i].id;
			$("#"+activeButton+"_option").slideDown(500);
		}
	}
}

function clearHHonorsFields(){
	var HHUsernameField = document.getElementById('HHUsername');
	if (HHUsernameField){
		HHUsernameField.focus();
		HHUsernameField.value="";
		HHUsernameField.blur();
	}
	var HHPasswordField = document.getElementById('HHPassword');
	if (HHPasswordField){
		HHPasswordField.focus();
		HHPasswordField.value="";
		HHPasswordField.blur();
	}
	var HHRoomNumberField = document.getElementById('HHRoomNumber');
	if (HHRoomNumberField){
		HHRoomNumberField.focus();
		HHRoomNumberField.value="";
		HHRoomNumberField.blur();
	}
	return true;
}

function clearNonHHonorsFields(){
	var textfields = ["AccessCode","LastName","RoomNumber","PromotionCode","username","password","memberpass"];
	for (var i in textfields) {
		var thisTextfield = document.getElementById(textfields[i]);
		if(thisTextfield){
			thisTextfield.focus();
			thisTextfield.value = "";
			thisTextfield.blur();
		}
	}
	
	var radiobuttons = ["promo_button","folio_button","pms_button","ccbill_button","subscriber_button"];	
	for (var i in radiobuttons) {
		var thisRadiobutton = document.getElementById(radiobuttons[i]);
		if(thisRadiobutton){
			thisRadiobutton.checked = false;
			$("#"+thisRadiobutton.id+"_option").slideUp(500);
			activeButton = "";
		}
	}
	var roamRealmMenu = document.getElementById('roamRealm');
	if(roamRealmMenu){
		roamRealmMenu.selectedIndex = 0;
	}
	return true;
}
*/

function validateHiltonLoginForm(form){
	if (loginFormSubmitted) {
		return false;
	}

	var validated = false;
	
	var AccessCode = document.getElementById('AccessCode');
	var HHUsername = document.getElementById('HHUsername');
	var HHPassword = document.getElementById('HHPassword');
	var HHRoomNumber = document.getElementById('HHRoomNumber');
	var LastName = document.getElementById('LastName');
	var RoomNumber = document.getElementById('RoomNumber');
	var PromotionCode = document.getElementById('PromotionCode');
	var aupAgree = document.getElementById('aupAgree');
	var username = document.getElementById('username');
	var password = document.getElementById('password');	
	var roamRealm = document.getElementById('roamRealm');
	
	
	var hhonors_button = document.getElementById('hhonors_button');
	var subscriber_button = document.getElementById('subscriber_button');
	var complimentary_button = document.getElementById('complimentary_button');
	var promo_button = document.getElementById('promo_button');
	var folio_button = document.getElementById('folio_button');
	var ccbill_button = document.getElementById('ccbill_button');
	var pms_button = document.getElementById('pms_button');
	var purchase_button = document.getElementById('purchase_button');
	var adddevice_button = document.getElementById('adddevice_button');
	
	var optionChecked = false;
	/*var elements = ["AccessCode","HHUsername","HHPassword","HHRoomNumber","LastName","RoomNumber","PromotionCode","username","password"];
	var dataEntered = false;
	var radioChecked = false;
	for (var i in elements) {
		listElement = document.getElementById(elements[i]);
		
		if (listElement && trim(listElement.value) != "") {
			dataEntered = true;
		}
	}
	*/
	//if (!dataEntered) {
		var optionRadios = document.getElementsByName("option");
		if(optionRadios){
			for (var i = 0; i < optionRadios.length; i++) {
				if (optionRadios[i].checked){
					optionChecked = true;
				}
			}
		}
	//}
	/*
	if(!optionChecked && form.PaymentMethod.value != "Passthrough" ){
		alert(makeSelectAlert);
		return false;
	}	
	*/

	if(!validated){
		if(promo_button && (promo_button.checked)){
			form.PaymentMethod.value = 	PromotionCodePm;
			form.ValidationHash.value = PromotionCodeHash;
			form.action = PromotionCodeAction;
			validated = true;
		} 
	}
	
	
	if(!validated){
		if(folio_button && (folio_button.checked)){
			form.PaymentMethod.value = 	FolioPm;
			form.ValidationHash.value = FolioHash;
			form.action = FolioAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(purchase_button && (purchase_button.checked)){
			form.PaymentMethod.value = 	FolioPm;
			form.ValidationHash.value = FolioHash;
			form.PO.value = '1';
			form.compTier.value = '0';
			form.action = FolioAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(subscriber_button && (subscriber_button.checked)){
			form.PaymentMethod.value = 	MembershipPm;
			form.ValidationHash.value = MembershipHash;
			form.action = MembershipAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(complimentary_button && (complimentary_button.checked)){
			form.PaymentMethod.value = 	FolioPm;
			form.ValidationHash.value = FolioHash;
			form.compTier.value = '1';
			form.PO.value = '1';
			form.action = FolioAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(adddevice_button && (adddevice_button.checked)){
			form.PaymentMethod.value = 	FolioPm;
			form.ValidationHash.value = FolioHash;
			form.addDeviceFlag.value = '1';
			form.action = FolioAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(hhonors_button && (hhonors_button.checked)){
			form.PaymentMethod.value = 	HiltonHonorsPm;
			form.ValidationHash.value = HiltonHonorsHash;
			form.action = HiltonHonorsAction;
			validated = true;
		}
	}
	
	if(form.PaymentMethod.value == "Passthrough"){
		validated = true;
	}

	
	if(validated){
		if(aupAgree && !(aupAgree.type == "hidden")){
			if(!(aupAgree.checked)){
				alert(aupAlert);
				aupAgree.focus();
				validated = false;
			}
		}
	}
	

	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}

function validateHiltonPurchaseForm(form){
	if (loginFormSubmitted) {
		return false;
	}

	var validated = false;

	var ccbill_button = document.getElementById('ccbill_button');
	var pms_button = document.getElementById('pms_button');
	
	var optionChecked = false;

	if(!validated){
		if(folio_button && (folio_button.checked)){
			form.PaymentMethod.value = 	FolioPm;
			form.ValidationHash.value = FolioHash;
			form.action = FolioAction;
			validated = true;
		}
	}
	
	if(!validated){
		if(ccbill_button && (ccbill_button.checked)){
			form.PaymentMethod.value = 	CreditCardPm;
			form.ValidationHash.value = CreditCardHash;
			form.action = CreditCardAction;
			validated = true;
		}
	}
	
	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}

function validatePromoCodeForm(form) {
	if (loginFormSubmitted) {
		return false;
	}
	var validated = false;
	var PromotionCode = document.getElementById('PromotionCode');
	
	if(!validated){
		
		if(trim(PromotionCode.value) == ""){
			alert(couponAlert);
			PromotionCode.focus();
			return false;
		} else {
			var couponReg = new RegExp("^wp");
			var couponString = trim(PromotionCode.value).toLowerCase() ;
			if (couponString.match(couponReg)) {
				form.PaymentMethod.value = 	CouponPm;
				form.ValidationHash.value = CouponHash;
				form.action = CouponAction;
			} else {
				form.PaymentMethod.value = 	PromotionCodePm;
				form.ValidationHash.value = PromotionCodeHash;
				form.action = PromotionCodeAction;
			}
			validated = true;
			var aupAgree = document.getElementById('aupAgree');
			if(aupAgree && !(aupAgree.type == "hidden")){
				if(!(aupAgree.checked)){
					alert(aupAlert);
					aupAgree.focus();
					validated = false;
				}
			}
		}
	}
	
	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}


function validatePMSForm(form) {
	if (loginFormSubmitted) {
		return false;
	}
	var validated = false;
	var LastName = document.getElementById('LastName');
	var RoomNumber = document.getElementById('RoomNumber');
	var PromotionCode = document.getElementById('PromotionCode');
	
		if(!validated){		
			if(RoomNumber.value == ""){
				alert(roomNumberAlert);
				RoomNumber.focus();
				return false;
			} else if(LastName.value == ""){
				alert(lastNameAlert);
				LastName.focus();
				return false;				
			} else {
				form.PaymentMethod.value = 	FolioPm;
				form.ValidationHash.value = FolioHash;
				form.action = FolioAction;
				validated = true;
			}
	}
	

	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}

function validateSubscriberForm(form) {
	if (loginFormSubmitted) {
		return false;
	}
	var validated = false;
	var username = document.getElementById('username');
	var password = document.getElementById('password');	
	var roamRealm = document.getElementById('roamRealm');
	
	
		if(!validated){
		
			var usernameVal = trim(username.value);
			var passwordVal = trim(password.value);
			if(usernameVal == "") {
				alert(usernameAlert);
				username.focus();
				return false;
			} else if (passwordVal == "") {
				alert(passwordAlert);
				password.focus();
				return false;
			} else if (roamRealm.selectedIndex == 0){
				alert(DomainAlert);
				roamRealm.focus();
				return false;	
			} else {
				form.PaymentMethod.value = 	MembershipPm;
				form.ValidationHash.value = MembershipHash;
				form.action = MembershipAction;
				validated = true;
			}
	}
	

	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}

function validateHHonorsForm(form) {
	if (loginFormSubmitted) {
		return false;
	}
	var validated = false;
	var HHUsername = document.getElementById('HHUsername');
	var HHPassword = document.getElementById('HHPassword');
	var HHRoomNumber = document.getElementById('HHRoomNumber');
	
	
	var HHUsernameVal = trim(HHUsername.value);
	var HHPasswordVal = trim(HHPassword.value);
	
	if( (HHUsernameVal != "") || (HHPasswordVal != "") ) {
		if(HHUsernameVal == ""){
			alert(hhAccountAlert);
			HHUsername.focus();
			return false;
		} else if(HHPasswordVal == "") {
			alert(hhPinAlert);
			HHPassword.focus();
			return false;
		} else if(HHRoomNumber && trim(HHRoomNumber.value) == "") {
			alert(roomNumberAlert);
			HHRoomNumber.focus();
			return false;
		} else {
			//form.PaymentMethod.value = 	HiltonHonorsPm;
			//form.ValidationHash.value = HiltonHonorsHash;
			validated = true;
		}
	}	

	if(validated){
		if(loginFormSubmitted){
			// multiclick protection
			return false;
		} else {
			loginFormSubmitted = true;
			return true;
		}
	} else {
		loginFormSubmitted = false;
		return false;
	}	
	
}

