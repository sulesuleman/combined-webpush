var ShopifyClient = function(){
    var c = this;

    c.add_shopify_sdk_css = function(){
        var head = document.head;
        var styleElement1 = document.createElement('link');
        styleElement1.rel = 'stylesheet';
        styleElement1.type = 'text/css';
        styleElement1.href = "https://s3.amazonaws.com/dev.chirpyweb.com/shopify_component.css";
        head.appendChild(styleElement1);
    }

    c.show_back_in_stock = function(container_elem){
        container_elem.insertAdjacentHTML("afterbegin",`
        <div id="chirpyweb-floating-card-mobile" class=' col-sm-12 floating-label-card-wrapper flex-class-custom'>
			<div id="chirpyweb-label-header-backInStock-mobile" class=' floating-label-header-wrapper flex-class-custom'>
				<span style="color: white">Back In Stock</span>
			</div>
		</div>
		<div id="chirpyweb-floating-card" class=' col-sm-12 floating-label-card flex-class-custom'>
         <div id="chirpyweb-label-header-backInStock" class=' floating-label-header flex-class-custom'>
              <span style="color: white">Price Drop Notification</span>
         </div>
          <div id="chirpyweb-floating-body-backInStock" class='floating-label-body row' style="flex-direction: column">
              <img src="images/screenshot.png" />

              <h2 style="font-weight: 1000; margin-top: 20px">Product Name</h2>
              <h4 style="margin-top: 20px">Floating Label Message</h4>
              <button id="back-in-stock-floating-inside-button-desktop" type="button" class="success-button">Floating Label Button</button>
          </div>
     	</div>
     	<div id="chirpyweb-floating-card-mobile-div-BackInStock" class=' col-sm-12 floating-label-card-mobile'>
         <div id="chirpyweb-label-header-backInStock-mobile" class=' floating-label-header flex-class-custom'>
              <span style="color: white; font-size: 35px; font-weight: 900">Floating Label Title</span>
         </div>
          <div id="chirpyweb-floating-body-mobile" class='flex-class-custom row' style="flex-direction: column">
              <img src="images/screenshot.png" />
              <h2 style="font-weight: 1000; margin-top: 20px">Product Name</h2>
              <h4 style="margin-top: 20px; font-size: 30px; font-weight: 900">Floating Label Message</h4>
              <button  id="back-in-stock-floating-inside-button-mobile" type="button" style="width: 50%; font-size: 30px; height: 50px; font-weight: bold" class="success-button">Floating Label Button</button>
          </div>
     	</div>`);
     	document.getElementById('chirpyweb-label-header-backInStock').onclick = function () {
            if(window.getComputedStyle(document.getElementById('chirpyweb-floating-body-backInStock')).display === 'none'){
                document.getElementById('chirpyweb-floating-body-backInStock').classList.add('flex-class-custom');
            } else {
                document.getElementById('chirpyweb-floating-body-backInStock').classList.remove('flex-class-custom');
            }
        };
     	document.getElementById('chirpyweb-label-header-backInStock-mobile').onclick = function () {
		if(window.getComputedStyle(document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock')).display === 'none'){
			document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock').classList.add('display-block');
		} else {
			document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock').classList.remove('display-block');
		}
	};
    }

    c.show_price_drop = function(container_elem){
        container_elem.insertAdjacentHTML("afterbegin",`
        <div id="chirpyweb-floating-card-mobile" style="margin-left: 70%" class=' col-sm-12 floating-label-card-wrapper flex-class-custom'>
			<div id="chirpyweb-label-header-PriceDrop-mobile" class=' floating-label-header-wrapper flex-class-custom'>
				<span style="color: white">Price Drop</span>
			</div>
		</div>
		<div style="right: 10px" id="chirpyweb-floating-card" class=' col-sm-12 floating-label-card flex-class-custom'>
         <div id="chirpyweb-label-header-priceDrop" class=' floating-label-header flex-class-custom'>
              <span style="color: white">Floating Label Title</span>
         </div>
          <div id="chirpyweb-floating-body-priceDrop" class='floating-label-body row' style="flex-direction: column">
              <img src="images/screenshot.png" />

              <h2 style="font-weight: 1000; margin-top: 20px">Product Name</h2>
              <h4 style="margin-top: 20px">Floating Label Message</h4>
              <button id="price-drop-floating-inside-button-desktop" type="button" class="success-button">Floating Label Button</button>
          </div>
     	</div>
     	<div id="chirpyweb-floating-card-mobile-div-PriceDrop" class=' col-sm-12 floating-label-card-mobile'>
         <div id="chirpyweb-label-header-PriceDrop-mobile" class=' floating-label-header flex-class-custom'>
              <span style="color: white; font-size: 35px; font-weight: 900">Floating Label Title</span>
         </div>
          <div id="chirpyweb-floating-body-mobile" class='flex-class-custom row' style="flex-direction: column">
              <img src="images/screenshot.png" />
              <h2 style="font-weight: 1000; margin-top: 20px">Product Name</h2>
              <h4 style="margin-top: 20px; font-size: 30px; font-weight: 900">Floating Label Message</h4>
              <button  id="price-drop-floating-inside-button-mobile" type="button" style="width: 50%; font-size: 30px; height: 50px; font-weight: bold" class="success-button">Floating Label Button</button>
          </div>
     	</div>`);
     	document.getElementById('chirpyweb-label-header-priceDrop').onclick = function () {
		    if (window.getComputedStyle(document.getElementById('chirpyweb-floating-body-priceDrop')).display === 'none'){
                document.getElementById('chirpyweb-floating-body-priceDrop').classList.add('flex-class-custom');
            } else {
                document.getElementById('chirpyweb-floating-body-priceDrop').classList.remove('flex-class-custom');
            }
	    };
	    document.getElementById('chirpyweb-label-header-PriceDrop-mobile').onclick = function () {
            if (window.getComputedStyle(document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock')).display === 'none'){
                console.log('here')
                document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock').classList.add('display-block');
            } else {
                document.getElementById('chirpyweb-floating-card-mobile-div-BackInStock').classList.remove('display-block');
            }
        };
    }
}
